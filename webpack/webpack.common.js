const path = require('path')
const WebpackBar = require('webpackbar')

module.exports = {
  // ENTRY
  entry: './src/app.js',
  // MODULES
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ],
        test: /\.scss$/
      },
      {
        loader: 'file-loader',
        test: /\.(gif|png|jpe?g|svg)$/i
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  // OUTPUT
  output: {
    // __dirname targets root path of the project
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/'
  },
  // PLUGINS
  plugins: [new WebpackBar()]
}
