//import cabanasControllers from "./controllers.js";
import * as Handlers from "./handlers";
import * as Methods from "../methods";

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    // case Methods.GET:
    //   const { data, error } = await cabanasControllers.get(req.query);
    //   if (error) {
    //     res.status(404).json({ error: error.message });
    //   } else {
    //     res.status(200).send(data);
    //   }
    //   break;
    case Methods.GET:
      return await Handlers.handlerGet(req, res);
    case Methods.POST:
      return await Handlers.handlerPost(req, res);
    case Methods.PUT:
      return await Handlers.handlerPut(req, res);
    case Methods.DELETE:
      return await Handlers.handlerDelete(req, res);

    default:
      res.status(400).json({
        message: "400 Bad Request : invalid method",
      });
  }
}
