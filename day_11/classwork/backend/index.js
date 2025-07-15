// const os = require("os");

// console.log(os);
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.machine());

// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.version());

// const http = require("http");
// console.log(http);

// commonJS -> require()
// ES6 -> import, export

// Import the HTTP module
const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "api data",
    })
  );
});

server.listen(8000);
