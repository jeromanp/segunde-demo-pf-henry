import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layouts/Layout";
import Link from "next/link";
import Slider from "react-slick";
import house from "../../public/house.svg";
import people from "../../public/people.svg";
import initStripe from "stripe";

export default function Cabins({ plans }) {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    async function getCabins() {
      const response = await axios.get("/api/cabanas");
  
       const pricesMap = plans.reduce((map, plan) => {
        map[plan.name] = plan.price / 100;
        return map;
      }, {});
  
      const cabinsWithPrices = response.data.map((cabin, index) => ({
        ...cabin,
        price: pricesMap[cabin.name] || null,
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
    dots: true,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div className="container h-screen mx-auto px-6 2xl:px-0">
        <h2
          className="text-brand-green text-3xl font-bold leading-none 
					text-center pt-14 pb-8 md:text-4xl md:leading-none">
          Nuestras cabañas
        </h2>

        <div
          className="text-brand-green text-center leading-tight max-w-4xl mx-auto">
          El Complejo está compuesto por 11 cabañas de diferentes capacidades y
          dos piletas al aire libre, elegí la que mejor se adapte a vos y vení a
          disfrutar!
        </div>

        <div className="m-10">
          <Slider {...settings}>
            {cabins.map((cabin) => (
              <div key={cabin.id} className="group">
                <div className="mx-8 text-center rounded-2xl mb-8 overflow-hidden">
                {cabin.images
                ? (
									<div 
										className="h-56 overflow-hidden rounded-2xl shadow-lg">
										<img 
											src={cabin.images.url[0].fileUrl} 
											alt={cabin.name} 
											className="w-full h-full object-cover"/>
								</div>
								)
              : <div className="bg-slate-300 rounded-t-xl">No hay imagenes</div>}

                <h2 className="text-brand-green font-bold text-3xl mt-5">
                  {cabin.name}
                </h2>

                <div className="text-sm flex justify-center items-center mt-2">
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

                <div className="text-xs leading-tight font-medium mt-2">
                  {cabin.price ? (
                    <>
                      <div>Precio: {cabin.price} ARS / día</div>
                    </>
                  ) : (
                    <div className="opacity-40">Precio no disponible</div>
                  )}
                </div>

                <Link href={`/cabanas/${cabin.id}`} className="btn-yellow mt-6 mb-8">Ver más</Link>
              </div>
              </div>
            ))}
          </Slider >
          
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
