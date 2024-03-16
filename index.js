require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hi");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(port, () => {
  console.log(`port is listing on ${port}`);
});
