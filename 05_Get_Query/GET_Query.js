const express = require ('express')                         // Importing Express.
const app = express()

app.get('/example/:name/:id', (req,res) =>{
    console.log(req.params)                                 // Getting the parameters from the URL
    console.log(req.query)                                  // Getting the query from the URL
    res.send(req.params.name + " : " + req.params.id)
})

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000.');
  });
