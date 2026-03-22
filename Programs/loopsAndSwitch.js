// Repeat actions until the condition is true.

// While loop:
while (condition) {
  // code
  // so-called "loop body"
}

// First check condition, while the condition is truthy, the code from the loop body is executed.
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// For Loop:
for (begin; condition; step) {
  // ... loop body ...
}
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

// Do…while loop:

do {
  // loop body
} while (condition);
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again. Execute at least once even condition are false.

let a = 0;
do {
  alert( a );
  a++;
} while (a < 3);

// For...of Loop (ES6)
// Used for Arrays, Strings, Maps, Sets
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}

// For...in Loop
// Used for objects. Iterates over enumerable properties (keys).
const obj = { a: 1, b: 2 };

for (const key in obj) {
  console.log(key, obj[key]);
}

// Array.forEach()
// Can not use break, continue.
const array = [1, 2, 3];
array.forEach((value, index) => {
  console.log(value, index);
});

// break
//Immediately exits the loop or switch
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Continue
// Skips current iteration and moves to next

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// label
// A named reference for a loop/block
// Used with: break and continue

outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outer;
    console.log(i, j);
  }
}
// Output: 1 1
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outer;
    console.log(i, j);
  }
}

// Output: 1 1, 2 1, 3 1

// switch Statement
// A more elegant way to compare a value with multiple options.
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

// Without break, it will continue to execute next cases until it finds a break or reaches the end of switch. This is called "fall-through" behavior.

let day2 = 2;
switch (day2) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
  default:
    console.log("Other day");
}
// Output: "Tuesday", "Wednesday", "Other day"  