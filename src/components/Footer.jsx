import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Footer(){

	const [data, setData] = useState({
		address: []
	})

	useEffect(() => {
		axios.get('api/global')
		.then(resp => setData(resp.data))
	}, [])

	return (
		<header 
			id="footerMain">
			<div className="border-t border-brand-green container px-6 mx-auto xl:px-0">
				<div className="py-6 pb-8 grid gap-y-10 lg:grid-cols-3">

					<div className="">
						<h5>Donde estamos</h5>
						{ data?.address.map((e, i) => (<div key={i}>{e}</div>)) }
					</div>

					<div className="">
						<h5>Contacto</h5>
						<div className="">
							{/* <Link href="mailto:{ data.email }">{ data.email }</Link> */}
						</div>
					</div>

					<div className="">
						<h5>Seguinos!</h5>
					</div>

				</div>
			</div>
		</header>
	)
}