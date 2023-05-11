import Layout from "../../layouts/Layout.jsx";
import Link from "next/link";
import Slider from "react-slick";
import Datepicker from "components/form/Datepicker.jsx";
import { supabase } from "utils/supabase";
import { useSession } from "@supabase/auth-helpers-react";
import { getAllDisabledDates } from "helpers/dateProcessing.js";

export default function Room({ room }) {
    const description = room.description.replace(/,|\./g, "");
    const session = useSession();

    const settings = {
        customPaging: function (i) {
            if (room.images) {
                return (
                    <a>
                        <img src={room.images.url[i].fileUrl} className={`rounded-xl`} />
                    </a>
                )
            } else {
                return (
                    <></>
                )
            }
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Layout>
            <h2 className="text-brand-green text-4xl font-bold text-center mt-10 m-6">
                {room.name}
            </h2>
            <div className="flex flex-col-reverse md:flex-row md:justify-center md:mx-auto md:max-w-7xl md:pb-10 lg:px-10">
                <div className="flex flex-col  lg:pr-10 mb-10 lg:mb-0 text-brand-green m-auto">
                    <div className="flex flex-wrap w-11/12 self-center md:w-auto max-w-fit my-4 pl-4 py-2 rounded-xl bg-gray-50 shadow-lg">
                        {room.capacity} huespedes - {room.rooms} dormitorio/s -{" "}
                        {room.beds} cama/s - {room.bathrooms} baño/s
                    </div>
                    <p className="whitespace-pre-wrap mb-6 m-auto">
                        {description}
                    </p>
                    <div>
                        Disponibilidad:{" "}
                        <Datepicker
                            disabledDates={getAllDisabledDates(room.booking)}
                        />
                    </div>

                    <p className="flex flex-wrap w-11/12 self-center md:w-auto max-w-fit my-4 pl-4 py-2 rounded-xl bg-gray-50 shadow-lg">
                        Precio: {room.price} ARS / día
                    </p>
                    <div className="self-center">
                        <Link
                            className="btn-yellow"
                            href={`/checkout/${room.id}`}
                        >
                            {session ? "Reservar" : "Iniciar sesión"}
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 md:w-1/3 md:m-auto mb-5 m-auto">
                    {room.images?
                    <Slider {...settings}>
                        {room.images.url.map((image, i) => (
                       <img src={image.fileUrl} alt={room.images.alt}
                       className="rounded-xl" />
                        ))}
                    </Slider>
                    :<div>No hay imagenes</div>}
                </div>
            </div>
            <style>
                {/* .slick thumb es el ul del slider, y los li tienen cada <a><img /></a> pero no son accesibles con tailwind */}
                {`
            .slick-thumb li {
                
            }
            `}</style>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { id } = params;

    const { data: room, error } = await supabase
        .from("rooms")
        .select(`*,booking(checkin,checkout), images(url, alt)`)
        .eq("id", id);

    if (error) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            room: room[0],
        },
    };
}
