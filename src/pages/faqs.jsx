import { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from '../layouts/Layout'

export default function Faqs(){

	const [data, setData] = useState({
		list: [],
	})

	useEffect(() => {
		axios.get('api/faqs')
		.then(resp => setData(resp.data))
	}, [])


	const accordeon_header = `font-semibold leading-none h-full 
														px-5 py-3 flex items-center
														select-none cursor-pointer 
														transition-all 
														hover:bg-brand-green hover:text-white
														lg:text-base lg:leading-tight`
	const accordeon_body = 'text-sm px-5 pb-8 select-none cursor-pointer'

	const toggleActive = i => {
		data.list.forEach(e => e.active = false)
		data.list[i].active = true
		
		data.list.forEach(e => console.log(e.active))
	}

	return (
		<Layout>
			<div className="container mx-auto px-6 xl:px-0">
				<h2 
					className="text-brand-green text-3xl font-bold 
											leading-none pt-14 pb-8 
											md:text-4xl md:leading-none">
					{ data.page_title }
				</h2>

				<div 
					className="text-brand-green leading-tight mx-auto">
					{ data.intro }
				</div>


				<div 
					className="text-brand-green grid gap-3 pt-8 pb-20
										md:grid-cols-2 md:gap-x-6">
					{ data.list ? 
						data.list.map((e, i) => (
							<div 
								key={i}
								className="border border-brand-green text-brand-green w-full h-16 grid gap-2 items-center mx-auto">
								
								<h3 
									className={ accordeon_header }
									onClick={() => toggleActive(i)}>
									{ e.title }
								</h3>
								
								<div 
									className={ e.active ? accordeon_body : `${accordeon_body} hidden` }>
									{ e.content }
								</div>
							</div>
						)) : null}
				</div>
			</div>
		</Layout>
	)
}