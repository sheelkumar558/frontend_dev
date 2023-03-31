const Student = require("../model/studentModel.model");
const getStudent = async (req, res) => {
  const student_data = await Student.find();
  res.send(student_data);
};
const getStudentById = async (req, res) => {
  const student_data = await Student.find({ _id: req.params.id });
  res.send(student_data);
};
const postStudent = async (req, res) => {
  const payload = req.body;
  if (payload.course === "NEM-111") {
    await Student.insertMany([payload]);
    res.send("Student data created successfully");
  } else {
    res.send("Please enter a valid course");
  }
};

const studentController = { getStudent, getStudentById, postStudent };

module.exports = studentController;
