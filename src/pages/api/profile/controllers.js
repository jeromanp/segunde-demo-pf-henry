import {supabase} from "../../../utils/supabase"

export const getAllProfile = async () => {
    const { data: profile, error } = await supabase.from("profile").select();

  if (error) {
    console.log(error);
    throw error;
  }
  console.log(profile)
  return profile;
}

