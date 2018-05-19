const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
