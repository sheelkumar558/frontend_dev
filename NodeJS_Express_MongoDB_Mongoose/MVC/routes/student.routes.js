const express = require("express");
const Student = require("../model/studentModel.model");
Student;
const studentRoutes = express.Router();

studentRoutes.get("/", async (req, res) => {
  const student_data = await Student.find();
  res.send(student_data);
});

studentRoutes.get("/:studentName", async (req, res) => {
    const student_data = await Student.find({name});
    res.send(student_data);
  });

module.exports = { studentRoutes };
