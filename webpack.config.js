const path = require('path');

module.exports = {
  entry: [
    './assets/js/main.js',
    './assets/sass/styles.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  mode: 'development'
}