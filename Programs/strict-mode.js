"use strict";

// This file demonstrates the use of strict mode in JavaScript. Strict mode is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions such as gaining access to the global object. It can be enabled by adding "use strict"; at the beginning of a script or a function.
console.log('Strict mode active?', (function() { return !this; })());

// 1. Variables Must Be Declared
x = 10; // ReferenceError
console.log("x:", x); // ReferenceError


// 2. this Behavior Changes
function test() {
  console.log("this:", this); // undefined
}
test();
// Non-strict → window
// Strict → undefined


// 3. No Duplicate Parameter Names
function sum(a, a) { // Error
return a;
}


// 4. Cannot Delete Variables, Functions, or Arguments
let a = 10;
delete a; // Error


// 5. Reserved Keywords Cannot Be Used as variable names
let public = 10; // Error
console.log("public:", public); // Error
// public, private, protected, interface, package, etc.


// 6. Assignment to Non-Writable Properties Fails
const obj = {};
Object.freeze(obj);
obj.a = 1; //  Error


// 7. Cannot Add Properties to Non-Extensible Objects
const obj2 = Object.preventExtensions({});
obj2.a = 1; // Error


//  8. eval() is Restricted
eval("var x = 10;");
console.log(x); // ReferenceError


// 9. arguments Object is Independent
function test2(a) {
  arguments[0] = 100;
  console.log(a); // still original value
}
test2(10);
// Non-strict → linked
// Strict → NOT linked


// 10. with Statement Not Allowed
with (Math) { // SyntaxError
  y = cos(2);
}


// 11. Function Declarations in Blocks Restricted
if (true) {
  function xyz() {} // Not allowed in strict (in older specs)
}


// 12. No Implicit Global Object Creation
function test3() {
z = 20; // Error
console.log("z:", z); // Error
}
test3();


// 13. NaN, Infinity, undefined are Read-Only
undefined = 5; // Error
console.log("undefined:", undefined); // still undefined
// Non strict → output undefined
// Strict → TypeError

// 14. Safer eval and arguments
// Cannot overwrite eval or arguments
let eval = 10; // Error
console.log("eval:", eval); // Error

// 15. Strict Mode Applies Automatically In:
// file.js
// import { sum } from "./utils.js";
// w = 10; // ReferenceError (strict mode applied automatically)

// All code inside a class is executed in strict mode automatically.
// class Test3 {
//   method() {
//     // strict mode auto
//   }
// }
