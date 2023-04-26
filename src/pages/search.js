import React, { useState } from "react";

function search() {
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
   //     console.log(data);
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
            <div className="bg-grey-200">
                {rooms.map((room) => {
                    return (
                        <div key={`${room.id}-index`}>
                            <h5>{room.name}</h5>
                            <h6>{room.capacity}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default search;
