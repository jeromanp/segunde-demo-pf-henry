import { supabase } from "utils/supabase";
import { filterRoomsByCapacity, filterRoomsByDates } from "helpers/filters";

//GET

export const getAllRooms = async (query) => {
  const { data: rooms, error } = await supabase
    .from("rooms")
    .select(`*,booking(checkin,checkout)`);

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

export const deleteRoom = async (id) => {
  const { data: delRoom, error } = await supabase
    .from("rooms")
    .delete()
    .eq("id", id);
  if (error) {
    throw error;
  }
  return delRoom;
};
