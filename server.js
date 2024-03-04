const http = require("http");
const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>Users-Page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("in the next middleware !");
  res.send("<h1>Hello From Express!</h1>");
});

app.listen(3000);
