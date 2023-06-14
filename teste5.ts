import { fakeData } from "./fakeData";
import { Request, Response } from "express";

const getUserReadCount = (req: Request, res: Response) => {
  const { name } = req.query;

  const user = fakeData.find((n) => n.name === name);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const targetName: string = String(name);

  const count = fakeData.reduce((accumulator, currentValue) => {
    if (currentValue.name === targetName) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  return res.json(`User ${name} was read ${count} time(s).`);
};

export default getUserReadCount;