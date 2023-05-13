import { useSession } from "@supabase/auth-helpers-react";
import Datepicker from "./form/Datepicker";
import GuestsSelector from "./form/GuestsSelector";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { addDays } from "helpers/dateProcessing";
import DatePicker from "./DatePicker";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function CheckOutForm({
    name,
    price,
    night,
    extra,
    default_price,
    room,
    filters,
    setFilters,
}) {
    // Este estado solo lo copie y pegue, para que no me de error el GuestSelector
    const session = useSession();

    const clickHandler = async () => {
        if (filters.checkin === null || filters.checkout === null) {
            alert("Elija las fechas de viaje");
            return;
        }
        const bodyData = {
            checkin: new Date(filters.checkin),
            checkout: new Date(filters.checkout),
            adults: filters.guests,
            user_id: session.user.id,
            room_id: room.id,
        };
        const response = await fetch("/api/booking", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        });

        const data = await response.json();

        const checkOutBodyData = {
            roomId: room.id,
            price_id: default_price,
            night: night,
            subscription: true,
            booking_id: data[0].id,
        };
        const checkoutSessionResponse = await fetch(`/api/checkout_sessions`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(checkOutBodyData),
        });
        const checkoutSessionData = await checkoutSessionResponse.json();
        window.location.href = checkoutSessionData.url;
    };

    return (
        // <div className="w-1/3">
        <div className="w-full md:w-1/3 px-4">
            <div className="pt-4">
                <div className="pb-8">
                    <h2 className="font-medium text-3xl text-black pb-6">
                        Tu viaje
                    </h2>
                    <div className="border-2 border-brand-light-green rounded-full"></div>
                    <div className="pt-6">
                        <div>
                            <p className="text-lg text-black font-base pb-0.5">
                                Registre su Fecha
                            </p>
                            <div className="border-2 rounded-xl border-brand-light-green p-0.5">
                                {/* <Datepicker
                                    minDate={new Date()}
                                    defaultDate={filters.checkin}
                                    setDate={(e) =>
                                        setFilters({
                                            ...filters,
                                            checkin: new Date(e),
                                            checkout:
                                                new Date(e) >= filters.checkout
                                                    ? addDays(new Date(e), 1)
                                                    : filters.checkout,
                                        })
                                    }
                                /> */}
                                {/* ESTE ES EL DATE PICKE NUEVO QUE BLOQUEA FECHAS */}
                                <DatePicker
                                    filters={filters}
                                    setFilters={setFilters}
                                    disabledDates={room.booking.filter(
                                        (el) => el.payments === true
                                    )}
                                />
                            </div>
                        </div>

                        {/* <div className="pt-4 w-full">
                            <p className="text-lg text-black font-base pb-0.5">
                                Check-Out
                            </p>
                            <div className="border-2 rounded-xl border-brand-light-green p-0.5">
                                <Datepicker
                                    minDate={filters.checkin}
                                    defaultDate={
                                        filters.checkout >= filters.checkin
                                            ? filters.checkout
                                            : addDays(filters.checkin, 1)
                                    }
                                    setDate={(e) =>
                                        setFilters({
                                            ...filters,
                                            checkout: new Date(e),
                                        })
                                    }
                                />
                            </div>
                        </div> */}
                    </div>

                    <div className="pt-4 pb-6 w-full">
                        <p className="text-lg text-black font-base pb-0.5">
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
                            className="text-white text-xl font-medium p-4 w-full"
                            onClick={clickHandler}
                            type="submit"
                            role="link"
                        >
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
