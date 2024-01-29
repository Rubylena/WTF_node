const http = require("http");
const URL = require("url");
const UserAc = require("./addUser");
const fs = require("fs");
const allUsers = require("./allUsers");
const PORT = 5000;

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { Content_Type: "text/html" });
    res.write("Welcome to my first nodejs application");
    res.end();
  } else if (req.url == "/users") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { Content_Type: "application/json" });
    const data = allUsers();
    res.write(data);
    res.end();
  } else if (req.url == "/adduser?username=ben&age=15") {
    const newUrl = URL.parse(req.url, true);
    const params = newUrl.query;
    let u_name = params.username;
    let u_age = params.age;
    UserAc(u_name, u_age);
    res.end("record added");
  } else if (req.url.startsWith("/addNewUser")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { Content_Type: "application/json" });
    const newUrl = URL.parse(req.url, true);
    const params = newUrl.query;
    let u_name = params.username;
    let u_age = params.age;
    UserAc(u_name, u_age);
    res.end("record added Successfully");
  } else if (req.url == "/contact") {
    res.writeHead(200, { Content_Type: "text/html" });
    res.write("contact page");
    res.end();
  } else {
    res.writeHead(404, { Content_Type: "text/html" });
    res.end();
  }
});

server.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});
