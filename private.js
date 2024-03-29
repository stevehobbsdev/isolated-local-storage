require("dotenv").config();

const express = require("express");
const { join } = require("path");
const debug = require("debug")("app");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "views", "private.html"));
});

const port = process.env.PORT || 4002;

app.listen(port, () => debug(`Started on port ${port}`));
