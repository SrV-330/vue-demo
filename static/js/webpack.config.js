const path = require('path')
module.exports = {
  entry: './math.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
