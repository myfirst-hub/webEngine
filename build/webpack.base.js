const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        'test': /\.(png|jpg|gif)$/,
        'use': [
            {
                'loader': 'url-loader?limit=8192&name=static/[name].[hash:8].[ext]'
            }
        ]
    },
    ]
  },
}
