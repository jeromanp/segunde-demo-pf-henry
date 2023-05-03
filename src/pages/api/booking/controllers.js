import { supabase } from "../../../utils/supabase";

export const getAllBooking = async () => {
  const { data: infoBooking, error } = await supabase.from("booking").select();

  if (error) {
    throw error;
  }
  return infoBooking;
};

export const getBookingById = async (id) => {
  const { data: room, error } = await supabase
    .from("booking")
    .select(`*`)
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
  const { data: postBooking, error } = await supabase
    .from("booking")
    .insert([
      {
        checkin,
        checkout,
        user_id,
        room_id,
        payments,
        adults,
        children,
      },
    ])
    .select();
  if (error) {
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
  const update_at = new Date();
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
      update_at,
    })
    .eq("id", id)
    .select();
  if (error) {
    throw error;
  }
  return upBooking;
};

export async function deleteBooking({ id }) {
  const { data, error } = await supabase.from("booking").delete().eq("id", id);

  if (error) {
    throw error;
  }
  return data;
}
