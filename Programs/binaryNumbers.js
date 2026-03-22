// Binary Numbers and Operations
// What are Binary Numbers?
// Binary is a base-2 number system, meaning it uses only: 0 and 1
// Each position represents a power of 2:

// Binary		Power of 2	Value
// 1		2⁰		1
// 10		2¹		2
// 100		2²		4
// 1000		2³		8

// Example:
// Binary 1011 =
// 1×2³ + 0×2² + 1×2¹ + 1×2⁰
// = 8 + 0 + 2 + 1
// = 11 (decimal)

// Convert to binary

// Remainder method: To convert decimal number to binary, divide by 2 continuously until the quotient is 0, then list the remainder from bottom to top.
// Divide 4 by 2: 
// with a remainder of 0.
// Divide the quotient 2 by 2: 
// with a remainder of 0.
// Divide the quotient 1 by 2: 
// with a remainder of 1.
// Stop when the quotient is 0.
// Read the remainders from bottom to top: 1, 0, 0, which equals 100

// Power method: 
// Binary uses powers of 2 to represent 4: 
// Do we need a 4? Yes (1).
// Do we need a 2? No (0).
// Do we need a 1? No (0).
// Result: 100. 
// 4= 1x 2^2 + 0x2^1 + 0x2^0

// Binary Addition
// Rules:
// A	B	Result	Carry
// 0	0	0	0
// 0	1	1	0
// 1	0	1	0
// 1	1	0	1

//  1011
// + 1101
// ------
//  11000

// Binary Subtraction
// Rules:
// A	B	Result
// 0	0	0
// 1	0	1
// 1	1	0
// 0	1	1 (borrow)

// 1011
// - 0101
// ------
//  0110

// Binary Multiplication
// Same as decimal but simpler:
// 1 × 1 = 1
// 1 × 0 = 0
// Example:
//    101
// ×   11
// -------
//    101
// + 1010
// -------
//   1111

// Binary Division
// Works like a long division.
// Example:
// 1010 ÷ 10 = 101

// Bitwise Operations
// OR (|)
// At least one is 1 to get 1
// 1010
// 1100
// ----
// 1000

// AND (&)
// Both must be 1 to get 1
// 1010
// 1100
// ----
// 1000

// XOR (^)
// Different bits → 1


// 1010
// 1100
// ----
// 0110

// NOT (~)
// Flips bits
// 1010 → 0101

// Left Shift (<<)
// Multiply by 2
// 5 << 1 = 10
// (0101 → 1010)
// Shift bits left
// Add 0 at end


// Right Shift (>>)
// Divide by 2
// 10 >> 1 = 5
// (1010 → 0101)
// Shift bits right
// Remove last bit


// JavaScript Examples
console.log(5 & 1);  // 1
console.log(5 | 1);  // 5
console.log(5 ^ 1);  // 4
console.log(~5);     // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
