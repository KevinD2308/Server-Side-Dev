const express = require ('express');                    // Importing Express.
const app = express();

app.get("/", (req,res) => {
    
    const responseData = {
    username:"Kevin",
    age: 23,                                            // The response data.
    password: "secret",
    gender: "male"
}
  
const jsonContent = JSON.stringify(responseData);       // Turning it into a JSON.
var objectValue = JSON.parse(jsonContent);              // Parsing the data.
res.send("Hello " + objectValue.username + ". Your record in the database shows that you are a "        // Using the JSON data to create a sentence.
                  + objectValue.age + " year old " + objectValue.gender + ".");
});

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000.');
  });

