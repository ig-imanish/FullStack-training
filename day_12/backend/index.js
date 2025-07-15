const express = require("express");
let data = require("./data.json");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  // res.status(200).json("hello")
  res.status(200).send("<h1>Hii from server!<h1/>");
});

app.get("/products", (req, res) => {
  res.status(200).send(data);
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
