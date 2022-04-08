const express = require('express')  // Initializing Express
const app = express()

app.set('view engine', 'ejs');      // Specifying the view engine.

app.get('/:userQuery',(req,res)=>{
    res.render('homepage',{data : {userQuery: req.params.userQuery,             // Rendering the .ejs file. 
                               searchResults : ['iPhone 13 Mini','iPhone 13',   // Passing in the data that will be shown in the rendered file.
                                                'iPhone 13 Pro','iPhone 13 Pro Max'],
                               loggedIn : true,                                 
                               username : 'Kevin'}});
});


// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000.');
  });
