
/**
 * PART 06: robustSum()
 *
 * Modify your simpleSum function so that if either of its
 * inputs is not a number, it will return the boolean `false`
 */


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var robustSum= function(num1, num2) {
  if (typeof num1 !== typeof 5) {
    return false
  } else if (typeof num2 !== typeof 5) {
    return false
}  else {
    var result= num1 + num2
    return result
}
}

// (var result= num1 + num2) {
//   return result);
// }
// }

console.assert( robustSum(867, 5309)   === 6176);
console.assert( robustSum('867', 5309) === false);
console.assert( robustSum(5, true)     === false);
