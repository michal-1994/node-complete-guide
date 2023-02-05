/** @format */

const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const productsData = adminData.products;
  res.render("shop", {
    products: productsData,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
