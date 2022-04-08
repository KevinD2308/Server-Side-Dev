const express = require ('express'); // Initializing Express.
const session = require ('express-session');
const app = express();

// Initializing Sessions.

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

// Specifying the view engine.

app.set('view engine', 'ejs');  

// Getting the view count which is equal to the amount of times the client has accessed the server.

app.get("/", function (req,res,next) {
    if (! req.session.viewCount) {
        req.session.viewCount = 1;
    } else {
        req.session.viewCount += 1;
    }
    res.render('index', {viewCount: req.session.viewCount});
})

// Starting the server on port 3000.

app.listen(3000, () => {
    console.log('Server running on port 3000.');
  });
