import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import RoomForm from 'components/form/admin/RoomForm'

export default function Edit()
{
	return (
		<Layout>
			<Header 
				title="Edit cabaña"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Edit cabaña</li>
				</>)}>
			</Header>

			<div class="flex justify-center">
				<div class="col-span-5 xl:col-span-3 w-1/2">
					<div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div class="p-7">
							<RoomForm />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}