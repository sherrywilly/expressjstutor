const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("*", (req, res) => {
  res.status(400).send("404");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server is running");
});
