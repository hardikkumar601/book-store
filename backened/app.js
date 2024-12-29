const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");

// getting response
app.get("/", (req, res) => {
  res.send("Server new data sending");
});

// creating port
// for running it - nodemon app.js
app.listen(process.env.PORT, () => {
  console.log(`Hello Hardik Nice to meet u ${process.env.PORT}`);
});
