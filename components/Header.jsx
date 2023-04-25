import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Header(){

	const [navActive, setNavActive] = useState(false)
	const [navbarClassName, setNavbarClassName] = useState('')
	
	useEffect(() => {
		let cls = 'bg-brand-olive p-10 inset-0 md:relative md:block md:p-0'
		if( navActive )
			setNavbarClassName(`${cls} fixed`)
		else
			setNavbarClassName(`${cls} hidden`)
	}, [navActive])

	return (
		<>
			<header 
				id="headerMain"
				className="bg-brand-olive py-3 inset-x-0 fixed z-10 md:py-5">
				<div className="container mx-auto px-6 xl:px-0">
					<div className="flex justify-between items-center">

						<h1>
							<Image 
								src="brand.svg" 
								alt="Hueney Ruca"
								width="300"
								height="100"
								className="w-32 md:w-48" />
							<span className="sr-only">Hueney Ruca</span>
						</h1>

						<button 
							className="text-white text-2xl leading-none select-none md:hidden"
							onClick={() => setNavActive(true)}>
							<i class="ri-menu-3-line"></i>
						</button>

						<nav 
							className={navbarClassName}>
							
							<div className="pb-3 flex justify-end md:hidden">
								<button 
									className="text-white text-3xl leading-none select-none"
									onClick={() => setNavActive(false)}>
									<i class="ri-close-line"></i>
								</button>
							</div>

							<ul className="text-white text-lg font-medium 
															grid gap-y-6 md:flex md:gap-x-7">
								<li className="select-none">
									<Link href="">Cabañas</Link>
								</li>

								<li className="select-none">
									<Link href="">Servicios</Link>
								</li>

								<li className="select-none">
									<Link href="">Nosotros</Link>
								</li>

								<li className="select-none">
									<Link href="">Contacto</Link>
								</li>

								<li className="select-none">
									<Link href="">Ayuda</Link>
								</li>
							</ul>
						</nav>
						
					</div>
				</div>
			</header>
			
			<div 
				role="header-spacer" 
				className="h-[57px] md:h-[90px]"></div>
		</>
	)
}