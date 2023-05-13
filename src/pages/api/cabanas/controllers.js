import { supabase } from "utils/supabase";
import { filterRoomsByCapacity, filterRoomsByDates } from "helpers/filters";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//GET

export const getAllRooms = async (query) => {
    const { data: rooms, error } = await supabase
        .from("rooms")
        .select(`*,booking(checkin,checkout), images(url)`)
        .order("created_at", { ascending: false });

    if (error) {
        throw error;
    }
    let data = rooms;
    if (query.capacity !== undefined) {
        data = filterRoomsByCapacity(rooms, parseInt(query.capacity));
    }
    if (query.checkin !== undefined && query.checkout !== undefined) {
        data = filterRoomsByDates(data, query.checkin, query.checkout);
    }
    return { data, error: null };
};

//GET/ID

export const getRoomById = async (id) => {
    const { data: room, error } = await supabase
        .from("rooms")
        .select(`*,booking(checkin,checkout)`)
        .eq("id", id)
        .single();
    if (error) {
        throw error;
    }
    return room;
};

//POST
export const postRoom = async (form_data) => {
    //console.log(form_data);
    //creacion en stripe
    const newCabana = await stripe.products.create({
        name: form_data.name,
        description: form_data.description,
        metadata: {
            type: form_data.type,
            rooms: form_data.rooms,
            capacity: form_data.capacity,
            beds: form_data.beds,
            price_metadata: form_data.price,
        },
    });
    //Creacion del precio
    const newCabanaPrice = await stripe.prices.create({
        product: newCabana.id,
        unit_amount: parseInt(form_data.price) * 100,
        currency: "ars",
    });
    form_data.stripe_product_id = newCabana.id;
    //Creacion en base de datos
    const { data: postRoom, error } = await supabase
        .from("rooms")
        .insert([form_data])
        .select();

    if (error) {
        throw error;
    }
    return postRoom;
};

//UPDATE
export const upRoom = async (id, form_data, suspend) => {
    if (suspend === undefined) {
        //Update en base de datos
        const { data: upRoom, error } = await supabase
            .from("rooms")
            .update(form_data)
            .eq("id", id)
            .select(`*`)
            .single();
        if (error) {
            throw error;
        } //Update en stripe
        const productToUpdate = await stripe.products.retrieve(
            upRoom.stripe_product_id
        );
        const oldPriceId = productToUpdate.default_price;
        const newPrice = await stripe.prices.create({
            product: upRoom.stripe_product_id,
            unit_amount: parseInt(form_data.price) * 100,
            currency: "ars",
        });
        const updatePrice = await stripe.products.update(
            upRoom.stripe_product_id,
            {
                default_price: newPrice.id,
            }
        );
        const oldPrinceUpdate = await stripe.prices.update(oldPriceId, {
            active: false,
        });

        return upRoom;
    } else {
        const room = await getRoomById(id);
        const { data: upRoom, error } = await supabase
            .from("rooms")
            .update({ suspended: !room.suspended })
            .eq("id", id)
            .select();
        if (error) {
            throw error;
        }
        return upRoom;
    }
};

//DELETE

export const deleteRoom = async (id) => {
    const { data: delRoom, error } = await supabase
        .from("rooms")
        .update({ deleted_at: new Date() })
        .eq("id", id);
    if (error) {
        throw error;
    }
    return delRoom;
};
