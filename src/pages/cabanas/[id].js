import { supabase } from "utils/supabase";
import Layout from "../../layouts/Layout.jsx";
import Link from "next/link";
import Slider from "react-slick";

export default function Room({ room }) {
    const description = room.description.replace(/,|\./g, "");

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
            <div className="flex justify-center mx-auto max-w-7xl py-10 lg:px-10">
                <div className="flex flex-col  lg:pr-10 mb-10 lg:mb-0 text-brand-green m-auto">
                    <h2 className=" text-4xl font-bold mb-4">{room.name}</h2>
                    <div>
                        <ul className="flex -ml-16 max-w-fit my-4 pl-4 py-2 rounded-xl bg-gray-50 shadow-lg">
                            <li className="mr-2">
                                {room.capacity} huespedes -
                            </li>
                            <li className="mr-2">{room.rooms} dormitorio -</li>
                            <li className="mr-2">{room.beds} camas -</li>
                            <li className="mr-4">{room.bathroom} baño</li>
                        </ul>
                    </div>
                    <p className="whitespace-pre-wrap mb-6">{description}</p>
                    <div className="btn-yellow w-24 self-center">
                        <Link href="#">
                            Reservar
                        </Link>
                    </div>
                </div>
                <div className="w-1/3 m-auto">
                    <Slider {...settings}>
                        {/* {[...Array(4)].map((_, i) => ( */}
                        <div className="h-96 bg-slate-200 text-slate-200 rounded-xl">.</div>
                        <div className="h-96 bg-slate-400 text-slate-400 rounded-xl">.</div>
                        <div className="h-96 bg-slate-600 text-slate-600 rounded-xl">.</div>
                        <div className="h-96 bg-slate-800 text-slate-800 rounded-xl">.</div>
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
