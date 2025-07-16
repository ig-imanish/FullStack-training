// const cowsay = require("cowsay");

// console.log(cowsay.say({ text: "hi" }));

import express from "express";
import { showUserData } from "./controllers/ShowUserData.js";
import { updateUserData } from "./controllers/UpdateUserData.js";
import { PORT } from "./configs/Config.js";

const app = express();

showUserData(app);
updateUserData(app);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
