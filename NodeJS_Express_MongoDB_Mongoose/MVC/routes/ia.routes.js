const express = require("express");
const Ia = require("../model/iaModel.model");
const IaController = require("../controller/ia.controller");
Ia;
const IaRoutes = express.Router();

IaRoutes.get("/", IaController.getIa);
IaRoutes.post("/", IaController.postIa);
module.exports = { IaRoutes };
