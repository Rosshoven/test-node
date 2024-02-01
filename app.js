const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello Worldddd!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
app.get("/square", function (req, res) {
    res.send(`The area of a square with a width of 8 is ${square.area(8)}`);
  });


  const wiki = require('./wiki');

  app.use("/wiki", wiki);