import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../layouts/Layout';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import house from '../../public/house.svg';
import people from '../../public/people.svg';

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
											md:text-4xl md:leading-none">
          Nuestras cabañas
        </h2>

        <div
          className="text-brand-green text-center 
												leading-tight max-w-4xl mx-auto">
          El Complejo está compuesto por 10 cabañas de diferentes capacidades y dos piletas al aire libre, elegí la que mejor se adapte a vos y vení a disfrutar!
        </div>

        <div className='m-12'>
          <Slider {...settings} >
            {cabins.map(cabin => (
              <div key={cabin.id} className='border text-center rounded-2xl'>
                <div className='bg-slate-500 w-full h-60 rounded-2xl mb-8'></div>

                <h2 className='text-brand-green font-bold text-3xl'>{cabin.name}</h2>

                <div className='flex justify-center m-2'>
                  <img src={people.src} alt="Capacidad" className='mx-2' />
                  <p>{cabin.capacity}</p>
                  <p className='mx-2'>|</p>
                  <img src={house.src} alt="Habitaciones" className='mx-2' />
                  <p>{Number(cabin.rooms) > 1 ? `${cabin.rooms} Habitaciones` : 'Monoambiente'}</p>
                </div>

                <button className='btn-yellow mt-6 mb-8'>
                  <Link href={`/cabanas/${cabin.id}`} >Ver más</Link>
                  </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </Layout>
  );
}