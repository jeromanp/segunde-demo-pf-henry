import axios from "axios";
import Header from "components/Header";
import { useEffect, useState } from "react";

export default function Comentario() {

  const [comments, setComments] = useState([])

  useEffect(async () => {
    const response = (await axios.get('/api/comments')).data;
    setComments([...response, ...response]);
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
          <div className="border container-snap w-full flex gap-4 overflow-x-auto snap-x">
            {comments.map(comment => (
              <div className=" shrink-0 w-96 snap-center border">
                <p p className="text-brand-green font-semibold text-2xl mb-1" >
                  Gerardo Constantino
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
          </div>
        </div >
      </section>
      <style jsx>
        {`.container-snap::-webkit-scrollbar {
          display: none;
          }

        .container-snap {
          -ms - overflow - style: none; 
          scrollbar-width: none; 
          }`}
      </style>
    </>
  );
}
// Esos clases son para quitar el scrollbar en diversos navegadores