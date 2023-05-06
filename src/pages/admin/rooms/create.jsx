import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import RoomForm from 'components/form/admin/RoomForm'

export default function Create()
{
	return (
		<Layout>
			<Header 
				title="Create cabaña"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Create cabaña</li>
				</>)}>
			</Header>

			<div className="flex justify-center">
				<div className="col-span-5 xl:col-span-3 w-1/2">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="p-7">
							<RoomForm />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}