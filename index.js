require("dotenv").config();

const express = require("express");
const { join } = require("path");
const debug = require("debug")("app");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "views", "index.html"));
});

const port = process.env.PORT || 4001;

app.listen(port, () => debug(`Started on port ${port}`));
