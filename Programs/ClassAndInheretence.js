// Class
// Blueprint for creating objects
// Encapsulates data and behavior
// Supports inheritance

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

// Inheritance
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

// Static Methods
// Belong to the class, not instances
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
// Note: Static methods cannot be called on instances of the class

// Super Keyword
// Used to call parent class methods and constructors
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

// Method Overriding
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

// Method Overloading (Not supported in JavaScript

// Private Fields and Methods (ES2022)
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