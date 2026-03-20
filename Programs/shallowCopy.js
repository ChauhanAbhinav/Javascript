// Shallow Copy
// Copies only top-level properties, and changes original values.
// Spread operator does NOT create deep copy,  It only copies one level deep
// Use spread operator and Object.assign

let obj1 = { name: "A", address: { city: "Delhi" } };
let obj2 = { ...obj1 };

console.log(obj1, obj2)

obj2.name = "B"; // only change in obj2, obj1 will not be affected
obj2.address.city = "Mumbai"; // change in obj2, obj1 will also be affected because of shallow copy


console.log(obj1, obj2)

obj1.name = "C"; // only change in obj1, obj2 will not be affected
obj1.address.city = "Mumbai"; // affects obj1 and obj2 because of shallow copy

console.log(obj1, obj2)
