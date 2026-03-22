// Prototypal inheritance
// Objects can inherit properties and methods from other objects through the prototype chain.

// Every object has an internal link to another object called its prototype. When we try to access a property on an object, JavaScript first looks for that property on the object itself. If it doesn't find it, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

// __proto__ is a property that points to the prototype of an object. However, it's recommended to use Object.getPrototypeOf() and Object.setPrototypeOf() for working with prototypes instead of directly accessing __proto__.

// Example of prototypal inheritance:

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
console.log(rabbit.eats); // true (inherited from animal)
console.log(rabbit.jumps); // true (own property)

// We can also create objects with a specified prototype using Object.create():
let dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)

// Prototypal inheritance allows for a flexible and dynamic way to share behavior between objects in JavaScript.

// Example:
const parent = {
    greet() {
        console.log("Hello from parent");
    }
};

const child = Object.create(parent);
child.greet(); // Hello from parent

// The child object inherits the greet method from the parent object through the prototype chain.

// We can also add properties and methods to the child object without affecting the parent:
child.sayBye = function() {
    console.log("Goodbye from child");
};

child.sayBye(); // Goodbye from child
parent.sayBye(); // Error: parent.sayBye is not a function

// Prototypal inheritance allows for a flexible and dynamic way to share behavior between objects in JavaScript.  

//Function.prototype
// Every function in JavaScript has a prototype property that is used when the function is used as a constructor with the new keyword. The prototype property is an object that contains properties and methods that will be inherited by instances created by that constructor function.

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

// Remember, new objects can be created with a constructor function, like new F().
// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

let animal2 = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal2; // sets Rabbit.prototype to animal2
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal2
alert( rabbit.eats ); // true
