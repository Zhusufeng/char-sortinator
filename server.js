const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(express.static(__dirname + '/client'));

const tempStorage = [];

app.post('/sort', (req, res) => {
  const input = req.body.input;
  const sortedBody = input.split('').sort().join('');

  tempStorage.push(sortedBody);

  res.status(201).send({sortedBody});
});

app.listen(8123, () => {
  console.log('App listening on port 8123');
});