import { fakeData } from "./fakeData";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

const addUser = (req: Request, res: Response) => {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(400).json({ error: "Name and job are required" });
  }

  let id = uuidv4();

  const newUser = { id, name, job };
  
  try {
    fakeData.push(newUser);
    
    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", erro: error });
  }
};

export default addUser;