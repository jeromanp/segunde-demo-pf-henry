import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import ReviewForm from 'components/form/admin/ReviewForm'
import { supabase } from 'utils/supabase'

export default function Edit({ review }) {
  return (
    <Layout>
      <Header
        title="Edit review"
        breadcrumbs={(<>
          <li>/</li>
          <li className="text-primary">Edit review</li>
        </>)}>
      </Header>

      <div className="flex justify-center">
        <div className="col-span-5 xl:col-span-3 w-1/2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-7">
              <ReviewForm review={review} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data: review, error } = await supabase
    .from("comments")
    .select("*")
    .eq("id", id);

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      review: review[0],
    },
  };
}