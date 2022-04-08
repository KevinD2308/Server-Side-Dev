const express = require('express')
const app = express();

// Status code 200 is sent when the request has succeeded. 
// This would apply when the client would access the main page of the server.

app.get('/', (req, res) => {
    res.statusCode=200;
    res.send("Hello World")
})

// Status code 204 is sent when the server fulfills the request but there is nothing to show.
// This request does not change the view from that which caused the request to be sent.

app.get('/nocontent', (req, res) => {
    res.statusCode=204;
    res.send()
})

// Status code is sent when the server does not find anything matching the Request-URL.

app.get('*', (req, res) => {
    res.statusCode=404;
    res.send("Page not found")
})

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  