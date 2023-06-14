import { fakeData } from "../fakeData";
import { Request, Response } from "express";

const updateUser = (req: Request, res: Response) => {
  const { id } = req.query;
  const { name, job } = req.body;

  try {
    const user = fakeData.find((d) => d.id === id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    user.name = !String(name) ? user.name : name;
    user.job = !String(job) ? user.job : job;

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", erro: error });
  }
};

export { updateUser };