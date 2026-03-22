// 1. What is output of the following code and why?
console.log([10, 2, 30].sort());

//2. What is output of the following code and why?
console.log(['10', '2', '30'].sort());

// 3. How to sort numbers in ascending order?
console.log([10, 2, 30].sort((a, b) => a - b));

// 4. How to sort numbers in descending order?
console.log([10, 2, 30].sort((a, b) => b - a));

// 5. How to sort strings in alphabetical order?
console.log(['banana', 'apple', 'cherry'].sort());

// 6. How to sort strings in reverse alphabetical order?
console.log(['banana', 'apple', 'cherry'].sort().reverse());

// 7. How to sort an array of objects by a specific property?
const arr = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
arr.sort((a, b) => a.age - b.age);
console.log(arr);

// 8. How to sort objects by string property?
const objArr = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
objArr.sort((a, b) => a.name.localeCompare(b.name));
console.log(objArr);

// 9. How to sort an array of strings by their length?
const strArr = ['short', 'medium', 'loooooong'];
strArr.sort((a, b) => a.length - b.length);
console.log(strArr);

// 10. How to sort an array of strings in a case-insensitive manner?
const caseArr = ['banana', 'Apple', 'cherry'];
caseArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(caseArr);
// subtraction does not work for strings, so we use localeCompare for case-insensitive sorting

// 11. How to sort an array of numbers in random order?
console.log([10, 2, 30].sort(() => Math.random() - 0.5));