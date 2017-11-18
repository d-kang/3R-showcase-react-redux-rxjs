/**
 * @Date:   11.13.2017 07:23pm
 * @Filename: index.js
 * @Last modified time: 11.18.2017 10:36am
 */

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import fetch from 'node-fetch';
import YouTube from 'youtube-node';
import { YOUTUBE_API_KEY, CLIENT_ID } from './config/youtube-api';

const app = express();
const port = process.env.PORT || 3500;
const youTube = new YouTube();

youTube.setKey(YOUTUBE_API_KEY)

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/api/youtube', (req, res) => {
  fetch('')
  res.send('hi');
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
