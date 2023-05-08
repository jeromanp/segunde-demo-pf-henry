import { useState } from "react"

export default function BookingForm({ booking }) {
    const [inputs, setInputs] = useState({
        checkin: booking?.checkin || '',
        checkout: booking?.checkout || '',
        email: booking?.profiles?.email || '',
        full_name: booking?.profiles?.full_name || '',
        name: booking?.rooms?.name || '',
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
        console.log(inputs);
        console.log(booking);
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full">
                    <label htmlFor="name" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Cabaña
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
            </div>

            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                    <label htmlFor="checkin" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Check-In
                    </label>
                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="date"
                        name="checkin"
                        id="checkin"
                        onChange={changeHandler}
                    />
                </div>

                <div className="w-full sm:w-1/2">
                    <label htmlFor="checkout" className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Check-Out
                    </label>
                    <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="date"
                        name="checkout"
                        id="checkout"
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="mb-5.5">
                <label htmlFor="email" className="mb-3 block text-sm font-medium text-black dark:text-white">
                    E-mail
                </label>

                <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="email"
                    name="email"
                    id="email"
                    value={inputs.email}
                    onChange={changeHandler}
                />
            </div>

            <div className="mb-5.5">
                <label htmlFor="full_name" className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Nombre
                </label>

                <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="full_name"
                    id="full_name"
                    value={inputs.full_name}
                    onChange={changeHandler}
                />
            </div>

            <div className="flex justify-end gap-4.5">
                <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit">
                    Cancelar
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