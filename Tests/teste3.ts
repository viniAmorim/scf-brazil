import { fakeData } from "../fakeData";
import { Request, Response } from "express";

const deleteUser = (req: Request, res: Response) => {
  const { name } = req.query;

  try {
    const index = fakeData.findIndex((user) => user && user.name === name);

    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }
  
    fakeData.splice(index, 1);

    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", erro: error });
  }
};

export { deleteUser };