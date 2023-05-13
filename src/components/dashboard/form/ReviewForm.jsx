import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BtnSubmit from "./BtnSubmit";
import Preload from "../PreloadSmall";
import axios from "axios";

export default function ReviewForm({ review }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [status, setStatus] = useState(false);
  const [form, setForm] = useState({
    review: review?.review || "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("/api/profile")
      .then((response) => {
        setProfiles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getUserName = () => {
    const prof = profiles.filter((profile) => profile.id === review.user_id);
    const userName = prof[0].full_name;
    return userName;
  };
  const getUserEmail = () => {
    const prof = profiles.filter((profile) => profile.id === review.user_id);
    const email = prof[0].email;
    return email;
  };
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Validaciones de inputs
    let error = null;

    switch (name) {
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
    setForm({
      ...form,
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
      axios
        .put(`/api/comments/${review.id}`, form)
        .then((res) => {
          // acá va el envío de mail, cuando se fixee el update de reviews lo hago. atte: Marquitos
          alert("UHU! Hemos actualizado el review");
          router.push("/admin/reviews");
        })
        .catch((err) => console.log("Error", err));
    } else {
      // crear
      axios
        .post(`/api/comments/`, form)
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
              {review ? <h1>{loading ? "" : getUserName()}</h1> : ""}
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-black"
            >
              E-mail
            </label>
            {review ? <h1>{loading ? "" : getUserEmail()}</h1> : ""}
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
              value={form.review}
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
