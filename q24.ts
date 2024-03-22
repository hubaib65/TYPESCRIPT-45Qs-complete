// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array




//equal or inequal

let myname = "hubaib"
console.log(myname == "hubaib");
console.log(myname !== "hubaib");

//lower case

let myname1 = "HUBAIB"
console.log(myname1 == "hubaib");
console.log(myname1 !== "hubaib");

//numeric 

let mynumber = 10
console.log(mynumber == 10);
console.log(mynumber !== 10);
console.log(mynumber > 5);
console.log(mynumber < 5);
console.log(mynumber >= 5);
console.log(mynumber <= 5);

//and & .......... or |

let num1 = 10; 
let num2 = 5;
console.log(num1 == 10 && num2 == 5);
console.log(num1 == 10 && num2 == 10);
console.log(num1 == 10 || num2 == 5);
console.log(num1 == 10 || num2 == 10);
console.log(num1 == 8 && num2 == 7);

//array
let data1 = [1, 2, 3, 4, 5]
//string
let data2 = "hubaib"
console.log(Array.isArray(data1));
console.log(Array.isArray(data2));
