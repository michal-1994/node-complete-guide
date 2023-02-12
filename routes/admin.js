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

// Admin Edit Product
router.get("/edit-product/:productId", adminController.getEditProduct);

// Admin Edit Product
router.post("/edit-product/", adminController.postEditProduct);

module.exports = router;
