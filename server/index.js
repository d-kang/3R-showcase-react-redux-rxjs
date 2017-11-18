/**
 * @Date:   11.13.2017 07:23pm
 * @Filename: index.js
 * @Last modified time: 11.18.2017 10:16am
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3500;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
