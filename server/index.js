/**
 * @Date:   11.15.2017 05:36pm
 * @Filename: index.js
 * @Last modified time: 11.15.2017 06:40pm
 */

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
// import open from 'open';
import logger from 'morgan';



const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open(`http://localhost:${port}`);
    console.log(`http://localhost:${port}`);
  }
});
