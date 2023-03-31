const express = require("express");
const Ia = require("../model/iaModel.model");
Ia;
const IaRoutes = express.Router();

IaRoutes.get("/", async (req, res) => {
  const ia_data = await Ia.find();
  res.send(ia_data);
});

module.exports = { IaRoutes };
