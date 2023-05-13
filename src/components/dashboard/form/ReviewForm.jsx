import { useState } from "react";
import { useRouter } from "next/router";
import BtnSubmit from "./BtnSubmit";
import Preload from "../PreloadSmall";
import axios from "axios";

export default function ReviewForm({ review }) {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    //username: review?.username || "",
    //email: review?.email || "",
    stars: review?.stars || 3,
    review: review?.review || "",
    approved: review?.approved || true,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Validaciones de inputs
    let error = null;

    switch (name) {
      case "email":
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(value)) {
          error =
            "Por favor ingrese una dirección de correo electrónico válida";
        }
        if (value.length > 96) {
          error = "El email debe tener como máximo 96 caracteres";
        }
        break;

      case "username":
        const regex = /^[^\d]+$/;
        if (value.length > 64) {
          error = "El nombre de usuario debe tener como máximo 64 caracteres";
        }
        if (!regex.test(value)) {
          error = "Por favor ingrese solamente letras";
        }
        break;

      case "review":
        if (value.length > 280) {
          error = "El comentario debe tener como máximo 280 caracteres";
        }
        break;
      case "stars":
        if (value) {
          value = parseInt(value);
        }
        break;
      case "approved":
        if (value === "SI") {
          value = true;
        }
        if (value === "NO") {
          value = false;
        }
        break;

      default:
        break;
    }

    // Actualizar el estado de los inputs y los errores
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error !== null)) {
      // Si hay un error, se evita hacer el submit y tira un alert vintage
      throw alert("Es necesario corregir los errores");
    }
    setStatus(true);
    if (review?.id) {
      // actualizar
      // console.log(inputs);
      axios
        .put(`/api/comments/${review.id}`, inputs)
        .then((res) => {
          alert("UHU! Hemos actualizado el review");
          router.push("/admin/reviews");
        })
        .catch((err) => console.log("Error", err));
    } else {
      // crear
      console.log(inputs);
      axios
        .post(`/api/comments/`, inputs)
        .then((res) => {
          alert("UHU! Hemos creado un nuevo review");
          router.push("/admin/reviews");
        })
        .catch((err) => console.log("Error", err));
    }
  };

  return (
    <div className={status ? "" : ""}>
      <Preload loading={status} />
      <form onSubmit={handleSubmit}>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="username"
              className="mb-3 block text-sm font-medium text-black"
            >
              Nombre
            </label>

            <div className="relative">
              <input
                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                type="text"
                name="username"
                // id="username"
                // value={inputs.username}
                // onChange={handleChange}
                // required
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-black"
            >
              E-mail
            </label>

            <input
              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
              type="email"
              name="email"
              // id="email"
              // value={inputs.email}
              // onChange={handleChange}
              // required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>

        <div className="flex gap-x-6 items-center my-6">
          <label className="block text-sm font-medium text-black">
            Estrellas
          </label>

          <div x-data="{ checkboxToggle: '' }" className="flex gap-x-5">
            {[...Array(5)].map((_, i) => (
              <div key={i + 1} className="relative flex items-center">
                <input
                  type="radio"
                  name="stars"
                  id={i + 1}
                  value={i + 1}
                  className="checked:bg-slate-500 h-5 w-5 mr-1 border cursor-pointer appearance-none rounded-full"
                  onChange={handleChange}
                  required
                />

                <label htmlFor={i + 1} className="cursor-pointer select-none">
                  {i + 1}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5.5">
          <label
            className="mb-3 block text-sm font-medium text-black"
            htmlFor="review"
          >
            Comentario
          </label>
          <div className="relative">
            <textarea
              className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none resize-none"
              name="review"
              id="review"
              rows="6"
              placeholder="Escribe tu comentario aquí"
              value={inputs.review}
              onChange={handleChange}
              required
            ></textarea>
            {errors.review && <div className="error">{errors.review}</div>}
          </div>
        </div>

        <div className="flex gap-x-6 items-center my-6">
          <label className="block text-sm font-medium text-black">
            Aprobado
          </label>

          <div x-data="{ checkboxToggle: '' }" className="flex gap-x-5">
            {["SI", "NO"].map((approved, i) => (
              <div key={i} className="relative flex items-center">
                <input
                  type="radio"
                  name="approved"
                  id={approved}
                  value={approved}
                  className="checked:bg-slate-500 h-5 w-5 mr-1 border cursor-pointer appearance-none rounded-full"
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor={approved}
                  className="cursor-pointer select-none"
                >
                  {approved}
                </label>
              </div>
            ))}
          </div>
        </div>
        <BtnSubmit cancel_url="/admin/reviews" />
      </form>
    </div>
  );
}
