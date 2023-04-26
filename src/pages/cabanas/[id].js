import { supabase } from "utils/supabase";

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data: room, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id);
  // .single();

  if (error) {
    console.log(`Error al obtener el room con uuid ${id}`);
    console.log(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      room: room[0],
    },
  };
}

export default function Room({ room }) {
  console.log(room);
  return (
    <div>
      <h1>{room.id}</h1>
    </div>
  );
}
