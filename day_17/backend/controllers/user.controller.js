import bcrypt from "bcrypt";
import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userSignup = async (req, res) => {
  const { name, email, password, phoneNumber, age } = req.body;

  const userExist = await userModel.findOne({ email });
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

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await userModel.findOne({ email });
  console.log(userExist);
  if (!userExist) {
    res.status(404).send("User does not exist");
    return;
  }

  try {
    bcrypt.compare(password, userExist.password, (err, result) => {
      const token = jwt.sign(
        {
          data: userExist._id,
        },
        "secret",
        { expiresIn: "5h" }
      );

      if (err) {
        console.error("Error during bcrypt comparison:", err);
        res.status(500).json({ error: "Error during bcrypt comparison" });
        return;
      }
      if (result) {
        res.status(200).send("token : " + token);
      } else {
        res.status(401).send("Invalid credentials");
      }
    });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { userLogin, userSignup };
