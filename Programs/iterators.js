// An iterator is an object that lets you traverse (loop over) data step by step.
// It follows a standard protocol: It has a next() method that returns an object with two properties:
// value: The current item in the sequence.
// done: A boolean indicating if we've reached the end of the sequence.
// { value: 1, done: false };

// Common Iterables in JavaScript:
// Arrays
// Strings
// Maps
// Sets
// Objects (with custom iterators with custom Symbol.iterator)
// Generators (functions that can be paused and resumed)


// Basic Iterator
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// String Iterator
const str = "Hello";
const strIterator = str[Symbol.iterator]();

console.log(strIterator.next()); // { value: 'H', done: false }
console.log(strIterator.next()); // { value: 'e', done: false }
console.log(strIterator.next()); // { value: 'l', done: false }
console.log(strIterator.next()); // { value: 'l', done: false }
console.log(strIterator.next()); // { value: 'o', done: false }
console.log(strIterator.next()); // { value: undefined, done: true }

// Custom Iterator
const obj = { // Not iterable by default
  start: 1,
  end: 3,
}
// Define custom iterator using Symbol.iterator
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

// Generator Function Iterator
// Automatically implements the iterator protocol
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


// Using for...of loop with iterables
// Strings, Arrays, Maps, Sets, and objects with custom iterators can be used in for...of loops
for (let char of "Hello") {
  console.log(char);
}

for (let num of [10, 20, 30]) {
  console.log(num);
}

// objects with custom iterators can also be used in for...of loops
for (let num of obj) {
  console.log(num);
}
