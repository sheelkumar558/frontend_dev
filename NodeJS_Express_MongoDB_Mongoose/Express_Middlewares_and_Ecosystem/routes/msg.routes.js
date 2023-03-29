const express = require("express");

const msgRouter = express.Router();

msgRouter.get("/", (req, res) => {
  console.log(req.body);
  res.send("get data");
});

msgRouter.post("/add", (req, res) => {
  console.log(req.body);
  res.send("received");
});

msgRouter.delete("/delete", (req, res) => {
  console.log(req.body);
  res.send("deleted data");
});

module.exports = { msgRouter };
