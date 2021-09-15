/*
 * @Author: your name
 * @Date: 2021-09-15 19:09:24
 * @LastEditTime: 2021-09-15 20:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\static\js\webpack.config.js
 */
const path = require('path')
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}
