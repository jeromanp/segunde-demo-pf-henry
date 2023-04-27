import {supabase} from "../../../utils/supabase"

export const getAllProfile = async () => {
    const { data: profile, error } = await supabase.from("profile").select();

  if (error) {
  //  console.log(error);
    throw error;
  }
//  console.log(profile)
  return profile;
}

export const updateProfile = async ({
    id,
    name,
    lastname,
    phone,
    country,
    email,
    role_id
     
  }) => {
    const update_at = new Date();
    const { data: updateProfile, error } = await supabase
      .from("profile")
      .update(
        {
          name,
          lastname,
          phone,
          country,         
          id,
          email,
          role_id : "7e0bea4c-140f-4777-b246-d68d4b93428a",
          update_at,
        },
      )
      .eq("id",id)
      .select();
    if (error) {
      throw error;
    }
 //   console.log(updateProfile);
    return updateProfile;
  };

  export async function deleteProfile({ id }) {
    const { data, error } = await supabase.from("profile").delete().eq("id", id);
  
    if (error) {
//      console.log(error);
      throw error;
    }
  
    return data;
  }
