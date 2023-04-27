import { supabase } from "../../../utils/supabase";

export const getAllImages = async () => {
  const { data: images, error } = await supabase.from("images").select();

  if (error) {
    throw error;
  }
  return images;
};
