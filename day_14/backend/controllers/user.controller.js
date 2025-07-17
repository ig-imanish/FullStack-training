import { userModel } from "../models/user.model.js";

const userSignup = async (req, res) => {
  const { name, email, password, phoneNumber, age } = req.body;

  try {
    const user = new userModel({
      name,
      email,
      password,
      phoneNumber,
      age,
    });
    await user.save();
    console.log("User signup data:", req.body);
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const userLogin = () => {};

export { userSignup, userLogin };
