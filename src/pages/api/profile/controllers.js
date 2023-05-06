import { supabase } from "../../../utils/supabase";

export const getAllProfile = async () => {
  const { data: rooms, error } = await supabase.from("profiles").select(`*`);
  if (error) {
    throw error;
  }
  return rooms;
};

//El postProfile tiene un problema con el id, ya que este se genera desde auth

export const postProfile = async ({
  username,
  full_name,
  avatar_url,
  email,
  phone,
  country,
  role_id,
}) => {
  let id = uuidv4();
  const { data: postProfile, error } = await supabase.from("profiles").insert([
    {
      id,
      username,
      full_name,
      avatar_url,
      email,
      phone,
      country,
      role_id,
    },
  ]);
  if (error) {
    throw error;
  }
  return postProfile;
};

export const updateProfile = async (
  id,
  {
    username,
    full_name,
    avatar_url,
    email,
    stripe_costumer,
    phone,
    country,
    role_id,
  }
) => {
  const { data: updateProfile, error } = await supabase
    .from("profiles")
    .update({
      username,
      full_name,
      avatar_url,
      email,
      stripe_costumer,
      phone,
      country,
      role_id,
    })
    .eq("id", id)
    .select();
  if (error) {
    throw error;
  }
  return updateProfile;
};

export async function deleteProfile(id) {
  const { data: delProfile, error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", id);
  if (error) {
    throw error;
  }
  return delProfile;
}
