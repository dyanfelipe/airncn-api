const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();
// mongodb+srv://aircnc:<password>@aircnc-o7vg9.mongodb.net/test
let host =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_HOST +
  "/" +
  process.env.DB_AMBIENTE;

mongoose.connect(host, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT);