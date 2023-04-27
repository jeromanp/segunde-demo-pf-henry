export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="nombre" className="text-brand-green font-medium mt-4">Nombre</label>
                <input id="nombre" placeholder="Ingresa tu nombre" className="border-2 p-3 border-brand-green rounded-lg" />
                <label htmlFor="email" className="text-brand-green font-medium mt-4">Email</label>
                <input id="email" placeholder="Ingresa tu email" className="border-2 p-3 border-brand-green rounded-lg" />
                <label htmlFor="mensaje" className="text-brand-green font-medium mt-4">Mensaje</label>
                <textarea 
                id="mensaje" 
                className="resize-none border-2 p-3 border-brand-green rounded-lg h-24"
                />
                <button className="btn-yellow w-1/5 mt-6">Enviar</button>
            </form>
        </>
    )
}