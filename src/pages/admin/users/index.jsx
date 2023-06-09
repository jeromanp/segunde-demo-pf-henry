import Layout from '../../../layouts/DashboardLayout';
import Header from '../../../components/dashboard/PageHeader';
import TableHead from '../../../components/dashboard/tables/TableHead';
import Link from 'next/link';
import axios from 'axios';
import swalAction from 'components/dashboard/swalAction';
import dayjs from 'dayjs';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';

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
      return dayjs(lastCheckOut).format('DD MMM, YYYY')
    } else {
      return "no hay registros";
    }
  };

  const deleteHandler = async (e) => {
    const id = e.target.value;
    const response = await swalAction(
      'usuario',
      id,
      setUsers,
      users,
      'profile'
    );

    if (response) {
      const user = (await axios(`/api/profile/${id}`)).data;
      const username = user.username ? user.username : user.full_name;
      const usermail = user.email;
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_GENERIC,
        {
          user_name: username,
          user_email: usermail,
          message: `Hola${username ? ` ${username}` : ''}, lamentamos informarte que hemos tomado acciones
          con tu usuario, ahora estas ${response}.`,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
    }
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
                      <td
                        className={
                          `border-[#eee] py-5 px-4 ${i < user.length - 1 ? 'border-b' : ''}`
                        }>
                        <h5 className="text-black text-sm font-semibold capitalize">
                          {user.name ? user.name : user.full_name}
                        </h5>
                        <p className="text-xs">{user.email}</p>
                      </td>
                      <td
                        className={
                          `border-[#eee] py-5 px-4 ${i < user.length - 1 ? 'border-b' : ''}`
                        }>
                        <p className="text-sm font-medium">{totalBookings(user.id)}</p>
                      </td>
                      <td
                        className={
                          `border-[#eee] py-5 px-4 ${i < user.length - 1 ? 'border-b' : ''}`
                        }>
                        <p className="text-sm font-medium">{lastBooking(user.id)}</p>
                      </td>
                      <td
                        className={
                          `border-[#eee] py-5 px-4 ${i < user.length - 1 ? 'border-b' : ''}`
                        }>
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

      <div className="h-20"></div>

    </Layout>
  );
}
