const express = require('express') // Initializing express.
const app = express();


// This is a built-in middleware function in Express. It is used to serve static files.
// In this case the static files are located under the folder named 'public'.
app.use(express.static('public'))       


// Starting the server on port 3000.
app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
