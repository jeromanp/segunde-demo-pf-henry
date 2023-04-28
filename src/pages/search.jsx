import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardCabin from "components/seeAllCabins/CardCabin";

function search() {
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
    <div>
      <div>
        <h1>Search</h1>
      </div>
      <label htmlFor="capacityFilter">Capacidad</label>
      <input
        type="number"
        value={capacity}
        onChange={changeHandler}
        className="border-2"
        id="capacityFilter"
      />
      <button onClick={searchHandler} className="btn-yellow">
        Search
      </button>
      <div className="max-h-screen overflow-y-auto">
        <h1 className="text-brand-green text-xl font-semibold mb-4 pt-8">
          Cabañas disponibles
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {rooms.map((room) => {
            return (
              <CardCabin key={`${room.id}-index`} cabin={room} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default search;
