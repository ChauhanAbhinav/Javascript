// JavaScript has a dynamic type system. This means that the same variable can be used to hold values of different types at different times during the execution of a program. The typeof operator is used to determine the type of a value.
// The typeof operator returns a string indicating the type of the unevaluated operand. The possible return values are:
// There are 7 basic data types (Primitive) and one Object (Array and Object) (Non Primitive, reference) in JavaScript.
// "undefined", "boolean", "number", "bigint", "string", "symbol", "undefined", and "object"

console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"

console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"
console.log(typeof null); // "object", That’s an officially recognized error in typeof
console.log(typeof NaN); // “number”
console.log(typeof alert); // "function"
console.log(typeof {}); // “object”
console.log(typeof []); // “object”
console.log(typeof Array); // "function"
console.log(typeof function(){}); // "function"
//There’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function"

let x;
console.log(typeof x); // "undefined", uninitialize variable
console.log(typeof y); // "undefined", undeclared variable

class A {}
console.log(typeof A); // "function"
console.log(typeof document.all); // "undefined" 
 
