const express = require("express");
const studentRoutes = express.Router();

const studentController = require("../controller/student.controller");

studentRoutes.get("/", studentController.getStudent);

studentRoutes.get("/:id", studentController.getStudentById);

studentRoutes.post("/", studentController.postStudent);

module.exports = { studentRoutes };
