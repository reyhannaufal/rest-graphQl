const express = require("express");

const app = express();
const port = 9000;

app.get("/index", (req, res) => {
  res.send("Hello World");
});

app.listen(port);

console.log(`Is runing in ${port}`);
