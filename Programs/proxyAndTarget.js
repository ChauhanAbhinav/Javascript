// Proxy
// A proxy is an object that wraps another object (called the target) and intercepts operations performed on it, allowing you to customize behavior.

// Example of a proxy that logs property access:
const target = {
  name: "Alice",
  age: 30
};

const handler = {
  get(target, prop) {
    console.log(`Accessing property "${prop}"`);
    return target[prop];
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: Accessing property "name" and then outputs: Alice
console.log(proxy.age); // Logs: Accessing property "age" and then outputs: 30

// Proxies can be used for various purposes such as validation, logging, or even creating virtual objects.  

// Modifying property values through proxy:
const handler2 = {
  get(target, prop) {
    console.log(`Accessing property "${prop}"`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting property "${prop}" to "${value}"`);
    target[prop] = value;
    return true; // Indicate that the assignment was successful
  }
};

const proxy2 = new Proxy(target, handler2);

proxy2.name = "Bob"; // Logs: Setting property "name" to "Bob"
console.log(proxy2.name); // Logs: Accessing property "name" and then outputs: Bob

// Proxies can also be used to create virtual objects that don't exist in the target:
const virtualHandler = {
  get(target, prop) {
    if (prop === "greet") {
      return () => "Hello!";
    }
    return target[prop];
  }
};

const virtualProxy = new Proxy({}, virtualHandler);

console.log(virtualProxy.greet()); // Outputs: Hello!
