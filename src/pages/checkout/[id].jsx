import { useSession } from "@supabase/auth-helpers-react";
import CheckOutForm from "components/CheckOutForm";
import LayoutMain from "layouts/Layout";
import Login from "pages/login";
import { supabase } from "utils/supabase";
import { useState, useEffect } from "react";
import axios from "axios";
import SummaryCheckOut from "components/SummaryCheckOut";
import { addDays, diffDays } from "helpers/dateProcessing";

export default function CheckOut({ room, url }) {
    const session = useSession();

    const [matchingProduct, setMatchingProduct] = useState(null);
    //QUEDA DEFINIR SI USAREMOS COSAS COMO EXTRAS O DESCUENTOS
    const mock = {
        extra: 20,
    };

    const [filters, setFilters] = useState({
        checkin: null,
        checkout: null,
        adults: 2,
        children: 0,
    });

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get("/api/products");
            const matching = response.data.find(
                (product) => product.name === room.name
            );
            setMatchingProduct(matching);
        }
        fetchProducts();
    }, []);

    return (
        <>
            {session ? (
                <LayoutMain>
                    <div className="flex pt-6 pl-2">
                        <button
                            className="flex items-center text-brand-green font-bold pr-4 pl-6"
                            onClick={() => window.history.back()}
                        >
                            <img src="/back.svg" alt="" className="w-7" />
                        </button>
                        <h1 className="font-bold text-brand-green text-4xl">
                            Confirma tu reserva
                        </h1>
                    </div>
                    <div className="flex flex-col pt-4 pb-18 pl-4 pr-4 md:pl-20 md:pr-20 items-center md:flex-row md:justify-between">
                        {matchingProduct &&
                            matchingProduct.name === room.name && (
                                <CheckOutForm
                                    filters={filters}
                                    setFilters={setFilters}
                                    room={room}
                                    name={matchingProduct.name}
                                    price={matchingProduct.price}
                                    default_price={
                                        matchingProduct.default_price
                                    }
                                    night={diffDays(
                                        new Date(filters.checkin),
                                        new Date(filters.checkout)
                                    )}
                                    extra={mock.extra}
                                />
                            )}

                        <SummaryCheckOut
                            url={url}
                            name={room.name}
                            price={room.price}
                            night={diffDays(
                                new Date(filters.checkin),
                                new Date(filters.checkout)
                            )}
                            extra={mock.extra}
                        />

                        {/* <img
          src="/ilustrationCheck.svg"
          alt=""
          className="w-4/12 mr-16 ml-auto self-center"
      /> */}
                    </div>
                </LayoutMain>
            ) : (
                <Login />
            )}
        </>
    );
}

export async function getServerSideProps({ params }) {
    const { id } = params;

    const { data: room, error } = await supabase
        .from("rooms")
        .select(`*,booking(checkin,checkout,payments)`)
        .eq("id", id);

    if (error) {
        return {
            notFound: true,
        };
    }

    const { data: image, err } = await supabase
        .from("images")
        .select(`*`)
        .eq("id", room[0].images_id);

    return {
        props: {
            room: room[0],
            url: image && !err ? image[0].url[0].fileUrl : null,
        },
    };
}
