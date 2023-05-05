import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import ReviewForm from 'components/form/admin/ReviewForm'

export default function Edit()
{
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
        <div class="col-span-5 xl:col-span-3 w-1/2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-7">
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
	)
}