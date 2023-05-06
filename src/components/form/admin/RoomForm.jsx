import { useState } from "react";
import Link from "next/link";

export default function RoomForm() {
    const types = ['A', 'B', 'C'];
    const [inputs, setInputs] = useState({
        nombre: '',
        tipo: 'A',
        habitaciones: 1,
        capacidad: 1,
        dormitorios: 1,
        baños: 1,
        precio: 1000,
        servicios: {
            horno_microondas: true,
            heladera: true,
            cocina: true,
            vajilla: true,
        },
        descripcion: '',
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        if (Object.keys(inputs.servicios).includes(name)) {
            setInputs({
                ...inputs,
                servicios: {
                    ...inputs.servicios,
                    [name]: value,
                },
            });
        }
        setInputs({
            ...inputs,
            [name]: value,
        });
        console.log(inputs);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="grid gap-y-6">
                <div className="">
                    <label htmlFor="nombre" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nombre
                    </label>

                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={inputs.nombre}
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
                                name="tipo"
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
                        <label htmlFor="habitaciones" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Habitaciones
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="habitaciones"
                            id="habitaciones"
                            value={inputs.habitaciones}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="capacidad" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Capacidad (personas)
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="capacidad"
                            id="capacidad"
                            value={inputs.capacidad}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="">
                        <label htmlFor="dormitorios" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Dormitorios
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="dormitorios"
                            id="dormitorios"
                            value={inputs.dormitorios}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="baños" className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Baños
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="baños"
                            id="baños"
                            value={inputs.baños}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="">
                    <label htmlFor='precio' className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Precio
                    </label>

                    <div className="relative">
                        <span className="opacity-70 text-xl leading-none left-4 top-3.5 absolute">
                            $
                        </span>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-8 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="precio"
                            id="precio"
                            value={inputs.precio}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <input
                            type="checkbox"
                            name="horno_microondas"
                            id="horno_microondas"
                            value='horno_microondas'
                            onChange={changeHandler}
                            className="mr-4 flex h-5 w-5 items-center justify-center rounded border appearance-none checked:bg-slate-500"
                        />
                        <label htmlFor="horno_microondas">Horno / Microondas</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="cocina"
                            id="cocina"
                            value={true}
                            onChange={changeHandler}
                            className="mr-4 flex h-5 w-5 items-center justify-center rounded border appearance-none checked:bg-slate-500"
                        />
                        <label htmlFor="cocina">Cocina</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="heladera"
                            id="heladera"
                            value=''
                            onChange={changeHandler}
                            className="mr-4 flex h-5 w-5 items-center justify-center rounded border appearance-none checked:bg-slate-500"
                        />
                        <label htmlFor="heladera">Heladera</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="vajilla"
                            id="vajilla"
                            value=''
                            onChange={changeHandler}
                            className="mr-4 flex h-5 w-5 items-center justify-center rounded border appearance-none checked:bg-slate-500"
                        />
                        <label htmlFor="vajilla">Vajilla</label>
                    </div>
                </div>

                <div className="">
                    <label htmlFor="descripcion" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Descripción
                    </label>
                    <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black resize-none focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="descripcion"
                        id="descripcion"
                        rows="6"
                        value={inputs.descripcion}
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