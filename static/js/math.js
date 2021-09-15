/*
 * @Author: your name
 * @Date: 2021-09-15 19:09:24
 * @LastEditTime: 2021-09-15 20:38:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\static\js\math.js
 */
const {
  add,
  mul
} = require('./mathUtils')

function testLog () {
  console.log(add(1, 2))
  console.log(mul(2, 3))
}

module.exports = {
  testLog
}
