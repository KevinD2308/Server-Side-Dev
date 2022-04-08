const express = require('express');
const app = express();

const movies = require("./movies"); // Requiring the movies file.
console.log(movies); // Displaying data on the terminal.


// Displaying data to the client.

app.get("/movies", (req,res) => {
    res.send(movies) 
});

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000.');
  });
