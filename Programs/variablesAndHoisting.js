// Let Keyword

let message; // Declaration, Memory is allocated 
message = 'Hello!'; // Initialization or Define a variable	
console.log(message); // shows the variable content

let message2 = 'Hello!'; // define the variable and assign the value
console.log(message2); // Hello!

//Blocked scope
if (true) {
let a = 10;
}
// console.log(a); // ReferenceError

let b;
console.log(b); // undefined

// Temporal Dead Zone, Hoisted but not initialized (TDZ)
console.log(x); // ReferenceError

let y = 10;
y = 20; // allowed
//  Error, Can not redeclare a variable with let in the same scope
// let y = 30; 
console.log(y); // 20

// Var Keyword

var x = 10;
var x = 20; // allowed
x = 30;     // allowed
console.log(x); // 30

// Hoisting Behavior
console.log(z); // undefined
var z = 10;
console.log(z); // 10


// Const Keyword

const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // error, can't reassign the constant!

// Uppercase const
// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

console.log(COLOR_RED); // #F00


// Hoisting
// Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (before code execution).
// Important: Only declarations are hoisted, not initializations.
// Function declarations are hoisted with their body, while variable declarations are hoisted without their initializations.
// Let and Const are hoisted but they are in Temporal Dead Zone (TDZ) until initialized unlike var.

console.log(x); // undefined
var x = 10;


console.log(x); // ReferenceError
let x = 10;

foo(); // Hello

function foo() {
  console.log("Hello");
}

foo2(); // TypeError: foo2 is not a function
console.log(foo2); // undefined, declaration is hoisted but not the initialization

var foo = function () {
  console.log("Hello");
};


foo3(); // TypeError: foo3 is not a function
console.log(foo3); // ReferenceError, declaration is hoisted but not the initialization

let foo3 = function () {
  console.log("Hello");
};