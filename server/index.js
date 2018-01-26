import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import { youtube, ping, addPlaylist } from './utils';

const app = express();
const port = process.env.PORT || 3100;

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../dist')));


app.post('/api/youtube', youtube);

app.get('/api/ping', ping);

app.get('/api/playlist', addPlaylist);

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
