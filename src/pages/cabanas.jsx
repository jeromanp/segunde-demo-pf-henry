import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layouts/Layout";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import house from "../../public/house.svg";
import people from "../../public/people.svg";
import initStripe from "stripe";

export default function Cabins({ plans }) {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    async function getCabins() {
      const response = await axios.get("/api/cabanas");
      const cabinPrices = plans.filter((plan) => plan.interval === "month");

      const cabinsWithPrices = response.data.map((cabin, index) => ({
        ...cabin,
        price:
          cabinPrices.find((plan) => plan.name === cabin.name)?.price / 100,
      }));

      setCabins(cabinsWithPrices);
    }

    getCabins();
  }, []);

  useEffect(() => {
    axios
      .get("/api/cabanas")
      .then((response) => {
        setCabins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    accesibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 xl:px-0">
        <h2
          className="text-brand-green text-3xl font-bold 
											leading-none text-center pt-14 pb-8 
											md:text-4xl md:leading-none"
        >
          Nuestras cabañas
        </h2>

        <div
          className="text-brand-green text-center 
												leading-tight max-w-4xl mx-auto"
        >
          El Complejo está compuesto por 11 cabañas de diferentes capacidades y
          dos piletas al aire libre, elegí la que mejor se adapte a vos y vení a
          disfrutar!
        </div>

        <div className="m-12">
          <Slider {...settings}>
            {cabins.map((cabin) => (
              <div key={cabin.id} className="border text-center rounded-2xl">
                <div className="bg-slate-500 w-full h-60 rounded-2xl mb-8"></div>

                <h2 className="text-brand-green font-bold text-3xl">
                  {cabin.name}
                </h2>

                <div className="flex justify-center m-2">
                  <img src={people.src} alt="Capacidad" className="mx-2" />
                  <p>{cabin.capacity}</p>
                  <p className="mx-2">|</p>
                  <img src={house.src} alt="Habitaciones" className="mx-2" />
                  <p>
                    {Number(cabin.rooms) > 1
                      ? `${cabin.rooms} Habitaciones`
                      : "Monoambiente"}
                  </p>
                </div>

                <div>
                  {cabin.price ? (
                    <>
                      <p>Precio: {cabin.price} ARS / día</p>
                    </>
                  ) : (
                    <p>Precio no disponible</p>
                  )}
                </div>

                <button className="btn-yellow mt-6 mb-8">
                  <Link href={`/cabanas/${cabin.id}`}>Ver más</Link>
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const limit = 11;
  let prices = [];
  let hasMorePrices = true;
  let startingAfter;

  while (hasMorePrices) {
    const options = startingAfter
      ? { limit, starting_after: startingAfter }
      : { limit };
    const { data: newPrices, has_more: morePrices } = await stripe.prices.list(
      options
    );
    prices = prices.concat(newPrices);
    hasMorePrices = morePrices;
    startingAfter = newPrices[newPrices.length - 1]?.id;
  }

  const plans = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product);
      return {
        id: price.id,
        name: product.name,
        price: price.unit_amount,
        interval: price.recurring.interval,
        currency: price.currency,
      };
    })
  );

  const sortedPlans = plans.sort((a, b) => a.price - b.price);

  return {
    props: {
      plans: sortedPlans,
    },
  };
};
