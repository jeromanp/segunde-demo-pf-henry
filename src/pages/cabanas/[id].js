import { supabase } from "utils/supabase";
import Layout from "../../layouts/Layout.jsx";
import Link from "next/link";

export default function Room({ room }) {
    const description = room.description.replace(/,|\./g, "");
    // console.log(room);
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-7xl py-10 lg:px-10">
                <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-brand-green">
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
                    <div className="flex justify-center">
                        <Link href="#">
                            <span className="btn-yellow">Reservar</span>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col">
                    <div className="max-w-full w-[600px] h-[450px] bg-slate-400 rounded-2xl"></div>
                    <div className="flex mt-4 max-w-full gap-4">
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"></div>
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"></div>
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"></div>
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"></div>
                    </div>
                </div>
            </div>
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
        // console.log(`Error al obtener el room con uuid ${id}`);
        // console.log(error);
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
