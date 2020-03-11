const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public/'),
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    noInfo: true,
    stats: 'minimal'
  }
})
