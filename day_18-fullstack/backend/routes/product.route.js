const express = require("express");
const {
  createProduct,
  getProduct,
} = require("../controllers/product.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

const productRoute = express.Router();

productRoute.post("/create", authMiddleware, createProduct);
productRoute.get("/get", authMiddleware, getProduct);

module.exports = { productRoute };
