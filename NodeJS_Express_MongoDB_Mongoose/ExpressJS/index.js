const express = require("express");
const fs = require("fs");
// three dot mine using es6
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/product", (req, res) => {
  const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const parseData = JSON.parse(data);
  const pro = parseData.profiles;
  console.log(pro);
  res.send(JSON.stringify(pro));
});

app.post("/profile", (req, res) => {
  //1. accessing the product the client is sending
  //req.body
  //2.read the file

  const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
  let parseFile = JSON.parse(file);
  //Modify te products in the file
  parseFile.profiles.push(req.body);
  console.log(parseFile.profiles);
  //stringify the file
  parseFile = JSON.stringify(parseFile);
  //4 write the file back
  fs.writeFileSync("./db.json", parseFile, {
    encoding: "utf-8",
  });
  res.send("Welcome to profile page");
});

app.listen(4040, () => {
  console.log("Running port 4040");
});
