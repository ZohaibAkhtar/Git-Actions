const secretValue = process.env.SECRET_VALUE || "world";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hello, ${secretValue}!`);
});

app.listen(port, () => {
  console.log(`App listening at Port ${port}`);
});
