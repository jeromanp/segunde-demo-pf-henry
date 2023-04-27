import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function GuestsSelector(props) {
    const [show, setShow] = useState(false);
    const [guests, setGuests] = useState({
        adults: 2,
        children: 0,
    });
    const [total, setTotal] = useState(0);

    useEffect(() => {
        //console.log(guests.adults + guests.children);
        setTotal(guests.adults + guests.children);
        props.filterSetter({
            ...props.filters,
            adults: guests.adults,
            children: guests.children,
        });
    }, [guests]);

    const popup_class = `bg-white inset-x-0 absolute bottom-${
        props.bottom ?? 0
    } rounded-t-lg`;

    return (
        <div className="w-full relative">
            <div
                className="text-gray-400 text-sm flex items-center 
									px-3 py-1.5 gap-x-1 cursor-pointer select-none"
                onClick={() => setShow(true)}
            >
                <i className="ri-user-fill text-lg"></i>
                <span className="">Huéspedes{total ? `: ${total}` : ""}</span>
            </div>

            {show ? (
                <div
                    className={popup_class}
                    onMouseLeave={() => setShow(false)}
                >
                    <div className="p-3 flex justify-between items-center">
                        <div className="">Adultos</div>
                        <div className="w-1/2">
                            <Spinner
                                defaultValue={guests.adults}
                                setValue={(e) =>
                                    setGuests({ ...guests, adults: e })
                                }
                            />
                        </div>
                    </div>

                    <div className="p-3 flex justify-between items-center">
                        <div className="">Niños</div>
                        <div className="w-1/2">
                            <Spinner
                                defaultValue={guests.children}
                                setValue={(e) =>
                                    setGuests({ ...guests, children: e })
                                }
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
