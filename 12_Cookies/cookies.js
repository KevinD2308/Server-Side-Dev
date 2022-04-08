const express = require ('express');            // Initializing Express.
const cookieParser = require ('cookie-parser'); // Initializing CookieParser

const app = express();

app.use(cookieParser())

// Validating the cookie that the client will send when he will sign in.
// If not validated, the server will send status code 403 alongside with the message 'Not Authenticated'.

function validateCookie (req,res, next) {
    const { cookies } = req;
    if ('session_id' in cookies){
        console.log ("Session ID exists.");
        if (cookies.session_id === "123456"){
            next()
        }
        else {
            res.status(403).send('Not Authenticated')
        }
    }else {
        res.status(403).send('Not Authenticated')
    }}

// The route that signs in the client.

app.get("/signin", (req,res) => {
    res.cookie("session_id", "123456")
    res.status(200).send("Logged in.")
});

// A route that needs authenticated cookies, in order to be accessed by the client.

app.get("/protected", validateCookie, (req,res) => {
    res.status(200).send("You are authenticated.")
})

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})