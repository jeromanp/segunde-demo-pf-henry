import Layout from "../../../layouts/DashboardLayout";
import Header from "../../../components/dashboard/PageHeader";
import TableHead from "../../../components/dashboard/tables/TableHead";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import swalAction from "components/dashboard/swalAction";

const table_head = [
  { idx: 'name', title: 'Nombre', width: 'min-w-[220px]' },
  { idx: 'total', title: 'Total reservas', width: 'min-w-[150px]' },
  { idx: 'date', title: 'Fecha último check-out', width: 'min-w-[120px]' },
  { idx: 'actions', title: 'Acciones' },
];

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/profile")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/api/booking")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalBookings = (id) => {
    const counter = bookings.filter((booking) => booking.user_id === id).length;
    return counter;
  };

  const lastBooking = (id) => {
    const filteredBookings = bookings.filter(
      (booking) => booking.user_id === id
    );
    if (filteredBookings.length >= 1) {
      const lastCheckOut =
        filteredBookings[filteredBookings.length - 1].checkout;
      return lastCheckOut;
    } else {
      return "no hay registros";
    }
  };

  const deleteHandler = (e) => {
    swalAction(
      'usuario',
      e.target.value,
      setUsers,
      users,
    )
  }

  return (
    <Layout>
      <Header
        title="Huéspedes"
        breadcrumbs={
          <>
            <li>/</li>
            <li className="text-primary">Huéspedes</li>
          </>
        }
      >
        <Link
          href="/admin/users/create"
          className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-70 py-1.5 px-4 text-sm text-center font-medium text-white hover:bg-opacity-90"
        >
          Nuevo huésped
        </Link>
      </Header>

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <TableHead data={table_head} />

              <tbody>
                {users &&
                  users.map((user, i) => (
                    <tr key={i}>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <h5 className="font-medium text-black">
                          {user.name ? user.name : user.full_name}
                        </h5>
                        <p className="text-sm">{user.email}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                        <p className="text-black">{totalBookings(user.id)}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <p className="text-black">{lastBooking(user.id)}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4">
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary"
                            href={`/admin/users/${user.id}`}
                          >
                            <i className="ri-edit-line text-xl leading-none"></i>
                          </Link>
                          <button className="hover:text-primary ri-close-circle-line text-xl leading-none"
                            onClick={deleteHandler}
                            value={user.id}>
                          </button>
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
