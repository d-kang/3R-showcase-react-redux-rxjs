import YouTube from 'youtube-node';
import { YOUTUBE_API_KEY } from './config/youtube-api';
import Playlist from '../db/schema';

const youTube = new YouTube();
youTube.setKey(YOUTUBE_API_KEY);

export const youtube = (req, res) => {
  const { payload } = req.body;
  youTube.search(payload, 15, (err, result) => {
    if (err) {
      console.error('err>>>', err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const ping = (req, res) => {
  setTimeout(() => res.send('hi'), 3500);
};

export const addPlaylist = (req, res) => {
  // const { payload } = req.body;
  const payload = { name: 'Hello', type: 'world' };
  const title = new Playlist(payload);
  title.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(payload);
    }
  });
};
