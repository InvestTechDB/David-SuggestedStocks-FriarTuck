var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        { 
          test: [/\.jsx$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };