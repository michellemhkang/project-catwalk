const path = require('path');

module.exports = {
  entry: './path/to/my/entry/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
mode:'development',
module: {
  rules: [
    {
      test: /\.m?js||jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
}
}
