import { supabase } from "utils/supabase";
import { filterRoomsByCapacity, filterRoomsByDates } from "helpers/filters";

//GET

export const getAllRooms = async (query) => {
  const { data: rooms, error } = await supabase
    .from("rooms")
    .select(`*,booking(checkin,checkout)`)
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
    const { data: upRoom, error } = await supabase
      .from("rooms")
      .update(form_data)
      .eq("id", id)
      .select();
    if (error) {
      throw error;
    }
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
