const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

const tempStorage = [];

app.post('/sort', (req, res) => {
  console.log(req.body); // 'cba';

  const sortedBody = req.body.sort();
  tempStorage.push(sortedBody);

  res.status(201).send(sortedBody);
});

app.listen(8123, () => {
  console.log('App listening on port 8123');
});