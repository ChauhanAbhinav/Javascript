// Type Conversions
// Changing a value from one data type to another.

// 1. Implicit Conversion (Automatic) (Type Coercion)
// JavaScript automatically converts types when needed

console.log("5" + 2); // "52"
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN

// 2. Explicit Conversion (Manual)
// We can use built-in functions to convert types

console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(String(123));     // "123"
console.log((123).toString()); // "123"
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("hi")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Common Pitfalls
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log([] == false); // true 
console.log([2] + 1); // 21
console.log(null == undefined);  // true (Null only loosely equals undefined)
console.log(null === undefined); // false
console.log(Boolean("false")); // true 

