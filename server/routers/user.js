const express = require("express");
const Router = express.Router();

Router.get("/info", (req, res) => {
  return res.json({ name: "ok" });
});

module.exports = Router;
