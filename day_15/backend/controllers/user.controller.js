import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

const userSignup = async (req, res) => {
  const { name, email, password, phoneNumber, age } = req.body;

  const userExist = userModel.findOne({ email });
  if (userExist) {
    res.status(302).send("Already exist");
    return;
  }

  try {
    let saltRounds = 5;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.error("Error during bcrypt:", err);
        res.status(500).json({ error: "Error during bcrypt" });
        return;
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
          phoneNumber,
          age,
        });

        await user.save();

        res.status(200).send("User signup successfully!");
      }
    });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const userLogin = async () => {};

export { userSignup, userLogin };
