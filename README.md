# JavaScript Tutorials & Interview Preparation

**Author:** Abhinav Chauhan  
**Date:** 19 March 2026

---

## Table of Contents

1. Introduction
2. Code Structure
3. "use strict" (Strict Mode)
4. Variables: var, let, const
5. Hoisting
6. Global Objects
7. Data Types
8. Operators
9. Functions
10. Scope & Closures
11. Asynchronous JavaScript
12. DOM Basics
13. Modern ES6+ Features
14. Best Practices
15. Conclusion
16. Suggested Next Topics
17. Contribute
18. License

---

## 1. Introduction

### What is JavaScript?
JavaScript is a high-level, interpreted programming language based on the ECMAScript specification. It runs in browser environments and on servers using engines like Node.js.

### JavaScript vs Java
JavaScript was originally named LiveScript and renamed to JavaScript in 1995 for marketing synergy. They are separate languages with different syntax, type systems, and runtime models.

### Where JavaScript runs
- Browser (Chrome, Firefox, Edge, Safari)
- Server (Node.js, Deno)
- Embedded engines (IoT devices)

### JavaScript engines
- V8 (Chrome, Node.js, Edge)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)

Pipeline: source code → parsing → AST → compilation/JIT → execution.

## 2. Code Structure

### Statements
- JavaScript programs are sequences of statements.
- Semicolons are optional but recommended for clarity.

### Comments
- Single line: `// comment`
- Multi-line: `/* comment */`
- Nested comments are not allowed.

## 3. "use strict" (Strict Mode)

- Use `"use strict";` at file or function scope.
- Enables stricter parsing and error handling.
- Disallows undeclared variables, duplicate parameter names, silent failures, etc.

## 4. Variables: var, let, const

### var
- Function scoped.
- Hoisted and initialized as `undefined`.
- Can be redeclared.

### let
- Block scoped.
- Hoisted to TDZ until initialization.
- Cannot redeclare in same scope.

### const
- Block scoped.
- Must be initialized at declaration.
- Cannot be reassigned (object contents can mutate).

## 5. Hoisting

- Declarations are hoisted, assignments are not.
- `var` is hoisted with `undefined` initialization.
- `let` and `const` are hoisted but in TDZ until assignment.
- Function declarations are hoisted with full definition.

## 6. Global Objects

- Browser: `window` and `globalThis`.
- Node.js: `global`, `module.exports`, `globalThis`.

Key rules:
- `var` creates globals in browsers.
- `let`/`const` do not attach to global object.

## 7. Data Types

### Primitive
- `Number`, `BigInt`, `String`, `Boolean`, `Symbol`, `undefined`, `null`

### Reference
- `Object`, `Array`, `Function`, `Date`, etc.

### typeof examples
- `typeof null === "object"` (legacy behavior)
- `typeof function(){} === "function"`

### Copy behavior
- Primitives: copy by value.
- Objects/arrays: copy by reference.

### Shallow copy
- Spread (`{...obj}`, `[...arr]`), `Object.assign`.

### Deep copy
- `JSON.parse(JSON.stringify(obj))` (limited)
- `structuredClone(obj)` (modern)

## 8. Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Comparison: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`
- Assignment: `=`, `+=`, `-=`, etc.
- Unary: `typeof`, `void`, `delete`, `++`, `--`
- Ternary: `condition ? a : b`

## 9. Functions

- Declaration: `function f(){}` (hoisted).
- Expression: `const f = function(){}`.
- Arrow: `const f = () => {}` (lexical `this`).
- Parameters: default, rest (`...args`).
- Return: an expression or `undefined` when omitted.

## 10. Scope & Closures

- Global scope, function scope, block scope.
- Closure: function capturing outer lexical variables.
- Useful for data privacy and function factories.

## 11. Asynchronous JavaScript

- Callbacks: `setTimeout`, event handlers.
- Promises: `new Promise`, `.then`, `.catch`, `.finally`.
- async/await: clear async flow with `try/catch`.

## 12. DOM Basics

- `document.getElementById`, `querySelector`, `createElement`.
- Event listeners: `addEventListener('click', handler)`.
- DOM manipulation: `textContent`, `innerHTML`, `appendChild`.

## 13. Modern ES6+ Features

- Template literals: `` `Hello ${name}` ``.
- Destructuring: arrays and objects.
- Spread/rest operators.
- `class` syntax.
- Modules: `import`/`export`.
- Optional chaining `?.`, nullish coalescing `??`.

## 14. Best Practices

- Use `===`/`!==`.
- Prefer `const` and `let` over `var`.
- Keep functions small and focused.
- Avoid global variables.
- Use linting (`ESLint`) and formatting (`Prettier`).

## 15. Conclusion

JavaScript is versatile and widely-used for web, server, and tooling. Mastering core concepts (scope, async, types, and modern ES syntax) sets a strong foundation.

## 16. Suggested Next Topics

- Advanced closures and prototypes.
- Event loop and microtasks.
- Performance optimization and memory management.
- TypeScript for static typing.
- Frameworks: React, Vue, Angular.

## 17. Contribute

1. Fork repository.
2. Create feature branch: `git checkout -b feature/docs`
3. Edit `Javascript/README.md`.
4. Commit: `git commit -m "docs: improve Javascript README"`.
5. Push and open PR.

## 18. License

MIT License. See `LICENSE` file for details.
