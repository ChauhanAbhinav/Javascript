// ===== SETS =====
// Sets store unique values of any type

// Methods and properties are:
// const mySet = new Set(); – creates the set.
// mySet.add(value) – adds a value, returns the set itself.
// mySet.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// mySet.has(value) – returns true if the value exists in the set, otherwise false.
// mySet.clear() – removes everything from the set.
// mySet.size – returns the number of unique values in the set.
// mySet.keys() – returns an iterable for values.
// mySet.values() – same as keys(), returns an iterable for values.
// mySet.entries() – returns an iterable for entries [value, value], exists for compatibility with Map.

const numbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(numbers); // Set { 1, 2, 3, 4, 5 }

// Add items
numbers.add(6);
console.log(numbers.has(3)); // true

// Remove items
numbers.delete(2);
console.log(numbers.size); // 5

// Clear all items
// numbers.clear();

// Iterate through set
for (const num of numbers) {
    console.log(num);
}

// Convert set to array
const numArray = [...numbers];
console.log(numArray); // [1, 3, 4, 5, 6]

// convert array to set
const numSet = new Set(numArray);
console.log(numSet); // Set { 1, 3, 4, 5, 6 }


// ===== MAPS =====
// Maps store key-value pairs (keys can be any type)

// Methods and properties are:
// const userMap = new Map(); – creates the map.
// userMap.set(key, value) – stores the value by the key.
// userMap.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// userMap.has(key) – returns true if the key exists, false otherwise.
// userMap.delete(key) – removes the element (the key/value pair) by the key.
// userMap.clear() – removes everything from the map.
// userMap.size – returns the current element count.
// userMap.keys() – returns an iterable for keys,
// userMap.values() – returns an iterable for values,
// userMap.entri

let map = new Map([
    ["abc", 123],
    [123, "abc"],
    ["pqr", 456],
    [456, "pqr"],
    [false, 0],
    [1, true]
])
// Add items
userMap.set('name', 'Abhinav');
userMap.set('age', 25);
userMap.set(1, 'one');

console.log(userMap.get('name')); // Abhinav
console.log(userMap.has('age')); // true
console.log(userMap.size); // 3

// Delete items
userMap.delete('age');

// Iterate through map
for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

// Get keys or values
console.log([...userMap.keys()]);
console.log([...userMap.values()]);

// Convert map to array
const mapArray = [...userMap];
console.log(mapArray); // [ ['name', 'Abhinav'], [1, 'one'] ]

// Convert array to map
const newMap = new Map(mapArray);
console.log(newMap); // Map { 'name' => 'Abhinav', 1 => 'one' }
