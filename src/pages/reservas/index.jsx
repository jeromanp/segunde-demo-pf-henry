import axios from "axios";
import dayjs from "dayjs";
import Layout from "layouts/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";

export default function Reservas() {
    const [bookings, setBookings] = useState([]);
    const session = useSession();

    useEffect(() => {
        const getUserBookings = async () => {
            if (session === undefined || session === null) {
                return;
            }
            const response = await axios(
                `/api/profile/${session.user.id}/bookings`
            );
            setBookings(response.data);
        };
        getUserBookings();
    }, [session]);

    const handleDownload = (e) => {
        e.preventDefault()
        // Descarga de comprobante
    }

    return (
        <Layout>
            <article>
                <h1 className="text-brand-green text-3xl font-bold 
			    leading-none text-center pt-14 pb-8 md:text-4xl md:leading-none">
                    Tus reservas
                </h1>
                <ul className="w-10/12 md:w-3/4 m-auto md:max-h-[400px] overflow-y-auto">
                    {bookings.map((booking, i) => {
                        const cls = i % 2 === 1 ? 'bg-brand-cream' : 'bg-brand-white';
                        return (<li key={i} className={`${cls} p-4 flex justify-between items-center border rounded-xl`}>
                            <h2
                                className="text-brand-light-green font-semibold"
                            >
                                {dayjs(booking.checkin).format('DD MMM, YYYY')} - {dayjs(booking.checkout).format('DD MMM, YYYY')}
                            </h2>
                            <p className="font-semibold">{booking.rooms.name}</p>
                            <p>Pagado: {booking.payments ? "✅" : "❌"}</p>
                            <p>Suspendido: {booking.suspended ? "✅" : "❌"}</p>
                            <div className="flex items-center">
                                <a
                                    onClick={handleDownload}
                                    className="hover:text-primary ri-file-text-line text-xl leading-none md:mr-4"
                                    href="/"
                                ></a>
                                <Link href={`/cabanas/${booking.rooms.id}`} className="btn-yellow" >Ver cabaña</Link>
                            </div>
                        </li>)
                    })}
                </ul>
            </article>
        </Layout>
    )
}