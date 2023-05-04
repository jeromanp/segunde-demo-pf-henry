import { useSession } from "@supabase/auth-helpers-react";
import Datepicker from "./form/Datepicker";
import GuestsSelector from "./form/GuestsSelector";
import { useEffect, useState } from "react";

export default function CheckOutForm({ price, night, extra }) {
    // Este estado solo lo copie y pegue, para que no me de error el GuestSelector
    const session = useSession();
    const [filters, setFilters] = useState({
        guests: 0,
        checkin: null,
        checkout: null,
    });
    useEffect(() => {
        console.log(filters);
    }, [filters]);

    const clickHandler = async () => {
        if (session === null) {
            alert("No esta logueado");
        } else {
            const response = await fetch("/api/booking", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    checkin: filters.checkin,
                    checkout: filters.checkout,
                    adults: filters.guests,
                    user_id: session.user.id,
                    room_id: "d2282ae3-9224-44f3-a3b2-1a96f9f650fb",
                }),
            });
            const data = await response.json();
            console.log(data);
        }
    };

    return (
        <div className="w-1/3">
            <select className="text-brand-green font-bold text-4xl">
                <option>Cabaña I</option>
            </select>
            <div className="pt-4">
                <div className="border-2 rounded-3xl border-brand-light-green shadow-lg p-6">
                    <h2 className="text-brand-green font-bold text-3xl pt-2">
                        ${price} USD{" "}
                        <span className="text-green font-light text-2xl">
                            por noche
                        </span>
                    </h2>
                    <div className="flex justify-between pt-6">
                        <div>
                            <p className="text-sm font-base pb-0.5">Check-In</p>
                            <div className="border-2 rounded-xl border-brand-light-green pl-6 pr-6">
                                <Datepicker
                                    minDate={new Date()}
                                    setDate={(e) =>
                                        setFilters({
                                            ...filters,
                                            checkin: new Date(e),
                                            checkout:
                                                new Date(e) > filters.checkout
                                                    ? new Date(e)
                                                    : filters.checkout,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-base pb-0.5">
                                Check-Out
                            </p>
                            <div className="border-2 rounded-xl border-brand-light-green pl-6 pr-6">
                                <Datepicker
                                    minDate={filters.checkin}
                                    defaultDate={
                                        filters.checkout ?? filters.checkin
                                    }
                                    setDate={(e) =>
                                        setFilters({
                                            ...filters,
                                            checkout: new Date(e),
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 pb-4 w-full">
                        <p className="text-sm font-base pb-0.5">
                            Cant. personas
                        </p>
                        <div className="border-2 rounded-xl border-brand-light-green p-1">
                            <GuestsSelector
                                bottom="10"
                                filterSetter={setFilters}
                                filters={filters}
                            />
                        </div>
                    </div>

                    <div className="bg-brand-light-green border rounded-xl text-center w-full">
                        <button
                            className="text-white text-xl font-medium p-2"
                            onClick={clickHandler}
                        >
                            Reservar
                        </button>
                    </div>

                    <section className="pt-8">
                        <div className="flex justify-between text-base font-base">
                            <p className="pb-2">
                                ${price} USD por {night} noches
                            </p>
                            <p className="pb-2">${price * night} USD</p>
                        </div>

                        <div className="flex justify-between text-base font-base">
                            <p className="pb-2">Ejemplo Extra </p>
                            <p className="pb-6">${extra} USD</p>
                        </div>

                        <div className="border-2 border-brand-cream rounded-full"></div>
                        <div className="flex justify-between text-2xl font-semibold pt-6 pb-10">
                            <h2>Total</h2>
                            <p>${price * night + extra} USD</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
