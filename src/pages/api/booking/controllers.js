import { getProfileId } from "helpers/dbHelpers";
import { supabase } from "../../../utils/supabase";

export const getAllBooking = async () => {
    const { data: infoBooking, error } = await supabase
        .from("booking")
        .select()
				.order('created_at', { ascending: false });

  if (error) {
    throw error;
  }
  return infoBooking;
};

export const getBookingById = async (id) => {
  const { data: room, error } = await supabase
    .from("booking")
    // De preferencia, hacer esta funcion dinamica
    // De forma que pueda pedirte solo los bookings, o bookings con sus rooms,
    // O bookings con sus rooms y sus usuarios, etc, con todas las rutas
    .select(`*, rooms(name), profiles(full_name, email)`)
    .eq("id", id)
    .single();
  if (error) {
    throw error;
  }
  return room;
};

export const postNewBooking = async ({
  checkin,
  checkout,
  user_id,
  room_id,
  payments,
  adults,
  children,
}) => {
    const { userId, error: profileError } = await getProfileId(user_id);
    if (profileError) {
        throw profileError;
    }

  const { data: postBooking, error } = await supabase
    .from("booking")
    .insert([
      {
        checkin,
        checkout,
        user_id: userId,
        room_id,
        payments,
        adults,
        children,
      },
    ])
    .select();
  if (error) {
    console.log(error);
    throw error;
  }
  return postBooking;
};

export const updateBooking = async ({
  id,
  checkin,
  checkout,
  user_id,
  room_id,
  payments,
  adults,
  children,
}) => {
  const newDate = new Date();
  const { data: upBooking, error } = await supabase
    .from("booking")
    .update({
      checkin,
      checkout,
      user_id,
      room_id,
      payments,
      adults,
      children,
      update_at: newDate,
    })
    .eq("id", id)
    .select();
  if (error) {
    throw error;
  }
  return upBooking;
};

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from("booking")
    .update({ deleted_at: new Date() })
    .eq("id", id);

  if (error) {
    throw error;
  }
  return data;
}
