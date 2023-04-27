import { supabase } from "utils/supabase";
import { filterRoomsByCapacity } from "helpers/filters";

//const cabanasControllers = {};

//Retorna todas las cabanas.
//En caso de que exista el query params capacity retorna las cabanas filtradas por capacidad

// cabanasControllers.get = async (query) => {
//     const { data: rooms, error } = await supabase.from("rooms").select("*");
//     if (error) {
//         console.log(error);
//         return { data: null, error };
//     }
//     if (query.capacity !== undefined) {
//         return {
//             data: filterRoomsByCapacity(rooms, parseInt(query.capacity)),
//             error: null,
//         };
//     } else {
//         return { data: rooms, error: null };
//     }
// };

//GET

export const getAllRooms = async (query) => {
    const { data: rooms, error } = await supabase
        .from("rooms")
        .select(`*,booking(*)`);
    if (error) {
        throw error;
    }
    if (query.capacity !== undefined) {
        return {
            data: filterRoomsByCapacity(rooms, parseInt(query.capacity)),
            error: null,
        };
    }
    return { data: rooms, error: null };
};

//POST

export const postRoom = async ({
    name,
    type,
    rooms,
    services,
    price,
    capacity,
    gallery_id,
    beds,
    bathrooms,
    description,
}) => {
    const { data: postRoom, error } = await supabase
        .from("rooms")
        .insert([
            {
                name,
                type,
                rooms,
                services,
                price,
                capacity,
                gallery_id,
                beds,
                bathrooms,
                description,
            },
        ])
        .select();
    if (error) {
        throw error;
    }
    return postRoom;
};

//UPDATE

export const upRoom = async ({
    id,
    name,
    type,
    rooms,
    services,
    price,
    capacity,
    gallery_id,
    beds,
    bathrooms,
    description,
}) => {
    const { data: upRoom, error } = await supabase
        .from("rooms")
        .update({
            name,
            type,
            rooms,
            services,
            price,
            capacity,
            gallery_id,
            beds,
            bathrooms,
            description,
        })
        .eq("id", id)
        .select();
    if (error) {
        throw error;
    }
    return upRoom;
};

//DELETE

export const deleteRoom = async ({ id }) => {
    const { data: delRoom, error } = await supabase
        .from("rooms")
        .delete()
        .eq("id", id);
    if (error) {
        throw error;
    }
    return delRoom;
};

//export default cabanasControllers;
