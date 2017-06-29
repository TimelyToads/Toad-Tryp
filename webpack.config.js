const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client/src');
const BUILD_DIR = path.resolve(__dirname, 'client/dist');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};
