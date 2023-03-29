const mongoose = require("mongoose");
const express = require("express");
//const {connection, StudentModel} = require("./db")

const app = express();

app.use(express.json());

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web15");

//schema

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  course: String,
});

//model -> sheep, structure,

const StudentModel = mongoose.model("student", studentSchema);

// module.exports = {
//   connection,
//   StudentModel,
// };

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About");
});

app.get("/students", async (req, res) => {
  const results = await StudentModel.find();
  res.send(results);
});

app.post("/addStudent", async (req, res) => {
  const data = req.body;
  const student = new StudentModel(data);
  await student.save();
  res.send(student);
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB Successfully");
  } catch (err) {
    console.log("Error connecting to db");
    console.log(err);
  }
  console.log("Listening at 8080");
});

//protocol address dbName
/* 

const express = require("express")
const {connection, StudentModel} = require("./db")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Homepage")
})

app.get("/about", (req, res) => {
    res.send("Welcome to About")
})

app.get("/students", async (req, res) => {
    const results = await StudentModel.find()
    res.send(results)
})

app.post("/addstudent", async (req, res) => {
    const data = req.body;
    const student = new StudentModel(data)
    await student.save()
    res.send(student)
})

app.listen(8080, async () => {
    try{
        await connection
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Error connecting to db")
        console.log(err)
    }
    console.log("Listening at 8080")
})
const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web24")

const studentSchema =  mongoose.Schema({
    name : String,
    age : Number,
    course : String,
})

const StudentModel = mongoose.model("student", studentSchema)


module.exports = {
    connection,
    StudentModel
}

*/
