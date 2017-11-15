/**
 * @Date:   11.12.2017 01:25pm
 * @Filename: webpack.config.js
 * @Last modified time: 11.14.2017 10:21pm
 */
const path = require('path');
const webpack = require('webpack');
const pathToBundle = path.resolve(__dirname, 'dist');
// const nodeExternals = require('webpack-node-externals');
// const fs = require('fs');

module.exports = {
  entry: [
    // 'babel-polyfill',
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:1500',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './src/index.jsx',
  ],
  output: {
    path: pathToBundle,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  devtool: 'source-map',
  // devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 1500,
    stats: 'errors-only',
    open: false,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
