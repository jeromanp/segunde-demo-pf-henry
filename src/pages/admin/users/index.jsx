import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import TableHead from '../../../components/dashboard/tables/TableHead'
import Link from 'next/link'

const table_head = [
	{ idx: 'nombre', title: 'Nombre', width: '220px' },
	{ idx: 'total-reservas', title: 'Total reservas', width: '150px' },
	{ idx: 'fecha-ultimo-checkout', title: 'Fecha último check-out', width: '120px' },
	{ idx: 'acciones', title: 'Acciones' },
]


export default function Dashboard()
{

	return (
		<Layout>
			
			<Header 
				title="Huéspedes"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Huéspedes</li>
				</>)}>
				
				<Link 
					href="/admin/users/create"
					className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-70 py-1.5 px-4 text-sm text-center font-medium text-white hover:bg-opacity-90">
					Nuevo huésped
				</Link>
			</Header>


			<div className="flex flex-col gap-10">
				<div
					className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
					<div className="max-w-full overflow-x-auto">
						
						<table className="w-full table-auto">
							<TableHead data={table_head} />
							
							<tbody>
								{[1,2,3,4,5,6,7,8,9,10].map(() => (
									<tr>
										<td 
											className="border-b border-[#eee] py-5 px-4">
											<h5 
												className="font-medium text-black">Luke Skywalker</h5>
											<p 
												className="text-sm">l.skywalker@lucasfilms.com</p>
										</td>
										<td 
											className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
											<p 
												className="text-black">2</p>
										</td>
										<td 
											className="border-b border-[#eee] py-5 px-4">
											<p 
												className="text-black">May 13, 2023</p>
										</td>
										<td 
											className="border-b border-[#eee] py-5 px-4">
											<div 
												className="flex items-center space-x-3.5">
												<a 
													className="hover:text-primary" href="/admin/users/edit">
													<i 
														className="ri-edit-line text-xl leading-none"></i>
												</a>
												<button 
													className="hover:text-primary">
													<i 
														className="ri-close-circle-line text-xl leading-none"></i>
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
		</Layout>
	)
}