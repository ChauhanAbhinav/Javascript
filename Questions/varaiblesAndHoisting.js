// "use strict";

// 1. What is output of the following code and why?
console.log(p);
var p = 10;

console.log(q);
let q = 20;

// 2. What is output of the following code and why?
var m = 1;

function test() {
  console.log(m);
  var m = 2;
}

test();

// 3. What happens here?
let x = 10;

function test() {
  console.log(x);
  let x = 20;
}

test();

// 4. Output?   
const obj = { a: 1 };

obj.a = 2;
console.log(obj.a);

// 5. What happens?
const obj = { a: 1 };
obj = { a: 2 };

// 6. Loop + Closure Trap
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (var i = 0; i < 3; i++) {
  (function(i){
    setTimeout(() => console.log(i), 100);
  })(i);
}

// 7. Nested Scope Trick
let x = 10;

{
  console.log(x);
  let x = 20;
}

// 8. Function Hoisting vs Variable Hoisting
foo();

var foo = function () {
  console.log("Hello");
};

// 9. Function Hoisting vs Variable Hoisting with let
foo();

let foo = function () {
  console.log("Hello");
};

// 10. const in block
if (true) {
  const x = 10;
}
console.log(x);

// 11. TDZ Deep Question
let x = 10;

function test() {
  console.log(x);
}

function test2() {
  console.log(x);
  let x = 20;
}

test();
test2();

// 12. Shadowing Edge Case
var z = 10;

function test() {
  let z = 20;
  {
    var z = 30;
  }
}

test();

// 13. Global Object and var vs let in Browser

var x = 10;
let y = 20;
console.log(globalThis.x); // 10, var declarations are added to the global object
console.log(globalThis.y); // undefined

// 14. Global Object and var vs let in Node.js

var a = 10;
let b = 20;
this.c = 30;
globalThis.c = 40;

console.log(this.a); // undefined
console.log(this.b); // undefined
console.log(this.c); // 30 , this === globalThis // true in non strict mode
console.log(globalThis.c); // 40

function xyz(){
    console.log(this.c) // 40, this === globalThis // true in non strict mode
    console.log(globalThis.c); // 40
}

xyz();

// 15. Hoisting Priority
var a = 1;

function a() {}

console.log(typeof a); // Function is hoisted first then var a = 1 overrides it

// 16. Re-declaration Edge Case
var a = 1;
let a = 2;

// 17. Complex TDZ + Scope
let x = 1;

function outer() {
  console.log(x);
  
  let x = 2;
  
  function inner() {
    console.log(x);
  }

  inner();
}

outer();

// 18. Hoisting inside block (strict vs non-strict)

{
  let a = 10
}
console.log(10); // ReferenceError in strict mode, 10 in non-strict mode
