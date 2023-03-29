const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://sheelu:Sheelu_123@cluster0.vp8ij.mongodb.net/mvc?retryWrites=true&w=majority"
);

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  course: String,
});

const StudentModel = mongoose.model("student", studentSchema);

module.exports = {
  connection,
  StudentModel,
};
