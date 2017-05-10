
// Part 07 : getMinimum()

// Write a function cthat will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).




var getMinimum= function(num1, num2, num3, num4){
  var lowest= 0
  if (num1 < num2 && num3 && num4){
    lowest= num1
  } else if (num2 < num3 && num4 && num1){
    lowest= num2
  } else if (num3 < num4 && num1 && num2){
    lowest=num3
  } else if (num4 < num1 && num2 && num3){
    lowest= num4
  } return lowest
}







// ******
// var getMinimum= function(num1, num2, num3, num4){
// if (num1 < num2 && num3 && num4) {
//   return num1
// }
//
// if (num2 < num3 && num4 && num1) {
//   return num2
// }
//
// if (num3 < num4 && num1 && num2) {
//   return num3
// }
//
// if (num4 < num1 && num2 && num3) {
//   return num4
// }
//
// }

//   if (num1 < num2) {
//     return num1
//   } else {
//     return num2;
//   }
//
//
//
//   if (num3 < num4){
//   return num3
// } else {return num4
// }
//
//
//   if (num1 < num3) {
//     return num1
//   } else {return num3
//   }
//
//
//   if (num1 < num4) {
//     return num1
//   } else {return num4
//   }
// }


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,12,-5) === -11 )
