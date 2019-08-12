const express = require("express");
const app = express();
const consign = require("consign");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.mongoose = mongoose;
consign()
  .then("./config/validation.js") // Validation entrys
  .then("./controllers")
  // .then("./controllers")
  .then("./config/mongodb.js") // Configuration mongodb connections
  .then("./models/mongodb.js") // Model scheme mongodb
  .then("./config/routes.js") // Routes aplication
  .into(app); // Global variable

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on PORT ${process.env.SERVER_PORT}`);
});
