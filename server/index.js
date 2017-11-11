const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(__dirname + '/../dist'));

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
