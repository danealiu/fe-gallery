/**
 * Created by malin on 15/4/27.
 */
require('babel-polyfill');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log("当前环境" + process.env.NODE_ENV);
module.exports = {
  entry: {
    'hotcss': './js/lib/hotcss.js',
    'fullpage': './js/lib/fullpage.js',
    'index': ['./js/lib/zepto.min.js', './js/index.js']
  },
  output: {
    path: './build/js',
    filename: '[name].js?[chunkhash]'
  },

  context: __dirname + '/src',
  module: {
    loaders: [
      //{test: /\.js$/, loader: 'jsx-loader?harmony'}, // loaders can take parameters as a querystring
      //{test: /\.jsx$/, loaders: ['jsx?harmony']},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|src\/js\/lib)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          plugins: ['transform-runtime', 'transform-object-assign'],
          presets: ['es2015', 'stage-0']
        }
      },
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {test: /\.png$/, loader: 'url-loader?limit=8192&name=../[path][name].[ext]?[hash]'},
      {test: /\.jpg$/, loader: 'file-loader?&name=../[path][name].[ext]?[hash]'},
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style", 'css!sass')
      },
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx', '.json', 'cjsx', '.coffee', 'css', 'less']
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css?[contenthash]')
  ]
};