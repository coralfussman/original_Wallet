const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/index.js'
  },
  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/build'
  }
};
