import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import RoomForm from 'components/form/admin/RoomForm'
import { supabase } from 'utils/supabase'

export default function Edit({ room }) {
	return (
		<Layout>
			<Header
				title="Edit cabaña"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Edit cabaña</li>
				</>)}>
			</Header>

			<div className="flex justify-center">
				<div className="col-span-5 xl:col-span-3 w-1/2">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="p-7">
							<RoomForm room={room} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ params }) {
	const { id } = params;
  
	const { data: room, error } = await supabase
	  .from("rooms")
	  .select("*")
	  .eq("id", id);
  
	if (error) {
	  return {
		notFound: true,
	  };
	}
  
	return {
	  props: {
		room: room[0],
	  },
	};
  }