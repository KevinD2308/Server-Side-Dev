const express = require ('express');                    // Importing Express.
const bodyParser = require('body-parser')               // Importing Body-Parser.
const mysql = require('mysql');                         // Importing MySQL.

const app = express();
const port = process.env.PORT || 5000                   // Opening port 5000.

app.use(bodyParser.urlencoded({extended: false}))       // Returns middleware that only parses urlencoded bodies.
app.use(bodyParser.json())                              // Returns middleware that only parses json.

// Connecting to MYSQL

const pool = mysql.createPool({
    connectionLimit: 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
})

// Creating a new database

pool.getConnection(function(err,connection) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("CREATE DATABASE IF NOT EXISTS Students ", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});


// Connecting to the created database and creating a new table: "students_table" if it does not exist.

pool.getConnection(function(err,connection) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    connection.changeUser({database : "Students"});
    let createstudents = `create table IF NOT EXISTS students_table(
                            ID int primary key auto_increment,
                            Name varchar(255)not null,
                            Grade int not null 
                        )`;
  
    connection.query(createstudents, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      } else {
          console.log("Table created.")
      }
    });
  
    connection.release(function(err) {
      if (err) {
        return console.log(err.message);
      }
    })
})
  
// Selecting all students

app.get('', (req,res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err;
        connection.changeUser({database : "Students"});
        connection.query('SELECT * from students_table', (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Selecting specific students by ID

app.get('/:id', (req,res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err;
        connection.changeUser({database : "Students"});
        connection.query('SELECT * from students_table WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Deleting students by ID

app.delete('/:id', (req,res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err;
        connection.changeUser({database : "Students"});
        connection.query('DELETE from students_table WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err){
                res.send('Student has been removed')
            } else {
                console.log(err)
            }
        })
    })
})

// Inserting a student

app.post('/', (req,res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.changeUser({database : "Students"});
        const params = req.body
        connection.query('INSERT INTO students_table SET ?', params, (err, rows) => {
        connection.release()                            // Return the connection to pool.
        if (!err) {
            res.send(`Student has been added.`)
        } else {
            console.log(err)
        }})
    })
})

// Updating a student

app.patch('/', (req,res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err;
        connection.changeUser({database : "Students"});
        const {ID, Name, Grade} = req.body
        connection.query('UPDATE students_table SET Grade = ? WHERE ID = ?', [Grade,ID], (err, rows) => {
            connection.release()

            if(!err){
                res.sendStatus(200)
            } else {
                console.log(err)
            }
        })
    })
})

// Starting the server on port 5000.

app.listen(port, () => console.log('Listen on Port 5000'))
