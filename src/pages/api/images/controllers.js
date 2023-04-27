import { supabase } from "../../../utils/supabase";

export const getAllImages = async () => {
  const { data: images, error } = await supabase.from("images").select();

  if (error) {
    throw error;
  }
  return images;
};


export const postNewImage = async ({
    alt,
    url,
  }) => {
    const { data: postImage, error } = await supabase
      .from("images")
      .insert([
        {
          alt,
          url,        
        },
      ])
      .select();
    if (error) {
      throw error;
    }
    return postImage;
  };