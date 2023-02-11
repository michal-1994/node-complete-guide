/** @format */

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// Admin Add Product
router.get("/add-product", adminController.getAddProduct);

// Admin Products
router.get("/products", adminController.getProducts);

// Admin Add Product
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
