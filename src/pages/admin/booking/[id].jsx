import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import BookingForm from 'components/form/admin/BookingForm'
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'

export default function Edit({ id }) {
	const [booking, setBooking] = useState({});
	const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get(`/api/booking/${id}`)
    .then((response) => {
      setBooking(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

	return (
		<Layout>
			<Header
				title="Detalles de la reserva"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Detalles de la reserva</li>
				</>)}>
			</Header>

			<div className="flex justify-center">
				<div className="col-span-5 xl:col-span-3 md:w-1/2 w-3/4">
					<div className="rounded-sm border border-stroke bg-white shadow-default">
            {/* <div className="p-7">
              {loading ? "" : <BookingForm booking={booking} />}
            </div> */}
					  {loading 
              ? ( <div className="text-center">Loading...</div> ) 
              : ( <div className='flex flex-col p-4 mx-auto w-full'>
								    <div className="flex md:flex-row flex-col mb-8">
                      <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Nombre:</h3>
                        <p className='ml-4'>{booking.profiles.full__name ? booking.profiles.full__name : '-'}</p>
                      </div>
									    <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Email:</h3>
                        <p className='ml-4'>{booking.profiles.email}</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col mb-8">
                      <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Cabana:</h3>
                        <p className='ml-4'>{booking.rooms.name}</p>
                      </div>
									    <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Huespedes:</h3>
                        <ul className='flex'>
                          <li className='ml-4'>Adultos: {booking.adults}</li>
											    <li li className='ml-4'>-</li>
                          <li className='ml-4'>Ninos: {booking.children ? booking.children : '0'}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col mb-8">
                      <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Check In:</h3>
                        <p className='ml-4'>{ dayjs(booking.checkin).format('DD MMM, YYYY') }</p>
                      </div>
                      <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Check Out:</h3>
                        <p className='ml-4'>{ dayjs(booking.checkout).format('DD MMM, YYYY') }</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col mb-8">
									    <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Pagado:</h3>
                        <p className='ml-4'>{booking.payments ? 'Si' : 'No'}</p>
                      </div>
									    <div className="w-1/2">
                        <h3 className="text-lg font-bold text-primary">Suspendido:</h3>
                        <p className='ml-4'>{booking.suspended ? 'Si' : 'No'}</p>
                      </div>
                    </div>
                  </div>
                )
              }
          </div>
        </div>
      </div>
    </Layout>
	)
}

export async function getServerSideProps({ params }) {
	const { id } = params;

	return {
		props: {
			id,
		},
	};
}