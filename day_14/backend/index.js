// const cowsay = require("cowsay");

// console.log(cowsay.say({ text: "hi" }));

import express from "express";
import { showUserData } from "./controllers/ShowUserData.js";
import { updateUserData } from "./controllers/UpdateUserData.js";
import { createUserData } from "./controllers/CreateUserData.js";
import { deleteUserData } from "./controllers/DeleteUserData.js";
import { connection } from "./configs/db.js";
// const connection = require("./configs/db.js");
import { PORT } from "./configs/Config.js";

const app = express();

showUserData(app);
updateUserData(app);
createUserData(app);
deleteUserData(app);

app.listen(PORT, async () => {
  try {
    console.log("DB Connecting...");
    await connection;
    console.log("DB Connected!");
  } catch {}
  console.log(`Server is running on http://localhost:${PORT}`);
});
