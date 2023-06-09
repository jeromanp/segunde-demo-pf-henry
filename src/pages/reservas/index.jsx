import axios from "axios";
import dayjs from "dayjs";
import Layout from "layouts/Layout";
import Link from "next/link";
import Login from "pages/login";
import Opinion from "components/Opinion.jsx";
import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";

export default function Reservas() {
  const [bookings, setBookings] = useState([]);
  const [toggle, setToggle] = useState(true);
  const session = useSession();

  useEffect(() => {
    const getUserBookings = async () => {
      if (session === undefined || session === null) {
        return;
      }
      const response = await axios(`/api/profile/${session.user.id}/bookings`);
      setBookings(response.data);
    };
    getUserBookings();
  }, [session]);

  const handleDownload = (e) => {
    e.preventDefault();
    // Descarga de comprobante
  };
  return (
    <>
      {session ? (
        <Layout>
          {toggle ? (
            <article className="h-screen">
              <h1
                className="text-brand-green text-3xl font-bold 
			    leading-none text-center pt-14 pb-8 md:text-4xl md:leading-none"
              >
                Tus reservas
              </h1>
              {bookings.length > 0 ? (
                <ul className="w-10/12 md:w-3/4 m-auto md:max-h-[400px] overflow-y-auto">
                  {bookings.map((booking, i) => {
                    const cls =
                      i % 2 === 1 ? "bg-brand-cream" : "bg-brand-white";

                    const hasPassed =
                      dayjs(booking.checkout).format() <
                      dayjs(new Date()).format();
                    const commentPermit = [
                      hasPassed,
                      booking.payments,
                      !booking.suspended,
                    ].every(Boolean);
                    return (
                      <div className="p-1">
                        <li
                          key={i}
                          className={`${cls} p-4 flex justify-between items-center border rounded-xl`}
                        >
                          <h2 className="text-brand-light-green font-semibold flex flex-col lg:flex-row">
                            <span>
                              {dayjs(booking.checkin).format("DD MMM, YYYY")}
                            </span>
                            <span className="hidden lg:block">-</span>
                            <span>
                              {dayjs(booking.checkout).format("DD MMM, YYYY")}
                            </span>
                          </h2>
                          <p className="font-semibold">{booking.rooms.name}</p>
                          <p className="hidden md:block">
                            Pagado: {booking.payments ? "✅" : "❌"}
                          </p>
                          <p className="hidden lg:block">
                            Suspendido: {booking.suspended ? "✅" : "❌"}
                          </p>
                          <div className="flex items-center">
                            <a
                              onClick={handleDownload}
                              className="hover:text-primary ri-file-text-line text-xl leading-none"
                              href="/"
                            ></a>
                            <Link
                              href={`/cabanas/${booking.rooms.id}`}
                              className={`btn-yellow ${
                                hasPassed ? "mx-2" : "ml-2"
                              }`}
                            >
                              Ver cabaña
                            </Link>
                            {commentPermit ? (
                              <button
                                className="btn-yellow"
                                onClick={() => setToggle(false)}
                              >
                                ⭐
                              </button>
                            ) : null}
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              ) : (
                <h1
                  className="text-brand-green text-3xl font-bold 
                                leading-none text-center pt-14 pb-8 md:text-4xl md:leading-none md:mb-60 mb-10"
                >
                  No tenés reservas hechas
                </h1>
              )}
            </article>
          ) : (
            <Opinion setToggle={setToggle} />
          )}
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
