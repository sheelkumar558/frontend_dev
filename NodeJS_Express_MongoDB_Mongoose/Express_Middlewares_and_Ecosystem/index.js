const express = require("express");
const app = express();
const { msgRouter } = require("./routes/msg.routes");
//Middleware function -> which has access to request object,response object and next()
// callback function -> any function that is passed as an argument to other function is called as callback
//express has inbuilt middleware express.json()
//cors middleware
const cors = require("cors");
//cors allows all origin request
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use("/msg", msgRouter);
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("welcome to contact page");
});
app.post("/add", (req, res) => {
  res.send("add");
});
app.listen(8888, () => {
  console.log("listen port 8888");
});
//DNS domain name system
//server -computer (build a server)
//google.com -> some server -> ip address
//contact book
//search - friends - dial - search by name

//google.com - browser - dns -
