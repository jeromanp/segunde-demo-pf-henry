import { useState } from 'react'
import dayjs from 'dayjs'
import Header from  '../components/Header'

import Datepicker from '../components/form/Datepicker'



export default function Home() {

	const [filters, setFilters] = useState({
		adults: 0,
		children: 0,
		checkin: null,
		checkout: null
	})


	const handleFilter = e => {
		e.preventDefault()

	}


  return (
		<div 
			id="landing"
			className="w-screen h-screen relative overflow-hidden">

			<Header background="transparent" />

			<div className="bg-black bg-opacity-20 h-screen px-6 grid grid-cols-1 place-content-center inset-0 absolute">
				<div className="max-w-sm mx-auto md:max-w-3xl">
					
					<h2 
						className="text-white text-3xl font-bold leading-none select-none 
											sm:text-4xl 
											md:text-5xl md:leading-tight">
						Disfrutá tus vacaciones en nuestro complejo de cabañas
					</h2>
					
					<div className="bg-white w-full mt-8 rounded-lg md:mt-14">
						
						<form 
							method="post" 
							onSubmit={ handleFilter }
							className="grid md:flex md:justify-stretched">
							
							<div className="flex flex-1 items-center gap-x-2">
								<span className="text-gray-400 text-sm leading-none font-medium w-20 pl-4 md:hidden">Personas</span>
								
								<div 
									className="text-gray-400 text-sm flex items-center 
														px-3 py-1.5 gap-x-1 cursor-pointer select-none">
									<i className="ri-user-fill text-lg"></i>
									<span className="">Huéspedes</span>
								</div>

							</div>



							<div className="border-t border-gray-200 flex-1 flex items-center gap-x-1">
								<span className="text-gray-400 text-xs leading-none font-medium w-20 pl-4 md:hidden">Desde</span>
								<Datepicker 
									minDate={ new Date() }
									setDate={ e => setFilters({
										...filters, 
										checkin: new Date(e),
										checkout: new Date(e)
									}) } />
							</div>


							<div className="border-t border-gray-200 flex-1 flex items-center gap-x-1">
								<span className="text-gray-400 text-xs leading-none font-medium w-20 pl-4 md:hidden">Hasta</span>
								<Datepicker
									minDate={ filters.checkin }
									defaultDate={ filters.checkout ?? filters.checkin }
									setDate={ e => setFilters({
										...filters, 
										checkout: new Date(e)
									}) }
								/>
							</div>


							<div className="px-4 py-2.5 flex-1 text-right">
								<button className="btn-yellow w-full !rounded md:w-auto">Buscar</button>
							</div>

						</form>

					</div>
				</div>
			</div>

		</div>
  )
}
