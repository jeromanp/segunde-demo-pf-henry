import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ThankYou() {
    const router = useRouter();
    const { session_id, booking_id } = router.query;
    //console.log(session_id);
    const [checkoutSession, setCheckoutSession] = useState({ null: true });
    const [roomData, setRoomData] = useState({ null: true });
    useEffect(() => {
        const getCheckOutSession = async () => {
            if (session_id === undefined) {
                return;
            }
            //console.log(session_id);
            const response = await fetch(
                `/api/checkout_sessions?session_id=${session_id}`
            );
            const data = await response.json();
            setCheckoutSession(data);
        };
        getCheckOutSession();
    }, [session_id]);
    useEffect(() => {
        const verifiedRoomPaid = async () => {
            if (
                session_id === undefined ||
                booking_id === undefined ||
                checkoutSession.null === true
            ) {
                return;
            }
            if (
                checkoutSession.status === "complete" &&
                checkoutSession.payment_status === "paid"
            ) {
                //El pago se realizo correctamente
                //Se debe realizar el cambio en la base de datos de q el booking payment=true
                const response = await fetch(
                    `/api/booking/${booking_id}?session_id=${session_id}`,
                    {
                        method: "PUT",
                    }
                );
                const data = await response.json();
                console.log(data);
            }
        };
        verifiedRoomPaid();
    }, [checkoutSession]);

    return (
        <div>
            <h1>Thanks</h1>
            {checkoutSession.null === true ? (
                ""
            ) : (
                <div>
                    <h4>{checkoutSession.status}</h4>
                    <h5>{checkoutSession.payment_status}</h5>
                </div>
            )}
        </div>
    );
}
