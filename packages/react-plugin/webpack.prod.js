const baseConfig = require('./webpack.base')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const devtool = 'source-map'
const plugins = [
    new UglifyJSPlugin({
      sourceMap: true
    })
]

process.env.BABEL_ENV = 'production';

module.exports = {
  ...baseConfig,
  devtool,
  plugins
};
