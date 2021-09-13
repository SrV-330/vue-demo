const {add,mul} =require("./mathUtils");
function testLog(){
  console.log(add(1,2));
  console.log(mul(2,3));
}

module.exports={
  testLog
}