const express = require('express');
const app = express();
const routes = require('./routes');

// routes
app.use('/', routes);

// catch all and send 404
app.use((req, res, next) => {
  res.sendStatus(404);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});
