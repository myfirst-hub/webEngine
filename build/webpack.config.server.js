const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'),
  },
  externals: Object.keys(require('../package.json').dependencies),
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        'test': /\.css$/,
        'loader': ['isomorphic-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        'test': /\.less$/,
        'loader': ['isomorphic-style-loader', 'css-loader', {
          'loader': 'less-loader',
          'options': {
            'javascriptEnabled': true,
          }
        }],
      },
    ]
  },
})
