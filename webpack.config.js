const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');
const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: [".js", ".jsx"],
          enforceExtension: false
        },
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        },
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]

      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(jpe?g)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};