
/**
 * PART 02 : simpleSum()
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

// function simpleSum(){
// 	//YOUR CODE HERE
//    //  -- also, you will need to write the functions for
//    //     remaining problems in the problem set
// }


var simpleSum= function(num1, num2){
  var add=num1 + num2;
  return add;
}
















// var simpleSum= function (num1, num2){
//   var sum= num1+ num2;
//   return sum;
// }


console.assert( simpleSum(8, 11) === 19 );
console.assert( simpleSum(4, 101) === 105 );
console.assert( simpleSum(2, 2) !== 5 );
