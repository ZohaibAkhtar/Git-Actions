
const secretValue = process.env.SECRET_VALUE || "world";


const fs = require('fs');

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

fs.readFile('txt.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }

  try {
    // Execute the JavaScript code from the file
    eval(data); 
    // Set the 'secretValue' variable based on 'text' or a default value
    const secretValue = data || "world";

    // Start your Express app here, inside the callback
    app.get("/", (req, res) => {
      res.send(`Hello, ${secretValue}!`);
    });

    app.listen(port, () => {
      console.log(`App listening at Port ${port}`);
    });
  } catch (error) {
    console.error(`Error executing the JavaScript code: ${error}`);
  }
});
