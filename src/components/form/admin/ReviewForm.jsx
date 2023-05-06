import Link from "next/link";
import { useState } from "react";

export default function ReviewForm({ review }) {
    const [inputs, setInputs] = useState({
        username: review?.username || '',
        email: review?.email || '',
        stars: review?.stars || 3,
        review: review?.review || '',
        approved: review?.approved || true,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review?.id) {
            // actualizar
        } else {
            // crear
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                    <label htmlFor="username" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nombre
                    </label>

                    <div className="relative">
                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="username"
                            id="username"
                            value={inputs.username}
                            onChange={handleChange} />
                    </div>
                </div>

                <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        E-mail
                    </label>

                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="email"
                        id="email"
                        value={inputs.email}
                        onChange={handleChange} />
                </div>
            </div>

            <div className="flex gap-x-6 items-center my-6">
                <label className="block text-sm font-medium text-black dark:text-white">
                    Estrellas
                </label>


                <div
                    x-data="{ checkboxToggle: '' }"
                    className="flex gap-x-5">
                    {[...Array(5)].map((_, i) => (
                        <div key={i + 1} className="relative flex items-center">
                            <input
                                type="radio"
                                name="stars"
                                id={i + 1}
                                value={i + 1}
                                className="checked:bg-slate-500 h-5 w-5 mr-1 border cursor-pointer appearance-none rounded-full"
                                onChange={handleChange}
                            />
                            <label htmlFor={i + 1} className="cursor-pointer select-none" >{i + 1}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-5.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="review">
                    Comentario
                </label>
                <div className="relative">

                    <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary resize-none"
                        name="review"
                        id="review"
                        rows="6"
                        placeholder="Escribe tu comentario aquí"
                        value={inputs.review}
                        onChange={handleChange}>
                    </textarea>
                </div>
            </div>

            <div className="flex gap-x-6 items-center my-6">
                <label className="block text-sm font-medium text-black dark:text-white">
                    Aprobado
                </label>


                <div
                    x-data="{ checkboxToggle: '' }"
                    className="flex gap-x-5">
                    {['SI', 'NO'].map((approved, i) => (
                        <div key={i} className="relative flex items-center">
                            <input
                                type="radio"
                                name="approved"
                                id={approved}
                                value={approved}
                                className="checked:bg-slate-500 h-5 w-5 mr-1 border cursor-pointer appearance-none rounded-full"
                                onChange={handleChange}
                            />
                            <label htmlFor={approved} className="cursor-pointer select-none" >{approved}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end gap-4.5 mt-6">
                <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit">
                    <Link href='/admin/reviews'>Cancelar</Link>
                </button>
                <button
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                    type="submit">
                    Guardar
                </button>
            </div>
        </form>
    )
}