
/**
 * PART 01 : withMoreEnthusiam()
 * (DEMO)
 *
 * Write a function called addMoreEnthusiam that takes a string as
 * input and appends three exclamation marks to the end of the string.
 */


// DEMO
// YOU, the student, will write the function



var addMoreEnthusiam=function(inputString){
var excited= inputString+ "!!!"
return excited
}











// var addMoreEnthusiam=function(inputString){
// 	var wooo= inputString + "!!!"
// 	return wooo
// }






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var funcOutput1 = addMoreEnthusiam("I want pizza")
console.assert( funcOutput1  === "I want pizza!!!" );

var funcOutput2 = addMoreEnthusiam("Hey")
console.assert( funcOutput2 === "Hey!!!");
