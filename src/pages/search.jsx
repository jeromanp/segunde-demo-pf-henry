import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardCabin from "components/seeAllCabins/CardCabin";
import Header from "components/Header";
import InputCabin from "components/seeAllCabins/InputCabin";
import Datepicker from "components/form/Datepicker";

export default function Search() {
  const router = useRouter();
  const { adults, children } = router.query;
  useEffect(() => {
    const initRequest = async () => {
      if (adults !== undefined && children !== undefined) {
        setCapacity((parseInt(adults) + parseInt(children)).toString());
        let url =
          "api/cabanas?capacity=" +
          (parseInt(adults) + parseInt(children)).toString();
        const response = await fetch(url);
        const data = await response.json();
        setRooms(data);
      }
    };
    initRequest();
  }, [adults, children]);

  const [capacity, setCapacity] = useState("");
  const [rooms, setRooms] = useState([]);

  const changeHandler = (e) => {
    setCapacity(e.target.value);
  };

  const searchHandler = async () => {
    let url = "api/cabanas";
    if (capacity.length != 0) {
      url = url + "?capacity=" + capacity;
    }
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    setRooms(data);
  };

  return (
    <>
      <Header />
      <div className="flex h-screen">
        <section className="p-14">
          <div className="bg-brand-olive rounded-2xl p-8 w-96">
            <h3 className="text-white text-xl font-bold pb-6 pt-4">
              Seleccionar fechas
            </h3>
            <div className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="arrival-date"
                  className="text-white block font-normal text-sm mb-1.5"
                >
                  Llegada
                </label>
                <div className="p-0.5 w-full rounded-xl bg-white mb-3">
                  <Datepicker />
                </div>
              </div>
              <div>
                <label
                  htmlFor="departure-date"
                  className="text-white block font-normal text-sm mb-1.5"
                >
                  Hasta
                </label>
                <div className="p-0.5 w-full rounded-xl bg-white mb-3">
                  <Datepicker />
                </div>
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="text-white block font-normal text-sm mb-1.5"
                >
                  Cant. de personas
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="10"
                  className="text-neutral-400 border-2 p-2 w-full rounded-md"
                  value={capacity}
                  onChange={changeHandler}
                />
              </div>
              <div className="mx-auto">
                <button
                  onClick={searchHandler}
                  className="bg-brand-yellow text-white rounded-md py-2 px-4 mt-6"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="flex-grow">
          <h1 className="text-brand-green text-xl font-semibold pb-2 pt-12">
            Cabañas disponibles
          </h1>
          <div className="overflow-scroll pr-12 h-4/6">
            <div className="grid grid-cols-1 gap-2">
              {rooms.map((room) => {
                return <CardCabin key={`${room.id}-index`} cabin={room} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
