import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../layouts/Layout';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Cabins() {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    axios
      .get('/api/cabanas')
      .then(response => {
        setCabins(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

	const card_class = `border border-gray-200 rounded-2xl shadow-md bg-white max-w-xs`;
  const card_image_class = 'h-44 overflow-hidden rounded-2xl';
  const card_body_class = 'px-7 py-6 grid gap-y-5';

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
		className: 'max-w-full mx-auto',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 xl:px-0">
        <h2 className="text-brand-green text-3xl font-bold leading-none text-center pt-14 pb-8 md:text-4xl md:leading-none">
          Nuestras cabañas
        </h2>
        <div className="text-brand-green text-center leading-tight max-w-4xl mx-auto">
          El Complejo está compuesto por 10 cabañas de diferentes capacidades y dos piletas al aire libre, elegí la que mejor se adapte a vos y vení a disfrutar!
        </div>

				<div className='p-12 bg-brand-cream rounded-3xl my-1'>
        <Slider {...settings}>
          {cabins.map(cabin => (
            <div key={cabin.id} className={card_class}>
              <div className={card_image_class}>
                <img src="cabin-1.webp" alt="Imagen de cabaña IV" className="w-full h-full object-cover pointer-events-none" />
              </div>
              <div className={card_body_class}>
                <h3 className="text-brand-green text-2xl font-bold leading-none text-center select-none">{cabin.name}</h3>
                <div className="text-gray-500 text-xs leading-tight font-medium flex justify-center items-center">
                  <div className="flex items-center gap-2">
                    <i className="ri-group-fill"></i>
                    {cabin.capacity}
                  </div>
                  <div className="border-l border-gray-400 h-4 mx-2.5"></div>
                  <div className="flex items-center gap-2">
                    <i className="ri-home-2-fill"></i>
                    {cabin.rooms} Habitaciones
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link href={`/cabanas/${cabin.id}`}>
                    <span className="btn-yellow">Ver más</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
				</div>
      </div>
    </Layout>
  );
}