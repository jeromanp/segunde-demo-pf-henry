import axios from "axios";
import Header from "components/Header";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Comentario() {
  const [comments, setComments] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    accesibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
    ]
  };

  useEffect(async () => {
    const response = (await axios.get('/api/comments')).data;
    setComments([...response]);
  }, [])

  return (
    <>
      <Header />
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-brand-green text-4xl font-bold mb-6 mt-8">
            Nuestros huespedes!
          </h2>
          <p className="text-black font-medium text-xl mb-8 pr-8">
            Nuestros huéspedes son nuestra prioridad, ofrecemos una experiencia
            acogedora, cálida y auténtica para cada uno de nuestros visitantes.
            Queremos que te sientas como en casa!
          </p>
          <Slider {...settings}>
            {comments.map((comment, i) => (
              <div key={i} className="cursor-grab active:cursor-grabbing shrink-0 w-96 border p-3 h-80">
                <p className="text-brand-green font-semibold text-2xl mb-1" >
                  {comment.profile.name}
                </p>

                <div className="stars">
                  {[...Array(comment.stars)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-brand-yellow mr-4"
                    ></i>
                  ))}
                </div>

                <p className="text-black mt-2">
                  {comment.review}
                </p>
              </div>
            ))}
          </Slider>
        </div >
      </section>
    </>
  );
}