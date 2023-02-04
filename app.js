/** @format */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
