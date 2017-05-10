
// Part 10: loneSum()

// Given 3 integer values as arguments, return their sum.
// However, if one of the values is the same as another of the values,
// it does not count towards the sum.


var loneSum= function(num1, num2, num3){
if (num1 ==num2 && num3){
  return 0}
  if(num1=== num2){
num1=0;
return num3
} if (num2===num3){
  num2=0;
  return num1
} if (num1===num3){
  num1=0;
  return num2;
} else {
  return num1 + num2 + num3
}
}





















// var loneSum=function(val1, val2, val3){
//     if (val1=== val2 && val1===val3) {
//       return 0
//   } if (val1 === val3){
//       return val2
//   } if (val2 ===val3){
//       return val1
//   } else {
//       return val1 + val2 + val3
//   }
// }



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( loneSum(1,2,3) === 6)
console.assert( loneSum(11,9,5) === 25)
console.assert( loneSum(4,2,4) === 2)
console.assert( loneSum(13,8,8) === 13)
console.assert( loneSum(10,10,10) === 0)
