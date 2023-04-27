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
