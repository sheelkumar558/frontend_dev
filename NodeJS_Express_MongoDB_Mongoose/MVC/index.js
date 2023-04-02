const express = require("express");
const app = express();
const { connection } = require("./config/db");

const { studentRoutes } = require("./routes/student.routes");
const { IaRoutes } = require("./routes/ia.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/students", studentRoutes);
app.use("/ias", IaRoutes);
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
