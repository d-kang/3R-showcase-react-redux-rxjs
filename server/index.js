/**
 * @Author: wiz
 * @Date:   11.13.2017 07:23pm
 * @Filename: index.js
 * @Last modified by:   wiz
 * @Last modified time: 11.18.2017 09:50am
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

console.log('hello');
const app = express();

const port = process.env.PORT || 3500;


const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '../dist')));


const pathToFile = path.resolve(__dirname, '../dist', 'index.html')
console.log('pathToFile', pathToFile);

const joined = path.join(process.env.PWD, 'dist', 'index.html')
console.log('joined', joined);


app.get('/*', (req, res) => {
  console.log('req.method', req.method);
  console.log('req.url', req.url);

  res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
});




app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
