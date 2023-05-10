import axios from "axios";
import Layout from "layouts/Layout";
import { useEffect, useState } from "react";

export default function ReservaDetail({ id }) {
    const [booking, setBooking] = useState({})

    useEffect(() => {
        axios(`/api/booking/${id}`)
            .then(response => {
                setBooking(response.data);
            })
            .catch(error => console.log(error));
    })

    return (
        <Layout>
            a
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const { id } = params;

    return {
        props: {
            id,
        },
    };
}