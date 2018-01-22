const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));

app.listen(8123, () => {
  console.log('App listening on port 8123');
});