import Layout from "../../../layouts/DashboardLayout";
import Header from "../../../components/dashboard/PageHeader";
import TableHead from "../../../components/dashboard/tables/TableHead";
import Link from "next/link";
import { supabase } from "utils/supabase";
import axios from "axios";
import { useState, useEffect } from "react";
import swalAction from "components/dashboard/swalAction";

const table_head = [
  { idx: 'image', title: '' },
  { idx: 'cabin', title: 'Cabaña', width: 'min-w-[220px]' },
  {	idx: 'total', title: 'Reservas totales', width: 'min-w-[150px]' },
  { idx: 'actions', title: 'Acciones' },
];

/**
export async function getServerSideProps() {
  const { data: rooms, error } = await supabase
    .from("rooms")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      rooms: rooms,
    },
  };
}
 */


export default function Dashboard({ rooms }) {
  const [roomList, setRoomList] = useState(rooms);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
		axios.get('/api/cabanas')
					.then(resp => setRoomList(resp.data))
					.catch((error) => console.error(error));

    axios.get("/api/booking")
					.then(resp => setBookings(resp.data))
					.catch((error) => console.log(error))
  }, []);


  const totalBookings = (id) => {
    const counter = bookings.filter((booking) => booking.room_id === id).length;
    return counter;
  };

  const deleteHandler = async (e) => {
    swalAction(
      'cabaña',
      e.target.value,
      setRoomList,
      roomList,
			'cabanas'
    );
  };

  return (
    <Layout>
      <Header
        title="Cabañas"
        breadcrumbs={
          <>
            <li>/</li>
            <li className="text-primary">Cabañas</li>
          </>
        }
      >
        <Link
          href="/admin/rooms/create"
          className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-70 py-1.5 px-4 text-sm text-center font-medium text-white hover:bg-opacity-90"
        >
          Nueva cabaña
        </Link>
      </Header>

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <TableHead data={table_head} />

              <tbody>
                {roomList &&
                  roomList.map((room, i) => (
                    <tr key={room.id}>
                      <td 
												className={
													`border-[#eee] py-5 px-4 ${i < roomList.length -1 ? 'border-b' : ''}`
												}>
                        <div className="h-12.5 w-15 rounded-md">
                          <img src="../product-04.png" alt="Product" />
                        </div>
                      </td>
                      <td 
												className={
													`border-[#eee] py-5 px-4 select-none ${i < roomList.length -1 ? 'border-b' : ''}`
												}>
                        <h5 className="text-slate-700 font-bold">
													<Link href={`/admin/rooms/${room.id}`}>
														{room.name}
													</Link>
												</h5>
                        <p className="text-[10px] font-semibold uppercase leading-none tracking-wide">
													<span className={
														room.suspended ? 'text-red-700' : 'text-green-500'
													}>
													{ room.suspended ? 'deshabilitada' : 'habilitada' }
												</span>
												</p>
                      </td>
                      <td 
												className={
													`border-[#eee] py-5 px-4 ${i < roomList.length -1 ? 'border-b' : ''}`
												}>
                        <p className="text-sm font-medium">{totalBookings(room.id)}</p>
                      </td>
                      <td 
												className={
													`border-[#eee] py-5 px-4 ${i < roomList.length -1 ? 'border-b' : ''}`
												}>
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary"
                            href={`/admin/rooms/${room.id}`}>
                            <i className="ri-edit-line text-xl leading-none"></i>
                          </Link>
                          <button
                            onClick={deleteHandler}
                            className="hover:text-primary ri-close-circle-line text-xl leading-none"
                            value={room.id}
                          >
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