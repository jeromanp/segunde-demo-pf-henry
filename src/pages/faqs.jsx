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


	const accordeon_header = `font-semibold leading-none h-12 
														px-5 py-3 flex items-center
														select-none cursor-pointer 
														transition-all 
														hover:bg-brand-green hover:text-white
														lg:text-base lg:leading-tight`
	const accordeon_body = 'text-sm px-5 pb-5 select-none bg-white'

	const toggleActive = i => {
    setData(prevData => ({
      ...prevData,
      list: prevData.list.map((e, j) => ({
        ...e,
        active: i === j ? !e.active : false
      }))
    }))
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
								className="border border-brand-green text-brand-green w-full grid gap-2 items-center mx-auto">
								
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