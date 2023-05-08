import { useState } from "react";
import Link from "next/link";

export default function RoomForm({ room }) {
    const types = ['A', 'B', 'C'];
    const [inputs, setInputs] = useState({
        name: room?.name || '',
        type: room?.type || 'A',
        rooms: room?.rooms || 1,
        capacity: room?.capacity || 1,
        beds: room?.beds || 1,
        bathrooms: room?.bathrooms || 1,
        price: room?.price || 1000,
        description: room?.description || '',
    })
    const [userServices, setUserServices] = useState({
        Horno_o_Microondas: false,
        Cocina: false,
        Heladera: false,
        Vajilla: false,
        Secador_de_pelo: false,
        Utensilios_de_cocina: false,
        Calefaccion: false,
        Aire_acondicionado: false,
        Television: false,
        Wi_Fi: false,
        Jacuzzi: false,
        Parrilla: false,
        Cochera: false,
    })
    const services = Object.keys(userServices).map(service => service.replaceAll('_', ' '));

    const changeHandler = (e) => {
        const { name, value } = e.target;
        if (services.includes(name)) {
            const serviceName = name.replaceAll(' ', '_')
            setUserServices({
                ...userServices,
                [serviceName]: !userServices[serviceName],
            });
        } else {
            setInputs({
                ...inputs,
                [name]: value,
            });
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (room?.id) {
            // actualizar
        } else {
            // crear
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="grid gap-y-6">
                <div className="">
                    <label htmlFor="name" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nombre
                    </label>

                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="name"
                        id="name"
                        value={inputs.name}
                        onChange={changeHandler}
                    />
                </div>

                <div className="flex gap-x-6 items-center">
                    <label className="block text-sm font-medium text-black dark:text-white">
                        Tipo
                    </label>

                    {types.map((type, i) => (
                        <div key={i} className="relative flex items-center">
                            <input
                                type="radio"
                                name="type"
                                id={type}
                                value={type}
                                className="checked:bg-slate-500 h-5 w-5 mr-1 border cursor-pointer appearance-none rounded-full"
                                onChange={changeHandler}
                            />
                            <label htmlFor={type} className="cursor-pointer select-none" >{type}</label>
                        </div>
                    ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="">
                        <label htmlFor="rooms" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Habitaciones
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="rooms"
                            id="rooms"
                            value={inputs.rooms}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="capacity" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Capacidad (personas)
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="capacity"
                            id="capacity"
                            value={inputs.capacity}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="">
                        <label htmlFor="beds" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Camas
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="beds"
                            id="beds"
                            value={inputs.beds}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="bathrooms" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Baños
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="bathrooms"
                            id="bathrooms"
                            value={inputs.bathrooms}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="">
                    <label htmlFor='price' className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Precio
                    </label>

                    <div className="relative">
                        <span className="opacity-70 text-xl leading-none left-4 top-3.5 absolute">
                            $
                        </span>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-8 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="price"
                            id="price"
                            value={inputs.price}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    {services.map(service => (
                        <div className="flex">
                            <input
                                type="checkbox"
                                name={service}
                                id={service}
                                value={true}
                                onChange={changeHandler}
                                className="mr-4 flex h-5 w-5 items-center justify-center rounded border appearance-none checked:bg-slate-500"
                            />
                            <label htmlFor={service}>{service}</label>
                        </div>
                    ))}
                </div>

                <div className="">
                    <label htmlFor="description" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Descripción
                    </label>
                    <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black resize-none focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="description"
                        id="description"
                        rows="6"
                        value={inputs.description}
                        onChange={changeHandler}
                    >
                    </textarea>
                </div>

                <div className="flex justify-end gap-4.5">
                    <button
                        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                        type="submit">
                        <Link href='/admin/rooms'>Cancelar</Link>
                    </button>
                    <button
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                        type="submit"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </form>
    )
}