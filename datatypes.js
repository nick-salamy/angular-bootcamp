"use strict";
// Type inference: type is explicitly stated
let lname = "John";
let fname;
fname = "Josh";
let newName = fname.toUpperCase();
console.log(newName);
// number declares an integer and float
let age;
age = 25;
let dob;
dob = "25";
console.log(dob);
//Type casting
let result = parseInt(dob);
console.log(result);
//Booleans
let isValid;
// isn't assigend with a value, throws error
// TS runs in strict mode, will throw error when trying to access
// variable that hasn't been defined
let valid = true;
console.log(valid);
// Arrays
// will store only strings in array
let list;
// Generics
let listTwo;
listTwo = [1, 2, 3, 4, 5];
// Assigns results with all numbers in array greater than 2
let results = listTwo.filter((num) => num > 2);
console.log(results);
// Returns the number if the number exists
let num = listTwo.find((num) => num === 2);
console.log(num);
// Calculates the sum by adding the left most element to the 
// element to its right, then adding the sum of those to to the 
// element to the right
let sum = listTwo.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
// Tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(30, 40);
console.log(swapNumbs);
