import { useState } from "react";

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating} stars\nComment: ${comment}`);
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="my-4 flex flex-col items-center"
  >
    <div className="text-center">
      <h1 className="text-3xl font-bold text-brand-green">
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
            className={`text-4xl ${
              star <= rating ? "text-brand-yellow" : "text-brand-cream"
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
          className="block w-full p-2 border border-brand-brown placeholder-brand-brown rounded-lg focus:border-brand-light-green focus:outline-none"
          style={{ height: "100px" }}
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

export default RatingForm;
