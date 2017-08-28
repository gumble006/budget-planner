const express = require('express');
const path = require('path');
const saveFile = require('../server/csv/saveFile');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '/../')));
app.use(bodyParser.json());

app.post('/save', saveFile);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

const server = app.listen(port, () => { 
  console.log(`@@@server started on ${port}@@@`);
});

module.exports = server;