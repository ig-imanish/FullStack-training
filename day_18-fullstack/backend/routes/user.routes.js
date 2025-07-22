// import express from "express";
// import { userLogin, userSignup } from "../controllers/user.controller.js";

const express = require("express");
const { userLogin, userSignup } = require("../controllers/user.controller.js");

const userRoute = express.Router();

userRoute.post("/signup", userSignup);
userRoute.post("/login", userLogin);

module.exports = { userRoute };
