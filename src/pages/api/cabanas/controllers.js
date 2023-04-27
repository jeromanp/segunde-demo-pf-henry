import { supabase } from "utils/supabase";
import { filterRoomsByCapacity } from "helpers/filters";

const cabanasControllers = {};

//Retorna todas las cabanas.
//En caso de que exista el query params capacity retorna las cabanas filtradas por capacidad
cabanasControllers.get = async (query) => {
    const { data: rooms, error } = await supabase.from("rooms").select("*");
    if (error) {
        console.log(error);
        return { data: null, error };
    }
    if (query.capacity !== undefined) {
        return {
            data: filterRoomsByCapacity(rooms, parseInt(query.capacity)),
            error: null,
        };
    } else {
        return { data: rooms, error: null };
    }
};

export default cabanasControllers;
