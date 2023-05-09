import Link from "next/link";
import { useState } from "react"

export default function UserForm({ user }) {
    const [inputs, setInputs] = useState({
        email: user?.email || '',
        username: user?.username || '',
        full_name: user?.full_name || '',
        country: user?.country ||  '',
        phone: user?.phone || 0,
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (user?.id) {
            // actualizar
        } else {
            // crear
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="grid gap-y-6">

                <div className="">
                    <label htmlFor="email" className="mb-3 block text-sm font-medium text-black">
                        E-mail
                    </label>

                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                        type="email"
                        name="email"
                        id="email"
                        value={inputs.email}
                        onChange={changeHandler}
                    />
                </div>

                <div className="">
                    <label htmlFor="username" className="mb-3 block text-sm font-medium text-black">
                        Apodo
                    </label>

                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                        type="text"
                        name="username"
                        id="username"
                        value={inputs.username}
                        onChange={changeHandler}
                    />
                </div>

                <div className="">

                    <div className="">
                        <label htmlFor="full_name" className="mb-3 block text-sm font-medium text-black">
                            Nombre Completo
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                            type="text"
                            name="full_name"
                            id="full_name"
                            value={inputs.full_name}
                            onChange={changeHandler}
                        />
                    </div>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                    <div className="">
                        <label htmlFor="country" className="mb-3 block text-sm font-medium text-black">
                            Pais
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                            type="text"
                            name="country"
                            id="country"
                            value={inputs.country}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="phone" className="mb-3 block text-sm font-medium text-black">
                            Telefono
                        </label>

                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none"
                            type="number"
                            name="phone"
                            id="phone"
                            value={inputs.phone}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4.5">
                    <button
                        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark"
                        type="submit">
                        <Link href='/admin/users'>Cancelar</Link>
                    </button>
                    <button
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                        type="submit">
                        Guardar
                    </button>
                </div>

            </div>
        </form>
    )
}