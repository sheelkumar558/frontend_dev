const express = require("express");
const Ia = require("../model/iaModel.model");
Ia;
const IaRoutes = express.Router();

IaRoutes.get("/", async (req, res) => {
  const student_data = await Int32Array.find();
  res.send(student_data);
});

module.exports = { IaRoutes };
