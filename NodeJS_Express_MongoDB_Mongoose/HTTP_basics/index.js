const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/pages") {
    res.end("Pages page");
  }
});
server.listen(3000, () => {
  console.log("Server is running port 3000");
});
