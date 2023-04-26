import styles from '../styles/Home.module.css'
import Header from  '../components/Header'

export default function Home() {

	const handleFilter = () => {
		console.log('handleFilter')
	}
  return (
		<div 
			id="landing"
			className="w-screen h-screen relative overflow-hidden">

			<Header background="transparent" />

			<div className="bg-black bg-opacity-20 h-screen px-6 grid grid-cols-1 place-content-center inset-0 absolute">
				<div className="max-w-3xl mx-auto">
					
					<h2 
						className="text-white text-3xl font-bold leading-none select-none 
											sm:text-4xl sm:leading-tight
											md:text-5xl md:leading-tight">
						Disfrutá tus vacaciones en nuestro complejo de cabañas
					</h2>
					
					<div className="bg-white w-full mt-8 rounded-lg md:mt-14">
						
						<form 
							method="post" 
							onSubmit={ handleFilter }>
							<br />
							<br />
						</form>

					</div>
				</div>
			</div>

		</div>
  )
}
