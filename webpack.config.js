const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    //! without this module object, I was receiving the error below:
    // Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
    //* I copied the error from terminal and looked on google until I saw a github issue resembling my same issue and noticed there was a module object wrapping my test key
    // https://github.com/webpack-contrib/jshint-loader/issues/48
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
