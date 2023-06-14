import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import { 
  getUser, 
  getUsers, 
  addUser, 
  deleteUser, 
  updateUser, 
  getUserReadCount 
} from "./Tests";

import userPermissions from "./auth";

const app = express();
const port = 3000;

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req: Request, res: Response) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", getUser);
app.get("/users", getUsers);
app.post("/users", addUser);
app.delete("/users", deleteUser);
app.put("/users", userPermissions, updateUser);
app.get("/users/time-access", userPermissions, getUserReadCount);

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});