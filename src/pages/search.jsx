import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardCabin from "components/seeAllCabins/CardCabin";
import CardSkeleton from "components/seeAllCabins/CardSkeleton";
import Layout from "../layouts/Layout";
import Datepicker from "components/form/Datepicker";

export default function Search() {
  const router = useRouter();
  const { adults, children, checkin, checkout } = router.query;
  const [filters, setFilters] = useState({
    capacity: 2,
    checkIn: null,
    checkOut: null,
  });

  // useEffect(() => {
  //     console.log(filters);
  // }, [filters]);

  useEffect(() => {
    const initRequest = async () => {
      if (adults !== undefined && children !== undefined) {
        let aux = parseInt(adults) + parseInt(children);
        let auxCheckIn = "";
        let auxCheckOut = "";

        let url = "api/cabanas?capacity=" + aux;
        if (checkin !== "" && checkout !== "") {
          auxCheckIn = checkin.replaceAll('"', "");
          auxCheckOut = checkin.replaceAll('"', "");
          url = url + "&checkin=" + auxCheckIn + "&checkout=" + auxCheckOut;
        } else {
          auxCheckIn = new Date();
          auxCheckOut = new Date();
        }
        setFilters({
          ...filters,
          capacity: aux,
          checkIn: new Date(auxCheckIn),
          checkOut: new Date(auxCheckOut),
        });
        const response = await fetch(url);
        const data = await response.json();
        setRooms(data);
        setIsLoading(false);
      }
    };

    initRequest();
  }, [adults, children, checkin, checkout]);

  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const changeHandler = (e) => {
    setFilters({
      ...filters,
      capacity: parseInt(e.target.value),
    });
  };

  const searchHandler = async () => {
    let url = "api/cabanas";
    if (filters.capacity !== 0) {
      url = url + "?capacity=" + filters.capacity;
    }
    if ((filters.checkIn !== null) & (filters.checkOut !== null)) {
      url =
        url + "&checkin=" + filters.checkIn + "&checkout=" + filters.checkOut;
    }
    const response = await fetch(url);
    const data = await response.json();
    setRooms(data);
  };

  return (
    <>
      <Layout>
        <div className="flex pb-8">
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
                    <Datepicker
                      min={new Date()}
                      defaultDate={
                        filters.checkIn === null ? undefined : filters.checkIn
                      }
                      setDate={(e) => {
                        setFilters({
                          ...filters,
                          checkIn: new Date(e),
                          checkOut:
                            new Date(e) > filters.checkOut
                              ? new Date(e)
                              : filters.checkOut,
                        });
                      }}
                    />
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
                    <Datepicker
                      min={filters.checkIn}
                      defaultDate={
                        filters.checkOut === null ? undefined : filters.checkOut
                      }
                      setDate={(e) => {
                        setFilters({
                          ...filters,
                          checkOut: new Date(e),
                        });
                      }}
                    />
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
                    value={filters.capacity}
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

          <div className="flex-grow pt-12 pr-12">
            <h1 className="text-brand-green text-xl font-semibold pb-2">
              Cabañas disponibles
            </h1>
            <div
              className="flex-grow overflow-y-auto h-98"
              style={{ minHeight: "500px", maxHeight: "500px" }}
            >
              <div className="grid grid-cols-1 gap-2">
                {isLoading ? (
                  <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                  </>
                ) : (
                  rooms.map((room) => {
                    return <CardCabin key={`${room.id}-index`} cabin={room} />;
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
