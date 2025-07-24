require("dotenv").config();

const express = require("express");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/user.routes");

const app = express();
const cors = require("cors");
const { productRoute } = require("./routes/product.route");
app.use(cors());
app.use(express.json());
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

  try {
    console.log("DB Connecting...");
    await connection;
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
