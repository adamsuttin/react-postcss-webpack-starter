const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader'],
      }
    ]
  }
};