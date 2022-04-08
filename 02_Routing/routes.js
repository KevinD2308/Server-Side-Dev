const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get request from /');
});

router.get('/hello/world', (req, res) => {
  res.send('get request from /hello/world');
});

router.get('/hello', (req, res) => {
  res.send('get request from /hello');
});

router.get(['/red','/green','/blue'], (req, res) => {
  res.send('get request from /red or /green or /blue');
});

module.exports = router;
