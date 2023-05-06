import Layout from "../../../layouts/DashboardLayout";
import Header from "../../../components/dashboard/PageHeader";
import TableHead from "../../../components/dashboard/tables/TableHead";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import swalAction from "components/dashboard/swalAction";

const table_head = [
  { idx: "date", title: "Fecha", width: "220px" },
  { idx: "cabin", title: "Cabaña", width: "150px" },
  { idx: "check-in", title: "Check-in", width: "120px" },
  { idx: "check-out", title: "Check-out", width: "120px" },
  { idx: "actions", title: "Acciones" },
];

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/booking")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/cabanas")
      .then((response) => {
        setRooms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRoom = (id) => {
    const room = rooms.find((room) => room.id === id);
    return room.name;
  };

  const deleteHandler = (e) => {
    swalAction(
      'reserva',
      e.target.value,
      setBookings,
      bookings
    )
  }

  return (
    <Layout>
      <Header
        title="Reservas"
        breadcrumbs={
          <>
            <li>/</li>
            <li className="text-primary">Reservas</li>
          </>
        }
      >
        <Link
          href="/admin/booking/create"
          className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-70 py-1.5 px-4 text-sm text-center font-medium text-white hover:bg-opacity-90"
        >
          Nueva reserva
        </Link>
      </Header>

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <TableHead data={table_head} />

              <tbody>
                {bookings &&
                  bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <p className="text-black">{booking.created_at}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <h5 className="font-medium text-black">
                          {loading ? "" : handleRoom(booking.room_id)}
                        </h5>
                        <p className="text-sm">Lorem ipsum dolor sit.</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <p className="text-black">{booking.checkin}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <p className="text-black">{booking.checkout}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary"
                            href="detail-reserva.html"
                          >
                            <i className="ri-file-text-line text-xl leading-none"></i>
                          </Link>
                          <Link
                            className="hover:text-primary"
                            href={`/admin/booking/${booking.id}`}
                          >
                            <i className="ri-edit-line text-xl leading-none"></i>
                          </Link>
                          <button
                            onClick={deleteHandler}
                            className="hover:text-primary ri-close-circle-line text-xl leading-none"
                            value={booking.id}
                          ></button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
