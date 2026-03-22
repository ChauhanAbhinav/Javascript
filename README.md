# JavaScript Tutorials & Interview Preparation

**Author:** Abhinav Chauhan  
**Date:** 19 March 2026  

---

## Table of Contents

1. Introduction to Java Script
2. Code Structure
3. The modern mode, "use strict"
4. Variable
5. Hoisting
6. Global Objects in JavaScript
7. Data Types
8. Type Conversions
9. Type Of Operators
10. Conditional branching: if, '?'
11. Closure
12. Function
13. Garbage collection
14. Constructor function
15. Iterators
16. Maps and Sets
17. Prototype inheritance
18. Class
19. Modules
20. Proxy and Targets
21. Best Practices
22. Conclusion
23. Suggested Next Topics
24. Contribute
25. License  

---


## 1. Introduction

### What is JavaScript?
JavaScript is a programming language based on the ECMAScript standard and runs in browsers and servers like Node.js.

### Why is it called JavaScript?
When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine. The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”. For example:
V8 – in Chrome, Opera and Edge, SpiderMonkey – in Firefox.

### How do engines work?
Engines are complicated. But the basics are easy. The engine (embedded if it’s a browser) reads (“parses”) the script. Then it converts (“compiles”) the script to machine code. And then the machine code runs, pretty fast.

Code → Parsing → AST → Compilation → Execution
Ex: let x = 10;

#### 1. Code (Input):
let x = 10;

#### 2. Parsing to Abstract Syntax Tree: 2 Step Process:

##### (A). Lexical Analysis (Tokenization) : Conversion into tokens:
let | x | = | 10 | + | 20 | ;
let → keyword, x → identifier, 10 → number

##### (B) Syntax Analysis: is this code grammatically correct?
let = x 10; // Syntax Error

#### 3. AST (Abstract Syntax Tree)

VariableDeclaration
 ├── Identifier: x
 └── Literal: 10

Used for: Code optimization, Debugging, Tools like Babel, ESLint, Frameworks (React, Angular).

#### 4. Compilation (JIT) : Modern engines use JIT (Just-In-Time compilation)
Converts AST → optimized machine-like code (Improves performance)

JavaScript uses both JIT(Optimizes code before execution) and interpreter(runs line by line).
Converts JS → machine code → Executes with the help of memory (Heap & Stack)

#### 5. Execution:
Memory is allocated, Execution context created, Code runs line by line.

### Types of compilers

#### AOT (Ahead-Of-Time Compiler)
Compiles code before execution, Fast execution, Longer compile time.
Output: machine code or binary
Example: C, C++

#### JIT (Just-In-Time Compiler)
Compiles code during execution, Used by engines like V8, Faster than interpretation, Optimizes hot code, Slight startup delay.
Interpreter (Not exactly compiler but related).
Executes code line-by-line, JavaScript initially behaves like this, No compile step, Slower performance.

#### Transpiler (Source-to-Source Compiler)
Converts one language → another high-level language

Example: TypeScript → JavaScript, Babel (ES6 → ES5)

#### Quick Comparison:

Type		When Compiled	Speed		Example

AOT		Before run		Fast		C, C++

JIT		During run		Fast		V8

Interpreter	Line-by-line		Slow		Python (basic)

Transpiler	Before run		Depends	TypeScript


### What can in-browser JavaScript do?

Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.

JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.


## 2. Code structure

The building blocks of code.

### Statements

Statements are syntax constructs and commands that perform actions.
alert('Hello, world!'), which shows the message “Hello, world!”.

We can have as many statements in our code as we want. Statements can be separated with a semicolon.
alert('Hello');
alert('World');

In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”! There are cases when a newline does not mean a semicolon. For example:

alert(3 +
1
+ 2);
The code outputs 6 because JavaScript does not insert semicolons here.
Ex:
alert("Hello")
[1, 2].forEach(alert);

If we run this code, only the first Hello shows and then error, that’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

### Comments
As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.

// This comment occupies a line of its own
alert('Hello');
alert('World'); // This comment follows the statement
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');

Note: 
Nested comments are not supported! Such code will die with an error:
/*
  /* nested comment ?!? */
*/
alert( 'World' ); 


## 3. The modern mode, "use strict"
This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".

alert("some code");
// "use strict" below is ignored--it must be at the top
"use strict";
// strict mode is not activated

Note: There’s no way to cancel use strict

Rules: 
1. Variables Must Be Declared
"use strict";
x = 10; // ReferenceError
2. this Behavior Changes
function test() {
  console.log(this); // undefined
}
Non-strict → window
Strict → undefined
3. No Duplicate Parameter Names
function sum(a, a) { // Error
return a;
}
4. Cannot Delete Variables, Functions, or Arguments
let x = 10;
delete x; // Error
5. Reserved Keywords Cannot Be Used
let public = 10; // Error
public, private, protected, interface, package, etc.
6. Assignment to Non-Writable Properties Fails
const obj = {};
Object.freeze(obj);
obj.a = 1; //  Error
7. Cannot Add Properties to Non-Extensible Objects
const obj = Object.preventExtensions({});
obj.a = 1; // Error
8. eval() is Restricted
eval("var x = 10;");
console.log(x); // ReferenceError
9. arguments Object is Independent
function test(a) {
  arguments[0] = 100;
  console.log(a); // still original value
}
Non-strict → linked
Strict → NOT linked

10. with Statement Not Allowed
with (Math) { // SyntaxError
  x = cos(2);
}
11. Function Declarations in Blocks Restricted
if (true) {
  function test() {} // Not allowed in strict (in older specs)
}
12. No Implicit Global Object Creation
function test() {
y = 20; // Error
}
13. NaN, Infinity, undefined are Read-Only
undefined = 5; // Error
14. Safer eval and arguments
Cannot overwrite eval or arguments
let eval = 10; // Error
15. Strict Mode Applies Automatically In:
// file.js
import { sum } from "./utils.js";
x = 10; // ReferenceError (strict mode applied automatically)
All code inside a class is executed in strict mode automatically.
class Test {
  method() {
    // strict mode auto
  }
}


## 4. Variable
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.	
To create a variable in JavaScript, use the let keyword.

let message; // Declaration, Memory is allocated 
message = 'Hello!'; // Initialization or Define a variable	
alert(message); // shows the variable content

let message = 'Hello!'; // define the variable and assign the value
alert(message); // Hello!

### Let Keyword

let x = 10;
x = 20; // allowed
let x = 30; //  Error

Block-scoped { }
Cannot be re-declared in same scope
Can be updated
Hoisted but not initialized (TDZ)

#### Block Scope:
if (true) {
let a = 10;
}
console.log(a); // ReferenceError

#### Temporal Dead Zone:
console.log(x); // ReferenceError
let x = 10;

### Var Keyword
var x = 10;
var x = 20; // allowed
x = 30;     // allowed

Function-scoped
Can be re-declared
Can be updated
Hoisted and initialized with undefined

#### Hoisting Behavior: 
console.log(a); // undefined
var a = 10;

### Const Keyword
To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

#### Uppercase const
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.


## 5. Hoisting
Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (before code execution).
Important: Only declarations are hoisted, not initializations.
Function declarations are hoisted with their body, while variable declarations are hoisted without their initializations.
Let and Const are hoisted but they are in Temporal Dead Zone (TDZ) until initialized unlike var.

console.log(x); // undefined
var x = 10;

Internal Interpretation:
var x;          // hoisted declaration
console.log(x); // undefined
x = 10;         // initialization

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
console.log(foo3); // ReferenceError, declaration is hoisted but not the initialization(TDZ)

let foo3 = function () {
  console.log("Hello");
};

### Important conclusions:
Let and const are blocked scoped
Var are functional scoped
Let and const can not be redeclared but var can be redeclared
Let and const are hoisted but are not initialized and are in TDZ (if used before initialization) -> Reference error
Var are hoisted but initialized as undefined
Function are fully hoisted with their definition and are hoisted first then let var const
Let and var can access outer scope variable inside inner scope (either blocked or functional) until redeclared inside scope
Priority Order-> Function > var > let/const (TDZ) 


## 6. Global Objects in JavaScript
A global object is a special object that is available everywhere in your JavaScript code. It provides built-in functions, variables, and APIs.
In browsers → window
In Node.js → global
Standard (modern JS) → globalThis

Note: this = module.exports ( {} ), NOT the global object

In Browser: var attached to global window objects
var x = 10;
let y = 20;
console.log(window.x); // 10
console.log(window.y); // undefined

In NodeJS
var x = 10;
let y = 20;
this.z = 30;
globalThis.z = 40;

console.log(this.x); // undefined
console.log(this.y); // undefined
console.log(this.z); // 30 
console.log(globalThis.z); // 40

function a(){
    console.log(this.z) // 40, , this === globalThis // true in non strict mode
    console.log(globalThis.z); // 40
}
a()

### Conclusion:
this keyword is module.exports not global object in nodejs but it is in global in browser


## 7. Data types
A value in JavaScript is always of a certain type. For example, a string or a number. There are 7 basic data types (Primitive) and one Object (Array and Object) (Non Primitive, reference) in JavaScript.
JavaScript is called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

// no error
let message = "hello";
message = 123456;

### Primitive Data Types
These are immutable and stored by value.

#### Number
The number type represents both integer and floating point numbers.
let age = 25;
let price = 99.99;

#### BigInt
Outside the safer integer range ±(2^53-1)
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

#### String
Sequence of characters

#### Boolean
Only true or false
let isActive = true;

#### Undefined
let x;
console.log(x); // undefined

#### Null
let y = null;
Represents intentional empty value

#### Symbol
let id = Symbol("unique");
Used for unique identifiers

### Non Primitive Data Types
Stored by reference (memory address)

#### Object
let user = {
  name: "Abhinav",
  age: 25
};

#### Array
let arr = [1, 2, 3];
Note: Arrays are objects

### TypeOf Operator

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object", That’s an officially recognized error in typeof
typeof NaN // “number”
typeof alert // "function"
typeof {} // “object”
typeof [] // “object”
typeof Array // "function"
typeof function(){} // "function"

let x;
typeof x // "undefined", uninitialize variable
typeof y // "undefined", undeclared variable

class A {}
console.log(typeof A); // "function"
console.log(typeof document.all); // "undefined" 
There’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function"

console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
Number.isNaN(NaN); // true

The void operator always returns undefined, no matter what the value is

### Copy By Value:
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 

### Copy By Reference:
let obj1 = { name: "A" };
let obj2 = obj1;
obj2.name = "B";

console.log(obj1.name); // “B”

### Shallow Copy
Copies only top-level properties, and changes original values.
Spread operator does NOT create deep copy,  It only copies one level deep
Use spread operator and Object.assign

let obj1 = { name: "A", address: { city: "Delhi" } };
let obj2 = { ...obj1 };
console.log(obj1, obj2)
obj2.name = "B"; // separate
obj2.address.city = "Jaipur"; //  affects original obj1
console.log(obj1, obj2)
obj1.name = "C"; // separate
obj1.address.city = "Mumbai"; // affects obj2
console.log(obj1, obj2)

### Deep Copy
Copies everything (nested objects too) and original not affected at all level
let obj2 = JSON.parse(JSON.stringify(obj1));
let obj2 = structuredClone(obj1);
Ex:
let obj1 = {
  name: "A",
  age: 25,
  address: {
    city: "Jaipur",
    state: "Rajasthan",
    location: {
      pincode: 302001,
      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      }
    }
  }
};

let obj2 = structuredClone(obj1);

console.log("obj1->",JSON.stringify(obj1))
console.log("obj2->",JSON.stringify(obj2))

obj2.name = "B"; 
obj2.address.city = "Kolkata";
obj2.address.location.pincode = 202030
obj2.address.location.coordinates.lat = 20.89

console.log("obj1->",JSON.stringify(obj1))
console.log("obj2->",JSON.stringify(obj2))

obj1.name = "C";
obj1.address.city = "Mumbai";
obj1.address.location.pincode = 903023
obj1.address.location.coordinates.lat = 90.89

console.log("obj1->",JSON.stringify(obj1))
console.log("obj2->",JSON.stringify(obj2))


## 8. Type Conversions
Changing a value from one data type to another.

### 1. Implicit Conversion (Automatic) (Type Coercion)
JavaScript automatically converts types when needed

console.log("5" + 2); // "52"
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN

### 2. Explicit Conversion (Manual)
Developer converts types manually

Number("123"); // 123
Number("abc"); // NaN
Number(true); // 1
Number(null); // 0
Number(undefined); // NaN
String(123);     // "123"
(123).toString(); // "123"
Boolean(1);   // true
Boolean(0);   // false
Boolean("");  // false
Boolean("hi"); // true
Boolean(null); // false

#### Common Pitfall
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log([] == false); // true
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(Boolean("false")); // true 

Ex - 
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]" or 0 (in some cases)

Conclusion:
+ is special in JavaScript:, If any operand is a string → concatenation
Otherwise (-, *, /:) → numeric addition, Always convert values to number
[ ] -> empty string (“”)
[1] → "1" → 1
{} -> [Object Object], sometimes as block, sometime as reference
console.log([] + []); // “”
console.log([] + {}); // [Object Object]
console.log({} + []); // 0
console.log({} == {}); // false, object compared by reference

+ unary operator → converts to number
console.log(+"123");
console.log(+"abc");
! → convert to boolean
null only loosely equals undefined
console.log(null == 0); // false
console.log(0 == '0'); // true
console.log(0 == ''); // true
console.log('0' == ''); // false, no type conversion
console.log([] == ''); // true
console.log([] == 0); // true
console.log('' == 0); // true

valueOf() and toString() in JavaScript
Both are built-in methods used when JavaScript tries to convert an object into a primitive value (number or string).

let obj = {
  valueOf() { return 10; },
  toString() { return "20"; }
};
console.log(obj + 5); // 15

ValueOf Fails
let obj = {
  valueOf() { return {}; }, // not primitive
  toString() { return "20"; }
};

console.log(obj + 5); // "205"


## 9. Type Of Operators
In JavaScript, operators are special symbols used to perform operations on values (operands). For interviews, you should understand both types + tricky behaviors.

### Arithmetic Operators
Used for mathematical calculations.
let a = 10, b = 3;
a + b  // 13
a - b  // 7
a * b  // 30
a / b  // 3.33
a % b  // 1 (remainder)
a ** b // 1000 (exponentiation)

Interview tip:
% is remainder, not true modulo (important for negative numbers).
Assignment Operators
Assign values to variables.
let x = 10;
x += 5; // 15
x -= 2; // 13
x *= 2; // 26
x /= 2; // 13
x %= 3; // 1

### Comparison Operators
Return boolean (true/false).
5 == '5'   // true  (loose equality)
5 === '5'  // false (strict equality)
5 != '5'   // false
5 !== '5'  // true
10 > 5     // true
10 < 5     // false
'Z' > 'A'   // true 
'Glow' > 'Glee' // true
'Bee' > 'Be' //true
Important:
== → type conversion happens
=== → no type conversion (preferred in interviews)

### Logical Operators
Used in conditions, manipulate boolean values only.
true && false  // false
true || false  // true
!true          // false

Short-circuit behavior:
0 || "Hello"   // "Hello"
"Hi" && 10     // 10

### Bitwise Operators
Work at binary level.
5 & 1  // 1
5 | 1  // 5
5 ^ 1  // 4
~5     // -6
5 << 1 // 10
Rare in frontend but asked in interviews sometimes.
Unary Operators
Operate on one operand.
let x = 5;
+x   // 5 (convert to number)
-x   // -5
++x  // 6 (pre-increment)
x++  // 6 (post-increment)

### Ternary Operator (Conditional)
Short form of if-else.
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
Type Operators
typeof "hello"  // "string"
typeof 123      // "number"

"hello" instanceof String // false
Tricky:
typeof null // "object"   (bug in JS)

#### Equality Edge Cases (Important)
NaN == NaN        // false
Object.is(NaN, NaN) // true
null == undefined // true
null === undefined // false
[] == false       // true
{} == false       // false

### Special Operators
Optional Chaining (?.)
let user = {};
user.address?.city  // undefined (no error)
Nullish Coalescing (??)
let val = null ?? "default"; // "default"

Difference:
0 || "default"   // "default"
0 ?? "default"   // 0

Spread / Rest (...)
let arr = [1,2];
let newArr = [...arr, 3]; // [1,2,3]

Comma Operator
let x = (1, 2, 3); // 3


#### Binary Numbers and Operations
What are Binary Numbers?
Binary is a base-2 number system, meaning it uses only: 0 and 1
Each position represents a power of 2:

Binary		Power of 2	Value
1		2⁰		1
10		2¹		2
100		2²		4
1000		2³		8

Example:
Binary 1011 =
1×2³ + 0×2² + 1×2¹ + 1×2⁰
= 8 + 0 + 2 + 1
= 11 (decimal)

### Convert to binary
Remainder method: To convert decimal number to binary, divide by 2 continuously until the quotient is 0, then list the remainder from bottom to top.
Divide 4 by 2: 
with a remainder of 0.
Divide the quotient 2 by 2: 
with a remainder of 0.
Divide the quotient 1 by 2: 
with a remainder of 1.
Stop when the quotient is 0.
Read the remainders from bottom to top: 1, 0, 0, which equals 100

Power method: 
Binary uses powers of 2 to represent 4: 
Do we need a 4? Yes (1).
Do we need a 2? No (0).
Do we need a 1? No (0).
Result: 100. 
4= 1x 2^2 + 0x2^1 + 0x2^0

### Binary Addition
Rules:
A	B	Result	Carry
0	0	0	0
0	1	1	0
1	0	1	0
1	1	0	1

 1011
+ 1101
------
 11000
### Binary Subtraction
Rules:
A	B	Result
0	0	0
1	0	1
1	1	0
0	1	1 (borrow)

1011
- 0101
------
 0110
B### inary Multiplication
Same as decimal but simpler:
1 × 1 = 1
1 × 0 = 0
Example:
   101
×   11
-------
   101
+ 1010
-------
  1111

### Binary Division
Works like a long division.
Example:
1010 ÷ 10 = 101

### Bitwise Operations
#### OR (|)
At least one is 1 to get 1
1010
1100
----
1000

#### AND (&)
Both must be 1 to get 1
1010
1100
----
1000

#### XOR (^)
Different bits → 1


1010
1100
----
0110

#### NOT (~)
Flips bits
1010 → 0101

#### Left Shift (<<)
Multiply by 2
5 << 1 = 10
(0101 → 1010)
Shift bits left
Add 0 at end

#### Right Shift (>>)
Divide by 2
10 >> 1 = 5
(1010 → 0101)
Shift bits right
Remove last bit

### JavaScript Examples
console.log(5 & 1);  // 1
console.log(5 | 1);  // 5
console.log(5 ^ 1);  // 4
console.log(~5);     // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2


## 10. Conditional branching: if, '?'
Sometimes, we need to perform different actions based on different conditions.
To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

### The “if” statement
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:
let condition = true;
if(condition) {
console.log(“condition is true”)
} else {
console.log(“condition is false”)
}

Example:
if ("0") {
  alert( 'Hello' );
}
Output: Hello 
Any non-empty string will be considered as true.

### Loops
Repeat actions until the condition is true.

#### While loop:
while (condition) {
  // code
  // so-called "loop body"
}
First check condition, while the condition is truthy, the code from the loop body is executed.
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

#### For Loop:
for (begin; condition; step) {
  // ... loop body ...
}
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

#### Do…while loop:
do {
  // loop body
} while (condition);
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again. Execute at least once even condition are false.
let i = 0;

do {
  alert( i );
  i++;
} while (i < 3);

#### For...of Loop (ES6)
Used for Arrays, Strings, Maps, Sets
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}

#### For...in Loop
Used for objects.
const obj = { a: 1, b: 2 };

for (const key in obj) {
  console.log(key, obj[key]);
}

#### Array.forEach()
Can not use break, continue.
const arr = [1, 2, 3];
arr.forEach((value, index) => {
  console.log(value, index);
});

### break
Immediately exits the loop or switch
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

### Continue
Skips current iteration and moves to next
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

### label
A named reference for a loop/block
Used with: break and continue

outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outer;
    console.log(i, j);
  }
}
Output: 1 1

outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outer;
    console.log(i, j);
  }
}
Output: 1 1, 2 1, 3 1

### Switch Statement:
A more elegant way to compare a value with multiple options.
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
} 

Note: Without break, it will continue to execute next cases until it finds a break or reaches the end of switch. This is called "fall-through" behavior.


## 11. Closure
A closure is created when:
A function remembers and can access variables from its outer (parent) scope even after that outer function has finished executing.
A closure is a function that has access to its lexical scope even when the function is executed outside that scope.
JavaScript preserves that scope(Encapsulation)

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3

### Curring:
Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6

### Curring with arrow functions
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6

### Infinite Currying
function sum(a) {
  return function(b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(2)(3)(4)()); // 10


## 12. Function
A function is a reusable block of code.
Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).

### Function Declaration
function greet(name) {
  return "Hello " + name;
}
greet("Abhinav");
Hoisted (can call before definition)

### Function Expression
const add = function(a, b) {
  return a + b;
};
Not hoisted like declaration
Stored in variable

### Named Function Expression
const fn = function myFunc() {
  console.log("Hello");
};
Name usable inside function only

### Arrow Function (ES6)
const add = (a, b) => a + b;
No this (lexical this)
No arguments
Cannot be used as constructor

### Anonymous Function
setTimeout(function() {
  console.log("Hello");
}, 1000);

### IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("I run immediately");
})();
Avoid global scope pollution

### Generator Function (Iterator function)
function* gen() {
  yield 1;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }

### Async Function
async function fetchData() {
  return "Hello";
}
Always return promise

### Higher-Order Function
Function that takes function as argument OR Returns function
function greet(fn) {
  fn();
}
greet(() => console.log("Hi"));

### Callback Function
function process(cb) {
  cb();
}
process(() => console.log("Done"));

### Pure Function
function add(a, b) {
  return a + b;
}
No side effects, same output for same input

### Recursive Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

### First-Class Function
Can be treated like any other value
Stored in variables
Passed as arguments
Returned from functions

function execute(fn) {
  fn();
}
execute(() => console.log("Running"));

function sayHello() {
  console.log("Hello");
}
const greetFunc = sayHello; // Can assign to variable
greetFunc(); // Can call from variable


## 13. Garbage collection
Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.
There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

// user has a reference to the object
let user = {
  name: "John"
};

User = null; // object unreachable

### Unreachable island
It is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.


## 14. Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.
For instance:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


## 15. Iterators
An iterator is an object that lets you traverse (loop over) data step by step.
It follows a standard protocol: It has a next() method that returns an object with two properties:
value: The current item in the sequence.
done: A boolean indicating if we've reached the end of the sequence.
{ value: 1, done: false };

Common Iterables in JavaScript:
Arrays, Strings, Maps, Sets,
Objects (with custom iterators with custom Symbol.iterator)
Generators (functions that can be paused and resumed)

### Basic Iterator
const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

### String Iterator
const str = "Hello";
const strIterator = str[Symbol.iterator]();

console.log(strIterator.next()); // { value: 'H', done: false }
console.log(strIterator.next()); // { value: 'e', done: false }
console.log(strIterator.next()); // { value: 'l', done: false }
console.log(strIterator.next()); // { value: 'l', done: false }
console.log(strIterator.next()); // { value: 'o', done: false }
console.log(strIterator.next()); // { value: undefined, done: true }

### Custom Iterator
const obj = { // Not iterable by default
  start: 1,
  end: 3,
}
Define custom iterator using Symbol.iterator
obj[Symbol.iterator] = function() {
  let current = this.start;
  const end = this.end;

  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};
let it = obj[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

### Generator Function Iterator
Automatically implements the iterator protocol
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();

console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }

### Using for...of loop with iterables
Strings, Arrays, Maps, Sets, and objects with custom iterators can be used in for...of loops
for (let char of "Hello") {
  console.log(char);
}

for (let num of [10, 20, 30]) {
  console.log(num);
}

objects with custom iterators can also be used in for...of loops
for (let num of obj) {
  console.log(num);
}


## 16. Maps and Sets
### Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

#### Methods and properties are:
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
map.keys – returns an iterable for values,
map.values – returns an iterable for values,
map.entries - returns an iterable for entries [key, value].

let map = new Map([
    ["abc", 123],
    [123, "abc"],
    ["pqr", 456],
    [456, "pqr"],
    [false, 0],
    [1, true]
])
##### Add items
userMap.set('name', 'Abhinav');
userMap.set('age', 25);
userMap.set(1, 'one');
console.log(userMap.get('name')); // Abhinav
console.log(userMap.has('age')); // true
console.log(userMap.size); // 3

##### Delete items
userMap.delete('age');

##### Iterate through map
for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

##### Get keys or values
console.log([...userMap.keys()]);
console.log([...userMap.values()]);

##### Convert map to array
const mapArray = [...userMap];
console.log(mapArray); // [ ['name', 'Abhinav'], [1, 'one'] ]

##### Convert array to map
const newMap = new Map(mapArray);
console.log(newMap); // Map { 'name' => 'Abhinav', 1 => 'one' }

### Sets
Sets store unique values of any type

#### Methods and properties are:
const mySet = new Set(); – creates the set.
mySet.add(value) – adds a value, returns the set itself.
mySet.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
mySet.has(value) – returns true if the value exists in the set, otherwise false.
mySet.clear() – removes everything from the set.
mySet.size – returns the number of unique values in the set.
mySet.keys() – returns an iterable for values.
mySet.values() – same as keys(), returns an iterable for values.
mySet.entries() – returns an iterable for entries [key, value].


const numbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(numbers); // Set { 1, 2, 3, 4, 5 }

##### Add items
numbers.add(6);
console.log(numbers.has(3)); // true

##### Remove items
numbers.delete(2);
console.log(numbers.size); // 5

##### Clear all items
numbers.clear();

##### Iterate through set
for (const num of numbers) {
    console.log(num);
}

##### Convert set to array
const numArray = [...numbers];
console.log(numArray); // [1, 3, 4, 5, 6]

##### convert array to set
const numSet = new Set(numArray);
console.log(numSet); // Set { 1, 3, 4, 5, 6 }

### Getter And Setter
Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },
  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

let user = {
  name: "John",
  surname: "Smith"
};

let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
alert(user.fullName); // John Smith

let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
user.fullName = "Alice Cooper";
alert(user.name); // Alice
alert(user.surname); // Cooper


## 17. Prototype inheritance
Objects can inherit properties and methods from other objects through the prototype chain.
Every object has an internal link to another object called its prototype. When we try to access a property on an object, JavaScript first looks for that property on the object itself. If it doesn't find it, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

### __proto__
__ proto __ is a property that points to the prototype of an object. However, it's recommended to use Object.getPrototypeOf() and Object.setPrototypeOf() for working with prototypes instead of directly accessing __ proto __.

#### Example of prototype inheritance:
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__ proto __ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats); // true (inherited from animal)
console.log(rabbit.jumps); // true (own property)

#### We can also create objects with a specified prototype using Object.create():
let dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)

#### Prototype inheritance allows for a flexible and dynamic way to share behavior between objects in JavaScript.

Example:
const parent = {
    greet() {
        console.log("Hello from parent");
    }
};

const child = Object.create(parent);
child.greet(); // Hello from parent
The child object inherits the greet method from the parent object through the prototype chain.

#### We can also add properties and methods to the child object without affecting the parent:
child.sayBye = function() {
    console.log("Goodbye from child");
};

child.sayBye(); // Goodbye from child
parent.sayBye(); // Error: parent.sayBye is not a function

Prototype inheritance allows for a flexible and dynamic way to share behavior between objects in JavaScript.  

### F.prototype
Function.prototype
Every function in JavaScript has a prototype property that is used when the function is used as a constructor with the new keyword. The prototype property is an object that contains properties and methods that will be inherited by instances created by that constructor function.

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

Remember, new objects can be created with a constructor function, like new F().
If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

let animal2 = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal2; // sets Rabbit.prototype to animal2
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal2
alert( rabbit.eats ); // true


## 18. Class
Blueprint for creating objects
Encapsulates data and behavior
Supports inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const alice = new Person("Alice", 30);
alice.greet(); // Hello, my name is Alice

### Inheritance
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call parent constructor
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}`);
    }
}

const bob = new Employee("Bob", 25, "Developer");
bob.greet(); // Hello, my name is Bob (inherited from Person)
bob.work(); // Bob is working as a Developer

### Static Methods
Belong to the class, not instances
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
Note: Static methods cannot be called on instances of the class

### Super Keyword
Used to call parent class methods and constructors
class AdvancedMathUtils extends MathUtils {
    static multiply(a, b) {
        return a * b;
    }

    static addAndMultiply(a, b) {
        const sum = super.add(a, b); // Call add from MathUtils
        return super.multiply(sum, 2); // Multiply the sum by 2
    }
}

console.log(AdvancedMathUtils.add(5, 3)); // 8
console.log(AdvancedMathUtils.multiply(5, 3)); // 15
console.log(AdvancedMathUtils.addAndMultiply(5, 3)); // (5 + 3) * 2 = 16

console.log(MathUtils.add(5, 3)); // 8
let mathUtils = new MathUtils();
// mathUtils.add(5, 3); // Error: mathUtils.add is not a function

### Method Overriding
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
const dog = new Dog();
dog.speak(); // Dog barks (overridden method)   
Note: Method Overloading (Not supported in JavaScript

### Private Fields and Methods (ES2022)
class Counter {
    #count = 0; // Private field
    name; // Public field
    constructor(name) {
        this.name = name;
    }
    increment() {
        this.#count++;
    }
    getCount() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.#count); // Error: Private field '#count' must be declared in an enclosing class 
console.log(counter.name); // Accessible public field


## 19. Modules
Reusable pieces of code that can be imported and exported between different files
A module is just a file. One script is one module. As simple as that.

// ./module.js
### Exporting a function
export function greet(name) {
    console.log(`Hello, ${name}!`);
}

### Exporting a class
export class Calculator {
    add(a, b) {
        return a + b;
    }
}

### Default export
export default function sayGoodbye() {
    console.log("Goodbye!");
}

import { greet, Calculator } from './module.js';

greet("Alice"); // Hello, Alice!
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8

import sayGoodbye from './module.js';
sayGoodbye(); // Goodbye!
Modules help in organizing code, avoiding global scope pollution, and enabling code reuse across different parts of an application.

### Dynamic Imports
Modules can also be imported dynamically using the import() function, which returns a promise that resolves to the module object. This allows for code splitting and lazy loading of modules.
import('./module.js').then(module => {
    module.greet("Bob"); // Hello, Bob!
    const calc = new module.Calculator();
    console.log(calc.add(10, 20)); // 30
});


## 20. Proxy and Targets
A proxy is an object that wraps another object (called the target) and intercepts operations performed on it, allowing you to customize behavior.

### Example of a proxy that logs property access:
const target = {
  name: "Alice",
  age: 30
};

const handler = {
  get(target, prop) {
    console.log(`Accessing property "${prop}"`);
    return target[prop];
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: Accessing property "name" and then outputs: Alice
console.log(proxy.age); // Logs: Accessing property "age" and then outputs: 30

Proxies can be used for various purposes such as validation, logging, or even creating virtual objects.  

### Modifying property values through proxy:
const handler2 = {
  get(target, prop) {
    console.log(`Accessing property "${prop}"`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting property "${prop}" to "${value}"`);
    target[prop] = value;
    return true; // Indicate that the assignment was successful
  }
};

const proxy2 = new Proxy(target, handler2);

proxy2.name = "Bob"; // Logs: Setting property "name" to "Bob"
console.log(proxy2.name); // Logs: Accessing property "name" and then outputs: Bob

### Proxies can also be used to create virtual objects that don't exist in the target:
const virtualHandler = {
  get(target, prop) {
    if (prop === "greet") {
      return () => "Hello!";
    }
    return target[prop];
  }
};

const virtualProxy = new Proxy({}, virtualHandler);
console.log(virtualProxy.greet()); // Outputs: Hello!


## 21. Best Practices

- Use `===`/`!==`.
- Prefer `const` and `let` over `var`.
- Keep functions small and focused.
- Avoid global variables.
- Use linting (`ESLint`) and formatting (`Prettier`).


## 22. Conclusion

JavaScript is versatile and widely-used for web, server, and tooling. Mastering core concepts (scope, async, types, and modern ES syntax) sets a strong foundation.


## 23. Suggested Next Topics

- Advanced closures and prototypes.
- Event loop and microtasks.
- Performance optimization and memory management.
- TypeScript for static typing.
- Frameworks: React, Vue, Angular.


## 24. Contribute

1. Fork repository.
2. Create feature branch: `git checkout -b feature/docs`
3. Edit `Javascript/README.md`.
4. Commit: `git commit -m "docs: improve Javascript README"`.
5. Push and open PR.


## 25. License

MIT License. See `LICENSE` file for details.
