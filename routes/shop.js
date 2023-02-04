/** @format */

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Hello from express home page</h1>");
});

module.exports = router;
