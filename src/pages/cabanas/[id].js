import { supabase } from "utils/supabase";
import Layout from "../../layouts/Layout.jsx";
import Link from "next/link";
import Slider from "react-slick";

export default function Room({ room }) {
    const description = room.description.replace(/,|\./g, "");
    // console.log(room);
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    {/* <img src='' className={`w-5 h-5 bg-red-${i + 3}00`} /> */}
                    <div className="bg-slate-500 rounded-lg text-slate-500">-</div>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Layout>
            <h2 className="text-brand-green text-4xl font-bold text-center mt-10 m-6">{room.name}</h2>
            <div className="flex flex-col-reverse md:flex-row md:justify-center md:mx-auto md:max-w-7xl md:pb-10 lg:px-10">
                <div className="flex flex-col  lg:pr-10 mb-10 lg:mb-0 text-brand-green m-auto">
                    <div className="flex flex-wrap w-11/12 self-center md:w-auto max-w-fit my-4 pl-4 py-2 rounded-xl bg-gray-50 shadow-lg">
                        {room.capacity} huespedes - {room.rooms} dormitorio/s - {room.beds} cama/s - {room.bathrooms} baño/s
                    </div>
                    <p className="whitespace-pre-wrap mb-6 m-auto">{description}</p>
                    <div className="btn-yellow w-24 self-center">
                        <Link href="#">
                            Reservar
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 md:w-1/3 md:m-auto mb-5 m-auto">
                    <Slider {...settings}>
                        {/* {[...Array(4)].map((_, i) => ( */}
                        <div className="h-64 bg-slate-200 text-slate-200 rounded-xl">.</div>
                        <div className="h-64 bg-slate-400 text-slate-400 rounded-xl">.</div>
                        <div className="h-64 bg-slate-600 text-slate-600 rounded-xl">.</div>
                        <div className="h-64 bg-slate-800 text-slate-800 rounded-xl">.</div>
                        {/* ))} */}
                    </Slider>
                </div>
            </div>
            <style>{`
            .slick-thumb li {
                width: 24%;
                margin: 0 0.50%;
            }
            `}</style>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { id } = params;

    const { data: room, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("id", id);
    // .single();

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
