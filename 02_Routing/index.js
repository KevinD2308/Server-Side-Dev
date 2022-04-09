const express = require('express');
const app = express();
const routes = require('./routes');

// Routes.
app.use('/', routes);

// Catch all and send 404.
app.use((req, res, next) => {
  res.sendStatus(404);
});

// Start the server.

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
