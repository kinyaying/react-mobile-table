const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = {
  entry: path.join(__dirname, './src/app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(png|jpg|svg|ttf)$/, use: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mobx测试',
      template: './src/index.html'
    }),
    new DashboardPlugin()
  ],
  devtool: 'source-map'
}
