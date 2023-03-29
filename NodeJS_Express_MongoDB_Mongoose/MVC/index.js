const express = require("express");
const app = express();
const { connection, StudentModel } = require("./db");
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/students", (req, res) => {
  res.send("students");
});
app.listen(8090, async () => {
  try {
    await connection;
    console.log("DB connect");
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
  console.log("Running port 8090");
});
