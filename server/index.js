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
// import fetch from 'node-fetch';
import YouTube from 'youtube-node';
import { YOUTUBE_API_KEY } from './config/youtube-api';
const app = express();
const port = process.env.PORT || 3500;
const youTube = new YouTube();
import Cat from '../db/schema';
youTube.setKey(YOUTUBE_API_KEY);

app.use(cors());
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false })
);

// app.use((req, res, next) => {
//   morgan(':method :url :status :res[content-length] - :response-time ms')(req, res, next);
// });
//
// app.use((req, res, next) => {
//   bodyParser.urlencoded({ extended: false })(req, res, next);
// });
// app.use((req, res, next) => {
//   bodyParser.json()(req, res, next);
// });


app.use(express.static(path.resolve(__dirname, '../dist')));

app.post('/api/youtube', (req, res) => {
  const { payload } = req.body;
  youTube.search(payload, 15, (err, result) => {
    if (err) {
      console.error('err>>>', err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/api/ping', (req, res) => {
  setTimeout(() => res.send('hi'), 3500);
});

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
