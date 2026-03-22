// In JavaScript, operators are special symbols used to perform operations on values (operands). For interviews, you should understand both types + tricky behaviors.

// Arithmetic Operators
// Used for mathematical calculations.
let a = 10, b = 3;
a + b  // 13
a - b  // 7
a * b  // 30
a / b  // 3.33
a % b  // 1 (remainder)
a ** b // 1000 (exponentiation)

// Interview tip:
// % is remainder, not true modulo (important for negative numbers).

// Assignment Operators
// Assign values to variables.
let x = 10;
x += 5; // 15
x -= 2; // 13
x *= 2; // 26
x /= 2; // 13
x %= 3; // 1

// Comparison Operators
// Return boolean (true/false).
5 == '5'   // true  (loose equality)
5 === '5'  // false (strict equality)
5 != '5'   // false
5 !== '5'  // true
10 > 5     // true
10 < 5     // false
'Z' > 'A'   // true 
'Glow' > 'Glee' // true
'Bee' > 'Be' //true

// Important:
// == → type conversion happens
// === → no type conversion (preferred in interviews)

// Logical Operators
// Used in conditions.
true && false  // false
true || false  // true
!true          // false

// Short-circuit behavior:
0 || "Hello"   // "Hello"
"Hi" && 10     // 10


// Bitwise Operators
// Work at binary level.
5 & 1  // 1
5 | 1  // 5
5 ^ 1  // 4
~5     // -6
5 << 1 // 10

// Rare in frontend but asked in interviews sometimes.

// Unary Operators
// Operate on one operand.
let y = 5;
+y   // 5 (convert to number)
-y   // -5 (invert sign)
++y  // 6 (pre-increment)
y++  // 6 (post-increment)

// Ternary Operator (Conditional)
// Short form of if-else.
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";

// Type Operators
typeof "hello"  // "string"
typeof 123      // "number"

"hello" instanceof String // false
// Tricky:
typeof null // "object"   (bug in JS)

// Equality Edge Cases (Important)
NaN == NaN        // false
Object.is(NaN, NaN) // true (fixes NaN comparison)
null == undefined // true (Null only loosely equals undefined)
null === undefined // false
[] == false       // true
{} == false       // false

// Special Operators
// Optional Chaining (?.)
let user = {};
user.address?.city  // undefined (no error)

// Nullish Coalescing (??)
let val = null ?? "default"; // "default"

// Difference:
0 || "default"   // "default"
0 ?? "default"   // 0


// Spread / Rest (...)
let arr = [1,2];
let newArr = [...arr, 3]; // [1,2,3]

// Comma Operator
let z = (1, 2, 3); // 3
