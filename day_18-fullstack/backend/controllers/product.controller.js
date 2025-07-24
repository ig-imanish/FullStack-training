const { productModel } = require("../models/products.model");

const createProduct = (req, res) => {
  const { title, brand, image, price, description, rating, category } =
    req.body;

  try {
    const product = new productModel({
      title,
      brand,
      image,
      price,
      description,
      rating,
      category,
    });

    product
      .save()
      .then(() => {
        res.status(201).json({ message: "Product created successfully" });
      })
      .catch((error) => {
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Failed to create product" });
      });
  } catch (error) {
    console.error("Error during product creation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res
      .status(200)
      .send({ message: "successfully get product", products: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createProduct, getProduct };
