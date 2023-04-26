import * as Controllers from "./controllers"

export async function handlerGet (req, res){
    try {
        const booking= await Controllers.getAllBooking()
        return res.status(200).json(booking)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}