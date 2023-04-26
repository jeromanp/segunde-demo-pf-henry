import { supabase } from "utils/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data: rooms, error } = await supabase.from("rooms").select("*");
    if (error) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(200).send(rooms);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
