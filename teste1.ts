import { Request, Response } from "express";
import { fakeData } from "./fakeData";

interface User {
  name: string;
}

const getUser = (req: Request, res: Response) => {
  var name = req.query.name;

  try {
    const user = fakeData.find((user: User) => user.name === name);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", erro: error });
  }
};

const getUsers = (req: Request, res: Response) => {
  try {
    res.json(fakeData);
  } catch (error) {
    res.status(500).json({ message: "Server error", erro: error });
  }
};

export { getUser, getUsers };