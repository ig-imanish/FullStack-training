import express from "express";
import { userSignup, userLogin } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/signup", userSignup);
userRoute.post("/login", userLogin);

export default userRoute;
