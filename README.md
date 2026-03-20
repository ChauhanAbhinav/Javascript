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
8. 
9. 
15. Conclusion  
16. Suggested Next Topics  
17. Contribute  
18. License  

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




## 14. Best Practices

- Use `===`/`!==`.
- Prefer `const` and `let` over `var`.
- Keep functions small and focused.
- Avoid global variables.
- Use linting (`ESLint`) and formatting (`Prettier`).


## 15. Conclusion

JavaScript is versatile and widely-used for web, server, and tooling. Mastering core concepts (scope, async, types, and modern ES syntax) sets a strong foundation.


## 16. Suggested Next Topics

- Advanced closures and prototypes.
- Event loop and microtasks.
- Performance optimization and memory management.
- TypeScript for static typing.
- Frameworks: React, Vue, Angular.


## 17. Contribute

1. Fork repository.
2. Create feature branch: `git checkout -b feature/docs`
3. Edit `Javascript/README.md`.
4. Commit: `git commit -m "docs: improve Javascript README"`.
5. Push and open PR.


## 18. License

MIT License. See `LICENSE` file for details.
