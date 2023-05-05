export default function RoomForm() {
    return (
        
        <form action="#">
            <div class="grid gap-y-6">
                <div class="">
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Nombre
                    </label>

                    <input
                        class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="Username"
                        id="Username"
                        value="Cabaña A1" />
                </div>

                <div class="flex gap-x-6 items-center">
                    <label class="block text-sm font-medium text-black dark:text-white">
                        Tipo
                    </label>

                    <div
                        x-data="{ checkboxToggle: '' }"
                        class="flex gap-x-5">
                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                                    <span class="h-2.5 w-2.5 rounded-full bg-transparent"></span>
                                </div>
                            </div>
                            A
                        </label>

                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                                    <span class="h-2.5 w-2.5 rounded-full bg-transparent"></span>
                                </div>
                            </div>
                            B
                        </label>

                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                                    <span class="h-2.5 w-2.5 rounded-full bg-transparent"></span>
                                </div>
                            </div>
                            C
                        </label>
                    </div>
                </div>

                <div class="grid gap-5 sm:grid-cols-2">
                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Habitaciones
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="Username"
                            id="Username"
                            value="4"
                        />
                    </div>

                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Capacidad (personas)
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="Username"
                            id="Username"
                            value="6"
                        />
                    </div>
                </div>

                <div class="grid gap-5 sm:grid-cols-2">
                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Dormitorios
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="Username"
                            id="Username"
                            value="3"
                        />
                    </div>

                    <div class="">
                        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                            Baños
                        </label>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="number"
                            name="Username"
                            id="Username"
                            value="1"
                        />
                    </div>
                </div>

                <div class="">
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Precio
                    </label>

                    <div class="relative">
                        <span class="opacity-70 text-xl leading-none left-4 top-3.5 absolute">
                            $
                        </span>

                        <input
                            class="w-full rounded border border-stroke bg-gray py-3 pl-8 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="Username"
                            id="Username"
                            value="12.600"
                        />
                    </div>
                </div>

                <div class="">
                    <div
                        x-data="{ services: {
														horno_microondas: false,
														cocina_4_hornallas_con_horno: false,
														heladera: true,
														vajilla_completa: false,
														utensilios_cocina: true,
														secador_cabello: false,
														calefaccion: true,
														aire_acondicionado: false,
														television_por_cable: true,
														wifi: true,
														jacuzzi: false,
														parrilla_individual_cubierta: true,
														cochera_cubierta: false
													} }"
                        class="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                    <span class="opacity-0">
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            Horno / Microondas
                        </label>

                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                    <span class="opacity-0">
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            Cocina 4 hornallas con horno
                        </label>

                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                    <span class="opacity-0">
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            Heladera
                        </label>

                        <label class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <div class="mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                    <span class="opacity-0">
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                fill="#3056D3" stroke="#3056D3" stroke-width="0.4">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            Vajilla completa
                        </label>
                    </div>
                </div>

                <div class="">
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Descripción
                    </label>
                    <textarea
                        class="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black resize-none focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="bio"
                        id="bio"
                        rows="6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet.
                    </textarea>
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