import * as Controllers from "./controllers"

export async function handlerGet (req, res){
    try {
        const profile= await Controllers.getAllProfile()
        return res.status(200).json(profile)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const handlerPost = async () => {

}

export const handlerPut = async () => {
    
}

export const handlerDelete = async () => {
    
}