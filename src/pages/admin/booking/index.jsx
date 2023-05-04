import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import TableHead from '../../../components/dashboard/tables/TableHead'
import Link from 'next/link'

const table_head = [
	{ idx: 'date', title: 'Fecha', width: '220px' },
	{ idx: 'cabin', title: 'Cabaña', width: '150px' },
	{ idx: 'check-in', title: 'Check-in', width: '120px' },
	{ idx: 'check-out', title: 'Check-out', width: '120px' },
	{ idx: 'actions', title: 'Acciones' },
]


export default function Dashboard()
{

	return (
		<Layout>

			<Header 
				title="Reservas"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Reservas</li>
				</>)}>
				
				{/* 
				<Link 
					href="/admin/users/create"
					className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-70 py-1.5 px-4 text-sm text-center font-medium text-white hover:bg-opacity-90">
					Nueva reserva
				</Link> 
				*/}
			</Header>


			<div className="flex flex-col gap-10">
				<div
					className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
					<div className="max-w-full overflow-x-auto">
						
						<table className="w-full table-auto">
							<TableHead data={table_head} />
							
							<tbody>
								{[1,2,3,4,5,6,7,8,9,10].map(e => (
									<tr key={e}>
										<td className="border-b border-[#eee] py-5 px-4">
											<p className="text-black">Abr. 12, 2023</p>
										</td>
										<td className="border-b border-[#eee] py-5 px-4">
											<h5 className="font-medium text-black">Cabaña A</h5>
											<p className="text-sm">La mas mejor</p>
										</td>
										<td className="border-b border-[#eee] py-5 px-4">
											<p className="text-black">May 13, 2023</p>
										</td>
										<td className="border-b border-[#eee] py-5 px-4">
											<p className="text-black">May 18, 2023</p>
										</td>
										<td className="border-b border-[#eee] py-5 px-4">
											<div className="flex items-center space-x-3.5">
												<Link className="hover:text-primary" href="detail-reserva.html">
													<i className="ri-file-text-line text-xl leading-none"></i>
												</Link>
												{/* 
												<a className="hover:text-primary" href="edit-reservas.html">
													<i className="ri-edit-line text-xl leading-none"></i>
												</a> 
												*/}
												{/* 
												<button className="hover:text-primary">
													<i className="ri-close-circle-line text-xl leading-none"></i>
												</button> 
												*/}
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