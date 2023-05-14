import { useState } from "react";
import { useRouter } from "next/router";
import Services from "../../../helpers/services";
import BtnSubmit from "./BtnSubmit";
import Preload from "../PreloadSmall";
import axios from "axios";
import CabinBuckets from "components/CabinBuckets";
import CabinGallery from "components/CabinGallery";

export default function RoomForm({ room }) {
  const types = ["A", "B", "C"];

  const [form, setForm] = useState({
    name: room?.name || "", // `Cabaña #${ Date.now() }`,
    type: room?.type || "A",
    rooms: room?.rooms || 1,
    capacity: room?.capacity || 1,
    beds: room?.beds || 1,
    bathrooms: room?.bathrooms || 1,
    price: room?.price || 1000,
    services: room?.services || [],
    description: room?.description || "", //'Bienvenido a este hermoso refugio en medio de la naturaleza. Un lugar magnífico para disfrutar de unas relajantes vacaciones en familia o para una escapada de fin de semana con amigos. Aquí podrás desconectar del mundo y sumergirte en un ambiente de confort y tranquilidad. Con amplias habitaciones, acogedoras áreas comunes y una hermosa vista al bosque, esta cabaña es el lugar perfecto para disfrutar de momentos inolvidables con tus seres queridos. ¡Te esperamos!',
  });

  const router = useRouter();
  const [userServices, setUserServices] = useState({ ...Services });

  const services = Object.keys(userServices).map((service) =>
    service.replaceAll("_", " ")
  );
  const [status, setStatus] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (services.includes(name)) {
      const serviceName = name.replaceAll(" ", "_");
      setUserServices({
        ...userServices,
        [serviceName]: !userServices[serviceName],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleServices = (e) => {
    const { value } = e.target;
    const services = form.services;

    if (services.indexOf(value) < 0) {
      services.push(value);
    } else {
      const idx = services.indexOf(value);
      services.splice(idx, 1);
    }

    setForm({ ...form, services: services });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus(true);

    if (room?.id) {
      axios
        .put("/api/cabanas", { form, id: room.id })
        .then((resp) => {
          // console.log(resp.data)
          alert("UHU! Hemos actualizado los datos de la cabaña");
          router.push("/admin/rooms");
        })
        .catch((err) => console.log("Error", err));
    } else {
      axios
        .post("/api/cabanas", form)
        .then((resp) => {
          // console.log(resp.data)
          alert("WOHA! la nueva cabaña que creaste ya está lista");
          router.push("/admin/rooms");
        })
        .catch((err) => console.log("Error", err));
    }
  };

  const [mostrarGallery, setMostrarGallery] = useState(false);
  const buttonTextGallery = mostrarGallery
    ? `Esconder imágenes de ${room.name}`
    : `Ver imágenes de ${room.name}`;

  const [mostrarBucket, setMostrarBucket] = useState(false);
  const buttonTextBucket = mostrarBucket
    ? "No agregar imágenes"
    : "Agregar imágenes";

  return (
    <div className={status ? "" : ""}>
      <div className="font-poppins grid grid-cols-5 gap-8">
        <Preload loading={status} />

        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <form onSubmit={submitHandler} className="p-7">
              <div className="grid gap-y-6">
                <div className="">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Nombre
                  </label>

                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={changeHandler}
                  />
                </div>

                <div className="flex gap-x-8 items-center">
                  <label className="block text-sm font-medium text-black">
                    Tipo
                  </label>

                  {types.map((type, i) => (
                    <label
                      key={`tipo-${i}`}
                      className="cursor-pointer select-none relative 
															inline-flex items-center gap-x-2"
                    >
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        className="hidden"
                        onChange={changeHandler}
                      />

                      <span
                        className={
                          form.type == type
                            ? `border border-primary h-5 w-5 
													grid place-content-center rounded-full 
													cursor-pointer 
													checked:bg-slate-400`
                            : `border border-slate-400 h-5 w-5 
													grid place-content-center rounded-full 
													cursor-pointer 
													checked:bg-slate-500`
                        }
                      >
                        {form.type == type ? (
                          <span className="bg-primary w-2.5 h-2.5 block rounded-full" />
                        ) : null}
                      </span>
                      <span className="font-semibold">{type}</span>
                    </label>
                  ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="">
                    <label
                      htmlFor="rooms"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Habitaciones
                    </label>

                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                      type="number"
                      name="rooms"
                      id="rooms"
                      value={form.rooms}
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="capacity"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Capacidad (personas)
                    </label>

                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                      type="number"
                      name="capacity"
                      id="capacity"
                      value={form.capacity}
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="">
                    <label
                      htmlFor="beds"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Camas
                    </label>

                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                      type="number"
                      name="beds"
                      id="beds"
                      value={form.beds}
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="bathrooms"
                      className="mb-3 block text-sm font-medium text-black"
                    >
                      Baños
                    </label>

                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                      type="number"
                      name="bathrooms"
                      id="bathrooms"
                      value={form.bathrooms}
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="price"
                    className="mb-3 block text-sm font-medium text-black"
                  >
                    Precio
                  </label>

                  <div className="relative">
                    <span className="opacity-70 text-xl leading-none left-4 top-3.5 absolute">
                      $
                    </span>

                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-8 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                      type="number"
                      name="price"
                      id="price"
                      value={form.price}
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className="">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Servicios
                  </label>

                  <div className="grid grid-cols-2 gap-y-1.5">
                    {services.map((service, i) => (
                      <div key={`service-${i}`}>
                        <label
                          key={`service-${i}`}
                          className="font-medium flex gap-x-0.5 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name={service}
                            if={service}
                            value={service}
                            className="hidden"
                            onChange={handleServices}
                          />

                          <div className="relative">
                            <div
                              className={
                                form.services.indexOf(service) >= 0
                                  ? "bg-primary border-primary mr-4 flex h-5 w-5 items-center justify-center rounded border"
                                  : "mr-4 flex h-5 w-5 items-center justify-center rounded border"
                              }
                            >
                              {form.services.indexOf(service) >= 0 ? (
                                <span>
                                  <svg
                                    width="11"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                      className="fill-white stroke-white"
                                      strokeWidth="0.4"
                                    ></path>
                                  </svg>
                                </span>
                              ) : null}
                            </div>
                          </div>

                          <span className="text-black text-sm leading-none pt-1 font-medium">
                            {service}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="">
                  <label className="mb-3 block text-sm font-medium text-black">
                    Descripción
                  </label>

                  <textarea
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 
														font-medium text-black resize-none 
														focus:border-primary focus-visible:outline-none"
                    name="description"
                    id="description"
                    rows="6"
                    value={form.description}
                    onChange={changeHandler}
                  ></textarea>
                </div>

                <BtnSubmit cancel_url="/admin/rooms" />
              </div>
            </form>
          </div>
        </div>

        {/* NOTA: Falta implementar el file upload */}
        <div className="col-span-5 xl:col-span-2">
          <div>
            <button
              onClick={() => setMostrarGallery(!mostrarGallery)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
            >
              {buttonTextGallery}
            </button>
            {mostrarGallery && (
              <CabinGallery
                type={room.type}
                name={room.name}
                className="mt-4"
              />
            )}
          </div>

          <div>
            <button
              onClick={() => setMostrarBucket(!mostrarBucket)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
            >
              {buttonTextBucket}
            </button>
            {mostrarBucket && (
              <CabinBuckets
                type={room.type}
                name={room.name}
                className="mt-4"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
