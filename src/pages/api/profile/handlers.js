import * as Controllers from "./controllers";

export async function handlerGet(req, res) {
  try {
    const profile = await Controllers.getAllProfile();
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlerPost(req, res) {
  const body = req.body;
  try {
    const newProfile = await Controllers.postProfile(body);
    return res.status(200).json(newProfile);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

export const handlerPut = async (req, res) => {
  const body = req.body;
  const { id } = req.query;
  try {
    const updateProfile = await Controllers.updateProfile(id, body);
    res.status(200).json(updateProfile);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const handlerDelete = async (req, res) => {
  const { id } = req.query;

  try {
    const response = await Controllers.deleteProfile(id);
    return res.status(200).json({ message: "User successfully removed" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
