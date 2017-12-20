/**
 * @Date:   11.13.2017 07:23pm
 * @Filename: index.js
 * @Last modified time: 11.18.2017 11:49am
 */

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import Cat from '../db/schema';
import { youtube, ping } from './utils';

const app = express();
const port = process.env.PORT || 3500;




app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../dist')));


app.post('/api/youtube', youtube);

app.get('/api/ping', ping);

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});


var kitty = new Cat({ name: 'Zildjian', type: 'fluffykins' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
