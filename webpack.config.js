/**
 * @Date:   11.12.2017 01:25pm
 * @Filename: webpack.config.js
 * @Last modified time: 11.15.2017 08:27am
 */
const path = require('path');
const webpack = require('webpack');
const pathToBundle = path.resolve(__dirname, 'dist');
// const nodeExternals = require('webpack-node-externals');
// const fs = require('fs');

module.exports = {
  devtool: 'cheap-eval-source-map',
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
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
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
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
