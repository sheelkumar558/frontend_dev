const fs = require("fs");

fs.readFile("./lec.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error reading the file");
    console.log(err);
  }
  console.log(data);
});

const data = fs.readFileSync("./lec.txt", { encoding: "utf-8" });
console.log(data);

fs.writeFile(
  "./test.txt",
  "second hello from index.js",
  { encoding: "utf-8" },
  (err) => {
    if (err) {
      console.log("Error writing to the file");
      console.log(err);
    }
    console.log("Go check the file now");
  }
);

fs.appendFile(
  "./test.txt",
  "\nfourth hello from index.js\n",
  { encoding: "utf-8" },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("check file now");
  }
);
