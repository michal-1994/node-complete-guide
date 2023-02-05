/** @format */

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const productsData = adminData.products;
  res.render("shop", {
    products: productsData,
    title: "Shop",
  });
});

module.exports = router;
