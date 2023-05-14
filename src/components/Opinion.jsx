import axios from "axios";
import Layout from "layouts/Layout";
import Swal from "sweetalert2";
import arrowBack from '../../public/arrowBack.svg';
import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { getProfileId } from "helpers/dbHelpers.js";

export default function RatingForm({ setToggle }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const session = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post('/api/comments', {
      review: comment,
      stars: rating,
      user_id: (await getProfileId(session.user.id)).userId,
    })
      .then(response => {
        Swal.fire(
          'Se envío tu comentario',
          '¡Ojalá vuelvas pronto!',
          'success'
        )
        setRating(0);
        setComment("");
        setToggle(true);
      })
      .catch(error => {
        console.log(error);
        Swal.fire(
          'Hubo un error en el envío de tu comentario',
          'Porfavor, intenta de nuevo más tarde',
          'error'
        )
      })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen my-10 flex flex-col items-center mx-8"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-brand-green">
          <button onClick={() => setToggle(true)}>
            <img src="Back.svg" alt="volver" className="w-5 mr-5"/>
          </button>
          ¡Cuéntanos cómo te pareció tu estadía!
        </h1>
      </div>
      <div className="my-10 w-full max-w-xl">
        <label className="block font-medium text-3xl text-brand-light-green mb-2 text-center">
          Califica tu experiencia
        </label>
        <div className="flex justify-center my-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-4xl ${star <= rating ? "text-brand-yellow" : "text-brand-cream"
                } mx-2`}
              onClick={() => setRating(star)}
            >
              <i className="ri-star-fill" />
            </button>
          ))}
        </div>
      </div>
      <div className="w-full max-w-xl">
        <div className="border-2 rounded-3xl border-brand-light-green shadow-lg p-6">
          <label className="block font-medium text-3xl text-brand-light-green text-center mb-4">
            Deja tu comentario
          </label>
          <textarea
            className="resize-none block w-full p-2 border border-brand-brown placeholder-brand-brown rounded-lg focus:border-brand-light-green focus:outline-none"
            style={{ height: "150px" }}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Me pareció..."
          />
        </div>
      </div>
      <div className="pt-6 w-full max-w-xl">
        <button
          type="submit"
          className="bg-brand-yellow text-white px-10 py-2 rounded-lg w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};