const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../preview'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
});
