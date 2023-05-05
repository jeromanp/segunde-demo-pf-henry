export default function UserForm() {
    return (
        <form action="#">
            <div class="grid gap-y-6">

                <div class="">
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        E-mail
                    </label>

                    <input
                        class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="email"
                        id="email"
                        value="E-mail"
                    />
                </div>

                <div class="">
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nombre
                    </label>

                    <input
                        class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="UserName"
                        id="UserName"
                        value="User name"
                    />
                </div>

                <div class="grid gap-5 sm:grid-cols-2">

                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Nombre Completo
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="FullName"
                            id="FullName"
                            value="Full name"
                        />
                    </div>

                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Apellido
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="Lastname"
                            id="LastName"
                            value="Last name"
                        />
                    </div>
                </div>

                <div class="grid gap-5 sm:grid-cols-2">

                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Pais
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="Country"
                            id="Country"
                            value="Country"
                        />
                    </div>

                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Telefono
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="Phone"
                            id="Phone"
                            value="Phone"
                        />
                    </div>
                </div>

                <div class="flex justify-end gap-4.5">
                    <button
                        class="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                        type="submit">
                        Cancelar
                    </button>
                    <button
                        class="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                        type="submit">
                        Guardar
                    </button>
                </div>

            </div>
        </form>
    )
}