import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Los estilos hacen que aparezca bien, el container los trae y el toast lo ejecuta

export default function ContactForm() {
	const [inputs, setInputs] = useState()
	const input = useRef()

    // Envía el mail
    const sendEmail = async () => {
        try {
            return await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_CONTACT,
                input.current,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
            )
        } catch (error) {
            toast.error('Ocurrió un error, intenta más tarde!', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

	}

	// Ejecuta el envío de mail, activa el toast y reinicia el form
	const handleSubmit = async (e) => {
			e.preventDefault();
			const response = await sendEmail();
			if (response && response.status === 200) {
					toast.success('Mail enviado, gracias por el feedback!', {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
					});
			}
			e.target.reset();
	}

	// Controla formulario en cada cambio
	const handleChange = (e) => {
			const { name, value } = e.target;
			setInputs({
					...inputs, [name]: value
			})
	}


	useEffect(() => {
		gsap.set('.bigdot', {scale: 0})
	}, [])

	const inputFocus = e => {
		gsap.to(`[name=${e.target.name}] + .bigdot`, { scale: 1, duration: .2 })
	}
	const inputBlur = e => gsap.to(`[name=${e.target.name}] + .bigdot`, { scale: 0, duration: .2 })
	

    return (
        <>
            <ToastContainer />
            <form ref={input} onSubmit={handleSubmit} className="flex flex-col">
							<div className="space-y-5">
								<div className="space-y-2">
									<label className="text-brand-green text-xs font-semibold pl-1 block">Nombre</label>
									
									<div className="relative overflow-hidden rounded-lg">
										<input
											id="nombre"
											placeholder="Ingresa tu nombre"
											className="bg-transparent text-brand-green border-2 p-3 
											relative z-10 border-brand-green w-full rounded-lg 
											focus:outline-none focus:text-white font-medium
											focus:placeholder:text-white focus:placeholder:text-opacity-70"
											name='user_name'
											onChange={handleChange}
											onFocus={inputFocus}
											onBlur={inputBlur} />
										<span className="bigdot bg-brand-green w-[800px] h-[800px] left-[-200px] top-[-400px] absolute rounded-full pointer-events-none"></span>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-brand-green text-xs font-semibold pl-1 block">Email</label>
									<div className="relative overflow-hidden rounded-lg">
										<input
											id="email"
											placeholder="Ingresa tu email"
											className="bg-transparent text-brand-green border-2 p-3 
											relative z-10 border-brand-green w-full rounded-lg 
											focus:outline-none focus:text-white font-medium
											focus:placeholder:text-white focus:placeholder:text-opacity-70"
											name='user_email'
											onChange={handleChange} 
											onFocus={inputFocus}
											onBlur={inputBlur} />
										<span className="bigdot bg-brand-green w-[800px] h-[800px] left-[-200px] top-[-400px] absolute rounded-full pointer-events-none"></span>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-brand-green text-xs font-semibold pl-1 block">Mensaje</label>
									<div className="relative overflow-hidden rounded-lg">
										<textarea
											id="mensaje"
											className="bg-transparent text-brand-green resize-none 
											font-medium border-2 p-3 relative z-10 border-brand-green 
											w-full rounded-lg h-40 focus:outline-none focus:text-white"
											name='message'
											onChange={handleChange} 
											onFocus={inputFocus}
											onBlur={inputBlur} />
										<span className="bigdot bg-brand-green w-[800px] h-[800px] left-[-200px] top-[-400px] absolute rounded-full pointer-events-none"></span>
										</div>
									</div>
								</div>

								<div className="mt-6 flex justify-end">
									<button className="btn-yellow md:w-1/5 w-14">
										<span className="py-1">Enviar</span>
									</button>
								</div>
            </form>
        </>
    )
}