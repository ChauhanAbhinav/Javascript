# JavaScript Tutorials & Interview Preparation

**Author:** Abhinav Chauhan  
**Date:** 19 March 2026  

---

## Table of Contents

1. Introduction to Java Script
2. 
3. 
4. 
5. 
6. 
7. Conclusion  
8. Suggested Next Topics  
9. Contribute  
10. License  

---


## 1. Introduction

# What is JavaScript?
JavaScript is a programming language based on the ECMAScript standard and runs in browsers and servers like Node.js.

# Why is it called JavaScript?
When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine. The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”. For example:
V8 – in Chrome, Opera and Edge, SpiderMonkey – in Firefox.

# How do engines work?
Engines are complicated. But the basics are easy. The engine (embedded if it’s a browser) reads (“parses”) the script. Then it converts (“compiles”) the script to machine code. And then the machine code runs, pretty fast.

Code → Parsing → AST → Compilation → Execution
Ex: let x = 10;

1. Code (Input):
let x = 10;

2. Parsing to Abstract Syntax Tree: 2 Step Process:

(A). Lexical Analysis (Tokenization) : Conversion into tokens:
let | x | = | 10 | + | 20 | ;
let → keyword, x → identifier, 10 → number

(B) Syntax Analysis: is this code grammatically correct?
let = x 10; // Syntax Error

3. AST (Abstract Syntax Tree)

VariableDeclaration
 ├── Identifier: x
 └── Literal: 10

Used for: Code optimization, Debugging, Tools like Babel, ESLint, Frameworks (React, Angular).

4. Compilation (JIT) : Modern engines use JIT (Just-In-Time compilation)
Converts AST → optimized machine-like code (Improves performance)

JavaScript uses both JIT(Optimizes code before execution) and interpreter(runs line by line).
Converts JS → machine code → Executes with the help of memory (Heap & Stack)

5. Execution:
Memory is allocated, Execution context created, Code runs line by line.

# Types of compilers

AOT (Ahead-Of-Time Compiler)
Compiles code before execution, Fast execution, Longer compile time.
Output: machine code or binary
Example: C, C++

JIT (Just-In-Time Compiler)
Compiles code during execution, Used by engines like V8, Faster than interpretation, Optimizes hot code, Slight startup delay.
Interpreter (Not exactly compiler but related).
Executes code line-by-line, JavaScript initially behaves like this, No compile step, Slower performance.

Transpiler (Source-to-Source Compiler)
Converts one language → another high-level language

Example: TypeScript → JavaScript, Babel (ES6 → ES5)

# Quick Comparison:

Type		When Compiled	Speed		Example

AOT		Before run		Fast		C, C++

JIT		During run		Fast		V8

Interpreter	Line-by-line		Slow		Python (basic)

Transpiler	Before run		Depends	TypeScript




What can in-browser JavaScript do?
Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.
JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.
In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.
