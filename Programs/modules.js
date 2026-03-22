// Modules
// Reusable pieces of code that can be imported and exported between different files
// A module is just a file. One script is one module. As simple as that.

// ./module.js
// Exporting a function
export function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Exporting a class
export class Calculator {
    add(a, b) {
        return a + b;
    }
}

// Default export
export default function sayGoodbye() {
    console.log("Goodbye!");
}

import { greet, Calculator } from './module.js';

greet("Alice"); // Hello, Alice!
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8

import sayGoodbye from './module.js';
sayGoodbye(); // Goodbye!

// Modules help in organizing code, avoiding global scope pollution, and enabling code reuse across different parts of an application.

// Dynamic Imports
// Modules can also be imported dynamically using the import() function, which returns a promise that resolves to the module object. This allows for code splitting and lazy loading of modules.

import('./module.js').then(module => {
    module.greet("Bob"); // Hello, Bob!
    const calc = new module.Calculator();
    console.log(calc.add(10, 20)); // 30
});