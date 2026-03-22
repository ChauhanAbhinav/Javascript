// A function is a reusable block of code.
// Variables declared outside of any function, such as the outer userName in the code above, are called global.
// Global variables are visible from any function (unless shadowed by locals).

// Function Declaration
function greet(name) {
  return "Hello " + name;
}
greet("Abhinav");
// Hoisted (can call before definition)

// Function Expression
const add = function(a, b) {
  return a + b;
};
// Not hoisted like declaration
// Stored in variable

// Named Function Expression
const fn = function myFunc() {
  console.log("Hello");
};

// Name usable inside function only

// Arrow Function (ES6)
const add2 = (a, b) => a + b;
// No this (lexical this)
// No arguments
// Cannot be used as constructor
// Anonymous Function
setTimeout(function() {
  console.log("Hello");
}, 1000);

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("I run immediately");
})();
// Avoid global scope pollution

// Generator Function
function* gen() {
  yield 1;
  yield 3;
}
const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }

// Async Function
async function fetchData() {
  return "Hello";
}
// Always return promise

// Higher-Order Function
// Function that takes function as argument OR Returns function
function greet(fn) {
  fn();
}
greet(() => console.log("Hi"));

// Callback Function
function process(cb) {
  cb();
}
process(() => console.log("Done"));

// Pure Function
function add(a, b) {
  return a + b;
}
// No side effects, same output for same input

// Recursive Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
function execute(fn) {
  fn();
}
execute(() => console.log("Running"));



// Key Concepts
// Function Hoisting
sayHi();

function sayHi() {
  console.log("Hi");
}
// Function hoisted with its body, can call before definition

sayHi();

var sayHi = function() {
  console.log("Hi");
};
// Only variable declaration hoisted, not assignment, so sayHi is undefined at call time

// this Behavior (Critical)
const obj = {
  name: "JS",
  normal: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.normal(); // "JS"
obj.arrow();  // undefined