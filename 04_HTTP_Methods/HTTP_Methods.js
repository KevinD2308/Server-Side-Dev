const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// An array of users is created. 

const users = [
    { name:"Kevin", age: 21 },
    { name:"Kelvin", age: 25 },
    { name:"Calvin", age: 28 },
];

// The get method is used to access the records of the array. 

app.get('/', (req,res) => {
    res.status(200).send(users)
});

// To succesfully insert a new record in the array, the post method is used.

app.post('/', (req,res) => {
    const user = req.body;
    users.push(user)
    res.status(201).send('Created User')
})

// The delete method is used to remove a specific record from the array. 

app.delete('/', (req, res) => {
    let username = req.body;
    let index = users.findIndex((array) => array.username === username);
    let deletedUsername = users.splice(index, 1);
    res.status(200).send(deletedUsername)
   })

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running');
  });
