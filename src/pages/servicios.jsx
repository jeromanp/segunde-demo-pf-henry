import { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from '../layouts/Layout'

export default function Services(){

	const [data, setData] = useState({
		list: [],
	})

	useEffect(() => {
		axios.get('api/services')
		.then(resp => setData(resp.data))
	}, [])


	return (
		<Layout>
			<div className="container mx-auto px-6 xl:px-0">
				<h2 
					className="text-brand-green text-3xl font-bold 
											leading-none text-center pt-14 pb-8 
											md:text-4xl md:leading-none">
					{ data.page_title }
				</h2>

				<div 
					className="text-brand-green text-center 
												leading-tight max-w-4xl mx-auto">
					{ data.intro }
				</div>


				<div 
					className="text-brand-green grid gap-10 py-20
										items-start
										sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6
										lg:gap-7">
					{ data.list ? 
						data.list.map((e, i) => (
							<div 
								key={i}
								className="grid justify-center gap-2
													max-w-xs mx-auto">
								
								<div 
									className="h-36">
									<img 
										src={ e.icon } 
										alt={ `Icono ${e.title}` }
										className="h-32 object-cover" />
								</div>
								
								<h3 
									className="text-xl font-semibold select-none">
									{ e.title }
								</h3>
								
								<div 
									className="leading-tight md:text-sm md:leading-tight">
									{ e.content }
								</div>
							</div>
						)) : null}
				</div>
			</div>
		</Layout>
	)
}