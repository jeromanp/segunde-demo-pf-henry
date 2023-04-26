import question from '../../public/question.svg'

export default function PaymentForm() {
    return (
        <form className="flex flex-col p-3">

            <h3 className="text-lg">Tus datos de pago</h3>

            <label>Titular de la tarjeta</label>
            <input
                placeholder="Ej. Rodolfo Rivera"
            />

            <label>Número de la tarjeta</label>
            <input
                placeholder="XXXX XXXX XXXX XXXX"
            />

            <div className="flex">
                <div className="flex flex-col pr-6">
                    <label>Fecha de vencimiento</label>
                    <input
                        placeholder="MM/YYYY"
                    />
                </div>

                <div className="flex flex-col pr-6">
                    <label>
                        CVV <img className='w-4 inline absolute' src={question.src} />
                    </label>
                    <input
                        placeholder="Ej. 123"
                    />
                </div>
            </div>

        </form>
    )
}