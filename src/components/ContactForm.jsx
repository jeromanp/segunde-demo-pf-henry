import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Los estilos hacen que aparezca bien, el container los trae y el toast lo ejecuta

export default function ContactForm() {
    const [inputs, setInputs] = useState()
    const input = useRef()

    // Envía el mail
    const sendEmail = async () => {
        try {
            return await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
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

    return (
        <>
            <ToastContainer />
            <form ref={input} onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="nombre" className="text-brand-green font-medium mt-4">Nombre</label>
                <input
                    id="nombre"
                    placeholder="Ingresa tu nombre"
                    className="border-2 p-3 border-brand-green rounded-lg"
                    name='user_name'
                    onChange={handleChange}
                />

                <label htmlFor="email" className="text-brand-green font-medium mt-4">Email</label>
                <input
                    id="email"
                    placeholder="Ingresa tu email"
                    className="border-2 p-3 border-brand-green rounded-lg"
                    name='user_email'
                    onChange={handleChange}
                />

                <label htmlFor="mensaje" className="text-brand-green font-medium mt-4">Mensaje</label>
                <textarea
                    id="mensaje"
                    className="resize-none border-2 p-3 border-brand-green rounded-lg h-24"
                    name='message'
                    onChange={handleChange}
                />

                <button className="btn-yellow md:w-1/5 w-14 mt-6">Enviar</button>
            </form>
        </>
    )
}