import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import UserForm from 'components/form/admin/UserForm'

export default function Create()
{
	return (
		<Layout>
			<Header 
				title="Create huésped"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Create huésped</li>
				</>)}>
			</Header>

      <div class="flex justify-center">
				<div class="col-span-5 xl:col-span-3 w-1/2">
          <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="p-7">
              <UserForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
	)
};