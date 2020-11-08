const path = require('path')

module.exports = {
  entry: './main.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts' ],
    alias: {
      cli: path.resolve(__dirname, 'cli'),
      typings: path.resolve(__dirname, 'typings'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};