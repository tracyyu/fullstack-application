const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './client/dist/bundle.js',
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' }],
  },
};