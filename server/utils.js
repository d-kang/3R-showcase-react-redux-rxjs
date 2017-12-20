import YouTube from 'youtube-node';
import { YOUTUBE_API_KEY } from './config/youtube-api';

const youTube = new YouTube();
youTube.setKey(YOUTUBE_API_KEY);

export const youtube = (req, res) => {
  console.log('hi from youtube')
  console.log('req.body', req.body);

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



// var kitty = new Cat({ name: 'Zildjian', type: 'fluffykins' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });
