const serverless = require("serverless-http");
const express = require("express");
const app = express();
require("dotenv").config();

app.get("/hello", (req, res) => {
  res.send(`Hello EARTH`);
});

module.exports.handler = serverless(app);
