// const cowsay = require("cowsay");

// console.log(cowsay.say({ text: "hi" }));

// import { showUserData } from "./controllers/ShowUserData.js";
// import { updateUserData } from "./controllers/UpdateUserData.js";
// import { createUserData } from "./controllers/CreateUserData.js";
// import { deleteUserData } from "./controllers/DeleteUserData.js";
// const connection = require("./configs/db.js");

import express from "express";
import { connection } from "./configs/db.js";
import { PORT } from "./configs/Config.js";
import userRoute from "./routes/user.route.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// showUserData(app);
// updateUserData(app);
// createUserData(app);
// deleteUserData(app);

app.use(userRoute);

app.listen(PORT, async () => {
  try {
    console.log("DB Connecting...");
    await connection;
    console.log("DB Connected!");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
