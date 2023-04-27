import * as Controllers from "./controllers"

export async function handlerGet (req, res){
    try {
        const allImages= await Controllers.getAllImages()
        return res.status(200).json(allImages)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}