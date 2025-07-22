import express from "express";
import { productsController } from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const productRoute = express.Router();

productRoute.get("/products",authMiddleware, productsController);

export default productRoute;
