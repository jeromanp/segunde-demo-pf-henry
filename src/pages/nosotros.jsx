import { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from '../layouts/Layout'


export default function AboutUs(){

	const [data, setData] = useState({
		list: [],
	})

	useEffect(() => {
		axios.get('api/about')
		.then(resp => setData(resp.data))
	}, [])


	return (
		<Layout>
			<div className="container mx-auto px-6 xl:px-0">
				<div className="grid gap-10 lg:grid-cols-12 pt-10 pb-14">
				
					<div className="order-2 pl-4 lg:col-span-6">
						<h2 
							className="text-brand-green text-3xl font-bold 
													leading-none pt-14 
													md:text-4xl md:leading-none
													lg:pt-20">
							{ data.page_title }
						</h2>

						<div className="text-brand-green pt-8 pb-20">
							{ data.content }
						</div>
					</div>


					<div className="max-w-xs pt-10 mx-auto 
													lg:order-2 lg:pt-0 lg:flex 
													lg:items-center lg:col-span-6
													lg:max-w-md">
						<img 
							src="/about.svg" 
							alt="Imagen representativa de sobre nosotros"
							className="lg:w-full" />
					</div>

				</div>
			</div>
		</Layout>
	)
}