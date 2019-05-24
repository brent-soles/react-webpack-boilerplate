const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  // Module specifies loaders for
  // respective components
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // The babel loader will look for the
      // specified .babelrc file to
      // see which babel specific loaders
      // should be used
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}