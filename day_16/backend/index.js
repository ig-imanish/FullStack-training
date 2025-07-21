// const cowsay = require("cowsay");

// console.log(cowsay.say({ text: "hi" }));

import express from "express";
import { connection } from "./configs/db.js";
import { PORT } from "./configs/Config.js";
import userRoute from "./routes/user.route.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

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
