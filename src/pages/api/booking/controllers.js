import {supabase} from "../../../utils/supabase"

export const getAllBooking = async () => {
    const { data: infoBooking, error } = await supabase.from("booking").select();

  if (error) {
    console.log(error);
    throw error;
  }
  console.log(infoBooking)
  return infoBooking;
}