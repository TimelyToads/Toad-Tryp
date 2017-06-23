const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const ADDRESS = '127.0.0.1';
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, ADDRESS, () => {
  console.log('Toad Tryp server listening on port 3000.');
});
