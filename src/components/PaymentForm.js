import Header from 'components/Header';
import question from '../../public/question.svg';
import arrowL from '../../public/arrowL.svg';
import arrowThinR from '../../public/arrowThinR.svg';
import Link from 'next/link';

export default function PaymentForm() {

    const textClass = 'text-brand-green font-bold'

    return (
        <>
            <Header />

            <div>
                <Link href='/'>
                    <img className='hover:scale-110 transition-all' src={arrowL.src} />
                </Link>
                <form className="flex flex-col p-3 min-w-[400px] max-w-[600px] w-2/5">

                    <h2 className={`text-xl ${textClass}`}>Pagar</h2>
                    <h3 className={`text-lg ${textClass}`}>Tus datos de pago</h3>

                    <label htmlFor='titular' className={`${textClass}`}>Titular de la tarjeta</label>
                    <input
                        placeholder="Ej. Rodolfo Rivera"
                        className='bg-gray-100 rounded shadow-md shadow-slate-400 p-2'
                        id='titular'
                    />

                    <label htmlFor='numero' className={`${textClass}`}>Número de la tarjeta</label>
                    <input
                        placeholder="XXXX XXXX XXXX XXXX"
                        className='bg-gray-100 rounded shadow-md shadow-slate-400 p-2'
                        id='numero'
                    />

                    <div className="flex">
                        <div className="flex flex-col pr-6 ">
                            <label htmlFor='vencimiento' className={`${textClass}`}>Fecha de vencimiento</label>
                            <input
                                placeholder="MM/YYYY"
                                className='bg-gray-100 rounded shadow-md shadow-slate-400 p-2 w-40'
                                id='vencimiento'
                            />
                        </div>

                        <div className="flex flex-col pr-6">
                            <label htmlFor='cvv' className={`${textClass}`}>
                                CVV <img className='w-4 inline absolute ml-2' src={question.src} />
                            </label>
                            <input
                                placeholder="Ej. 123"
                                className='bg-gray-100 rounded shadow-md shadow-slate-400 p-2 w-24'
                                id='cvv'
                            />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <p className={`${textClass}`}>Monto total</p>
                        <p className='text-brand-light-green font-semibold'>
                            Ver detalles
                            <img className='inline w-4 ml-2' src={arrowThinR.src} />
                        </p>

                    </div>
                    <h3 className='text-brand-yellow font-bold text-xl'>$10.000 USD</h3>

                    <div>
                        <input id='guardar' type='checkbox' />
                        <label htmlFor='guardar' > Guardar datos para futuras compras</label>
                    </div>

                    <button type='submit' className='p-3 w-auto text-white bg-brand-olive rounded-lg' >Pagar ahora</button>
                </form>
            </div>

        </>
    )
};