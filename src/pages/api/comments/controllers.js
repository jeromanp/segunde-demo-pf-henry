import { supabase } from "../../../utils/supabase";

export const getAllComments = async () => {
  const { data: comments, error } = await supabase
    .from("comments")
    .select(`*, profiles(full_name, email)`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    throw error;
  }

  return comments;
};

export const getCommentById = async (id) => {
  const { data: room, error } = await supabase
    .from("comments")
    .select(`*`)
    .eq("id", id)
    .single();
  if (error) {
    throw error;
  }
  return room;
};

export const postNewComment = async ({ review, user_id, stars, approved }) => {
  const { data: postComment, error } = await supabase
    .from("comments")
    .insert([
      {
        review,
        user_id,
        stars,
        approved: false,
      },
    ])
    .select();
  if (error) {
    throw error;
  }
  return postComment;
};

export const updateComment = async (
  { id, review, user_id, stars, approved },
  queryId,
  suspend
) => {
  if (suspend === undefined) {
    const update_at = new Date();
    const { data: updateComments, error } = await supabase
      .from("comments")
      .update({ review, user_id, stars, approved, update_at })
      .eq("id", id)
      .select();
    if (error) {
      throw error;
    }
    return updateComments;
  } else {
    const comment = await getCommentById(queryId);
    const { data: upComment, error } = await supabase
      .from("comments")
      .update({ suspended: !comment.suspended })
      .eq("id", queryId)
      .select();
    if (error) {
      throw error;
    }
    return upComment;
  }
};

export async function deleteComment(id) {
  const { data, error } = await supabase
    .from("comments")
    .update({ deleted_at: new Date() })
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}
