
// Part 05: isNegative()

// Write a function called isNegative that will tell
// whether a number is negative or not.



var isNegative= function(num){
  if (num >= 0){
    return false
  } else {
    return true
  }
}





















// var isNegative= function(number){
//   var bool=false;
//   if (number < 0){
//     bool=true
//   } return bool
// }





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(10) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-999) === true )
