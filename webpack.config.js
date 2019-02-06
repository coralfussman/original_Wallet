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
          // for babel-loader 8.x | babel 7.x
          presets: ['@babel/env', '@babel/react']
          // vs. ['env', 'react'] for babel-loader 7.x | babel 6.x
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
    publicPath: '/build',
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
