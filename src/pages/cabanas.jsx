import { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from '../layouts/Layout'
import Link from 'next/link'


export default function Cabins(){

	const card_class = 'border border-gray-200 h-full max-w-xs mx-auto rounded-2xl shadow-md'
	const card_image_class = 'h-44 overflow-hidden rounded-2xl'
	const card_body_class = 'px-7 py-6 grid gap-y-5'

	return (
		<Layout>
			<div className="container mx-auto px-6 xl:px-0">
				
				<h2 
					className="text-brand-green text-3xl font-bold 
											leading-none text-center pt-14 pb-8 
											md:text-4xl md:leading-none">
					Nuestras cabañas
				</h2>

				<div 
					className="text-brand-green text-center 
												leading-tight max-w-4xl mx-auto">
					El Complejo está compuesto por 10 cabañas de diferentes capacidades y dos piletas al aire libre, elegí la que mejor se adapte a vos y vení a disfrutar!
				</div>



				<div className="grid gap-10 pt-14 pb-20 
												md:grid-cols-3 md:gap-4
												lg:gap-12 lg:pt-20 max-w-5xl mx-auto">

					<div>
						<div className={ card_class }>
							<div className={ card_image_class }>
								<img 
									src="cabin-1.webp" 
									alt="Imagen de cabaña IV"
									className="w-full h-full object-cover pointer-events-none" />
							</div>
							
							<div className={ card_body_class }>
								<h3 className="text-brand-green text-2xl font-bold leading-none text-center select-none">Cabaña XI</h3>
							
								<div className="text-gray-500 text-xs leading-tight font-medium flex justify-center items-center">
									<div className="flex items-center gap-2">
										<i className="ri-group-fill"></i>
										3/4
									</div>

									<div className="border-l border-gray-400 h-4 mx-2.5"></div>

									<div className="flex items-center gap-2">
										<i className="ri-home-2-fill"></i>
										2 Habitaciones
									</div>
								</div>

								<div className="flex justify-center">
									<Link href="#">
										<span className="btn-yellow">Ver más</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					
					
					
					<div>
						<div className={ `${card_class} lg:scale-110 lg:origin-bottom` }>
							<div className={ card_image_class }>
								<img 
									src="cabin-2.webp" 
									alt="Imagen de cabaña XX"
									className="w-full h-full object-cover pointer-events-none" />
							</div>
							
							<div className={ card_body_class }>
								<h3 className="text-brand-green text-2xl font-bold leading-none text-center select-none">Cabaña XI</h3>
							
								<div className="text-gray-500 text-xs leading-tight font-medium flex justify-center items-center">
									<div className="flex items-center gap-2">
										<i className="ri-group-fill"></i>
										2
									</div>

									<div className="border-l border-gray-400 h-4 mx-2.5"></div>

									<div className="flex items-center gap-2">
										<i className="ri-home-2-fill"></i>
										Monoambiente
									</div>
								</div>

								<div className="flex justify-center">
									<Link href="#">
										<span className="btn-yellow">Ver más</span>
									</Link>
								</div>
							</div>
						</div>
					</div>



					<div>
						<div className={ card_class }>
							<div className={ card_image_class }>
								<img 
									src="cabin-3.webp" 
									alt="Imagen de cabaña VI"
									className="w-full h-full object-cover pointer-events-none" />
							</div>
							
							<div className={ card_body_class }>
								<h3 className="text-brand-green text-2xl font-bold leading-none text-center select-none">Cabaña XI</h3>
							
								<div className="text-gray-500 text-xs leading-tight font-medium flex justify-center items-center">
									<div className="flex items-center gap-2">
										<i className="ri-group-fill"></i>
										5/6
									</div>

									<div className="border-l border-gray-400 h-4 mx-2.5"></div>

									<div className="flex items-center gap-2">
										<i className="ri-home-2-fill"></i>
										2 Habitaciones
									</div>
								</div>

								<div className="flex justify-center">
									<Link href="#">
										<span className="btn-yellow">Ver más</span>
									</Link>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>
		</Layout>
	)
}