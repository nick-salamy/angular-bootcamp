// Type inference: type is explicitly stated
let lname = "John";

let fname : string;

fname = "Josh";

let newName = fname.toUpperCase();

console.log(newName);
// number declares an integer and float
let age : number;

age = 25;

let dob : string;

dob = "25";
console.log(dob);
//Type casting
let result = parseInt(dob);

console.log(result);

//Booleans
let isValid : boolean;
// isn't assigend with a value, throws error
// TS runs in strict mode, will throw error when trying to access
// variable that hasn't been defined

let valid : boolean = true;
console.log(valid);

// Arrays
// will store only strings in array
let list : string[]; 

// Generics
let listTwo : Array<number>;
listTwo = [1,2,3,4,5];

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

// Enums
// Const removes all type info from JS, use const if enum isn't
// used in production
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// Tuples
// Allow for combination of data types using tuples
// Less useful for angular
let swapNumbs : [firstNumber: number, secondNumber: number];
function swapNumbers(num1:number, num2:number) : [number,number] {
    return [num2, num1]
}
swapNumbs = swapNumbers(30, 40);
console.log(swapNumbs);