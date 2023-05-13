import { useState, useEffect } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'


export default function Layout({children}){

	const [sidebarStatus, setSidebarStatus] = useState(true)

	const closeSidebar = () => setSidebarStatus(false)
	const openSidebar = () => setSidebarStatus(true)

	return (
		<div className="relative z-1 bg-whiten font-satoshi text-base font-normal text-body">
			{/* <Preload /> */}
			<div className="flex h-screen overflow-hidden">
				<Sidebar 
					sidebarStatus={sidebarStatus}
					actionCloseSidebar={closeSidebar} />
				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					<Header actionOpenSidebar={openSidebar} />
					<main>
						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
							<div>{children}</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}