import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import BookingForm from 'components/form/admin/BookingForm'

export default function Edit() {
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
							<BookingForm />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}