import Header from 'components/Header';
import question from '../../public/question.svg';
import arrowL from '../../public/arrowL.svg';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function PaymentForm() {

    const textClass = 'text-brand-green font-bold';

    // Propiedades del SA para CVV y para detalles de pago
    // Para hacer detalles dinamicos recomiendo sanitizar HTML
    const cvvSwal = {
        title: 'Código Valor de Verificación',
        text: 'Esas 3 cifras de seguridad detras de tu tarjeta',
        imageHeight: 100,
        imageUrl: 'https://blog.mypos.eu/wp-content/uploads/2021/08/cvv-explicado.jpg',
        imageAlt: 'Codigo de 3 cifras en el reverso de tu tarjeta'
    };
    const detailSwal = {
        title: 'Detalles del pago',
        html: 'Reserva: $5.000 USD<br>Limpieza: $2.500 USD<br>Propina: $2.000 USD<br>Desayuno: $500 USD'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />

            <div className='flex m-3'>
                <Link href='/'>
                    <img className='hover:scale-110 my-5 h-6 transition-all' src={arrowL.src} />
                </Link>
                <form onSubmit={handleSubmit} className="flex flex-col p-3 min-w-[400px] max-w-[600px] w-2/5">

                    <h2 className={`text-xl my-2 ${textClass}`}>Pagar</h2>
                    <h3 className={`text-lg mt-4 ${textClass}`}>Tus datos de pago</h3>

                    <label htmlFor='titular' className={`${textClass} mt-4`}>Titular de la tarjeta</label>
                    <input
                        placeholder="Ej. Rodolfo Rivera"
                        className='bg-gray-100 rounded shadow-md shadow-slate-400 my-2 p-2'
                        id='titular'
                    />

                    <label htmlFor='numero' className={`${textClass} mt-4`}>Número de la tarjeta</label>
                    <input
                        placeholder="XXXX XXXX XXXX XXXX"
                        className='bg-gray-100 rounded shadow-md shadow-slate-400 my-2 p-2'
                        id='numero'
                    />

                    <div className="flex">
                        <div className="flex flex-col pr-20 ">
                            <label htmlFor='vencimiento' className={`${textClass} mt-4`}>Fecha de vencimiento</label>
                            <input
                                placeholder="MM/YYYY"
                                className='bg-gray-100 rounded shadow-md shadow-slate-400 my-2 p-2 w-40'
                                id='vencimiento'
                            />
                        </div>

                        <div className="flex flex-col pr-6">
                            <label htmlFor='cvv' className={`${textClass} mt-4`}>
                                CVV <img onClick={() => Swal.fire(cvvSwal)} className='cursor-pointer w-4 inline absolute ml-2' src={question.src} />
                            </label>
                            <input
                                placeholder="Ej. 123"
                                className='bg-gray-100 rounded shadow-md shadow-slate-400 my-2 p-2 w-24'
                                id='cvv'
                            />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <p className={`${textClass}`}>Monto total</p>
                        <p
                            onClick={() => Swal.fire(detailSwal)}
                            className='text-brand-light-green cursor-pointer font-semibold'>
                            Ver detalles
                        </p>

                    </div>
                    <h3 className='text-brand-yellow font-bold text-xl'>$10.000 USD</h3>

                    <div>
                        <input className='my-6' id='guardar' type='checkbox' />
                        <label htmlFor='guardar' > Guardar datos para futuras compras</label>
                    </div>

                    <button type='submit' className='hover:bg-brand-green transition-colors p-3 w-auto text-white bg-brand-olive rounded-lg' >Pagar ahora</button>
                </form>
            </div>

        </>
    )
};