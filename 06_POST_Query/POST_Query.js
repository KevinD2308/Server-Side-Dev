const express = require ('express')                     // Importing Express.
const bodyParser = require('body-parser')               // Importing body-parser.
const app = express()

app.use(bodyParser.json());                             // Crucial when working with POST method.
app.use(bodyParser.urlencoded({ extended: true }));     // This allows the client to insert data into the server in JSON format.

// Posting data to the server

app.post('/postquery', (req,res) =>{
    let username = req.body.username;                   // Allowing the client to insert the username.
    console.log(username);                              // Displaying the data from the POST method to the terminal.
    res.send("Hello " + username);
})

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });