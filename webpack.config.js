
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './apps/index.tsx',
  output: {
    path: './apps',
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    extensions: ['.web.js', '.js', '.json', '.ts', '.tsx', '.css'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'react-addons-css-transition-group': 'rc-css-transition-group'
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'apps'),
          path.resolve(__dirname, 'node_modules/plume2/dist'),
          path.resolve(__dirname, 'node_modules/preact-compat')
        ],
        options: {
          presets: ['es2015'],
        },
        exclude: /node_modules/,
        loader: 'ts-loader'
        //loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),

    new HtmlWebpackPlugin({
      dev: true,
      favicon: './favicon.ico',
      filename: 'index.html',
      template: './index.ejs'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
}