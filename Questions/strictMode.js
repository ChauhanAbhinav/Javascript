"use strict";

// 1. What is output of the following code and why?
x = 10;
console.log(x);

// 2. What happens when we try to delete a variable declared with var?
var z = 10;
delete z;

// 3. Duplicate parameters
function sum(a, a) {
  return a + a;
}

// 4. Octal literals
var octal = 010;

// 5. this Behavior
function test() {
  console.log(this); // undefined in strict mode, window / global in non-strict mode
}

// 6. What is output of the following code and why?
var x = 10;
this.z = 30;
globalThis.z = 40;

function a() {
  console.log(this.z);
  console.log(globalThis.z);
}
a();

// 7. Assigning to read-only property

const obj = {};
Object.defineProperty(obj, "x", {
  value: 10,
  writable: false
});

obj.x = 20;

// 8. arguments behavior

function test(a) {
  arguments[0] = 100;
  console.log(a);
}

test(10);

// 10. eval behavior
eval("var x = 10; console.log(x);");

// 11. with statement
with (Math) {
  console.log(cos(0));
}

// 12: Reserved keywords
let public = 10;

// 13. Arguments object
function test(a, b) {
  a = 100;
  console.log(arguments[0]);
}

test(10, 20);

// 14. What is output of the following code and why?
let obj = {
  name: "JS",
  getName: function () {
    return this.name;
  }
};

let fn = obj.getName;
console.log(fn());

// 15. What is output of the following code and why?
(function() {
  x = 10;
})();

// 16. What is output of the following code and why?
function test() {
  console.log(this === undefined);
}

test();