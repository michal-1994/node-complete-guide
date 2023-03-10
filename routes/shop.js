/** @format */

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

// Shop
router.get("/", shopController.getIndex);

// Products
router.get("/products", shopController.getProducts);

// Product by id
router.get("/products/:productId", shopController.getProduct);

// Cart
router.get("/cart", shopController.getCart);

// Cart
router.post("/cart", shopController.postCart);

// Orders
router.get("/orders", shopController.getOrders);

// Checkout
router.get("/checkout", shopController.getCheckout);

module.exports = router;
