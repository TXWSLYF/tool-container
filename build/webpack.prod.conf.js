const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const pkg = require('../package.json');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: `${pkg.name}.min.js`,
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    // 暂时关闭代码压缩
    minimize: false,
  },
});
