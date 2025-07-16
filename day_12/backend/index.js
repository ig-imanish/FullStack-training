const fs = require("fs");

const express = require("express");
// let data = require("./data.json");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  // res.status(200).json("hello")
  res.status(200).send("<h1>Hii from server!<h1/>");
});

app.get("/read", (req, res) => {
  fs.readFile("data.txt", "utf8", (err, data) => {
    res.status(200).send(data);
  });
});

app.get("/write", (_, res) => {
  fs.writeFile("data.txt", "Hello, World!", "utf8", (err) => {
    res.status(200).send("Updated");
  });
});

app.get("/delete", (req, res) => {
  fs.unlink("data.txt", (err) => {
    res.status(200).send("deleted");
  });
});

app.get("/append", (req, res) => {
  fs.appendFile("data.txt", "\nHow are you?", "utf8", (err) => {
    res.status(200).send("append");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*               default endpoint 
base url -> http://localhost:8080/
baseUrl/login
baseUrl/signup
*/

// const http = require("http");

// const PORT = 8080;
// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plan" });
//   response.end("Server is running ..!");
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
