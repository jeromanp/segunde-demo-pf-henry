import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import BookingForm from 'components/form/admin/BookingForm'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Edit({ id }) {
	const [booking, setBooking] = useState([]);
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
				title="Editar reserva"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Editar Reserva</li>
				</>)}>
			</Header>

			<div className="flex justify-center">
				<div className="col-span-5 xl:col-span-3 w-1/2">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="p-7">
							{loading ? '' : <BookingForm booking={booking} />}
						</div>
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