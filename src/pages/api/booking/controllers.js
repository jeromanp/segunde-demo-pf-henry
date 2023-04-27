import { supabase } from "../../../utils/supabase";

export const getAllBooking = async () => {
  const { data: infoBooking, error } = await supabase.from("booking").select();

  if (error) {
    console.log(error);
    throw error;
  }
  console.log(infoBooking);
  return infoBooking;
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
    console.log(error);
    throw error;
  }

  return data;
}
