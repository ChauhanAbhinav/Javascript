// This file demonstrates the use of semicolons in JavaScript. In JavaScript, semicolons are used to terminate statements, but they are optional in many cases due to automatic semicolon insertion (ASI). However, relying on ASI can lead to unexpected behavior, so it's generally recommended to use semicolons consistently.

console.log("Hello, World!")

console.log("Hello, World!", 1 + 2)

console.log("Hello, World!", 1 
+ 
2);

// The following line will cause an error due to ASI, as it will be interpreted as single statement.
console.log("Hello, World!")

[1, 2].forEach(console.log);

