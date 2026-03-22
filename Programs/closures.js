// A closure is created when:
// A function remembers and can access variables from its outer (parent) scope even after that outer function has finished executing.
// A closure is a function that has access to its lexical scope even when the function is executed outside that scope.

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

Curring 
// A technique of transforming a function with multiple arguments into a sequence of functions that each take a single argument.
// It allows you to create specialized functions by fixing some arguments of a more general function.

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6

// Curring with arrow functions
const add = a => b => c => a + b + c;

add(1)(2)(3); // 6

// Infinite Currying
// A form of currying where the function can be called indefinitely until a terminating condition is met.

function sum(a) {
  return function(b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(2)(3)(4)()); // 10