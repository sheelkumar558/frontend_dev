const express = require("express");
const { connection } = require("./config/db");
const { UserModel } = require("./models/user.model");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const new_user = new UserModel({
    email,
    password,
  });
  await new_user.save();
  res.send("Signup successfully");
});
app.listen(8004, async () => {
  try {
    await connection;
    console.log("DB connected");
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
  console.log("Listening port 8004");
});
