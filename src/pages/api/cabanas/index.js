import cabanasControllers from "./controllers.js";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            const { data, error } = await cabanasControllers.get(req.query);
            if (error) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(200).send(data);
            }
            break;
        default:
            res.status(405).json({ error: "Method not allowed" });
            break;
    }
}
