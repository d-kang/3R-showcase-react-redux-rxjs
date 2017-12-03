/**
 * @Date:   11.12.2017 01:25pm
 * @Filename: webpack.config.js
 * @Last modified time: 11.29.2017 05:56pm
 */
const path = require('path');
const webpack = require('webpack');
const pathToBundle = path.resolve(__dirname, 'dist');
// const nodeExternals = require('webpack-node-externals');
// const fs = require('fs');

module.exports = {
  devtool: 'source-map',
  // devtool: 'cheap-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    './src/index.tsx',
  ],
  output: {
    path: pathToBundle,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //     },
      //   ],
      // },
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
