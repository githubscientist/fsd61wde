# React- Day -1: ES5 vs ES6

## Contents:

[x] ES5 vs ES6  
[x] Scoping - var vs let vs const  
[x] arrow functions  
[x] use of this keyword(lexical scoping)  
[x] template literals  
[x] spread & rest prarameter  
[x] array & object destructure  
[x] property shorthand  
[x] module import & export  
[ ] Class in Javascript

Pre-read:
http://es6-features.org/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## ES5 vs ES6

### 1. ES5

- ES5 is the fifth version of ECMAScript, which is a standard for JavaScript.
- ES5 was released in 2009.
- ES5 is fully supported in all modern browsers.
- ES5 is the standard for client-side JavaScript development.

### 2. ES6

- ES6 is the sixth version of ECMAScript, which is a standard for JavaScript.
- ES6 was released in 2015.
- ES6 is supported in all modern browsers.
- ES6 is the new standard for JavaScript development.
- ES6 is very popular because it has many new features that make JavaScript programming easier and more efficient.
- Features:
  - Arrow functions
  - let and const
  - Classes
  - spread and rest operator
  - Destructuring
  - property shorthand
  - template literals
  - modules
  - default parameters

#### var vs let vs const

var:

- var is function scoped.
- var can be re-declared and updated.

let:

- let is block scoped.
- let can be updated but not re-declared.

const:

- const is block scoped.
- const cannot be updated or re-declared.
- const must be initialized during declaration.
- const objects can be updated but not re-declared or reassigned.

### 3. Functions

- Functions are a block of code that will be executed when it is called.

- Function Types:

  - Named Functions
  - Anonymous Functions
  - Arrow Functions
  - Immediately Invoked Function Expressions (IIFE)

- Arrow Functions:
  - Arrow functions are a new way to write functions in ES6.
  - Arrow functions do not have their own this keyword.
  - Arrow functions are always anonymous.
  - Arrow functions are more concise than traditional functions.

### 4. Template Literals

- Template literals are a new way to write strings in ES6.
- Template literals use backticks instead of quotes.
- Template literals can contain placeholders.
- helps to embed expressions into strings.
- helps to write multi-line strings.

### 5. Spread & Rest Parameter

- both are denoted by three dots (...)
- Spread Operator:
  - The spread operator is used to spread an array into individual elements.
  - The spread operator is used to spread an object into individual key-value pairs.
  - use cases: array concatenation, object merging, array cloning, object cloning.
- Rest Parameter:
  - The rest parameter is used to collect multiple elements into an array.
  - The rest parameter is used to collect multiple key-value pairs into an object.
  - use cases: destructuring, function arguments.

### 6. Destructuring

- Destructuring is a new way to extract values from arrays and objects.
- Destructuring is a new way to assign values to variables.

### 7. Property Shorthand

- Property shorthand is a new way to create objects in ES6.

Example:

```javascript
let name = "John";
let age = 30;

let person = {
  name,
  age,
};

console.log(person); // {name: "John", age: 30}
```

### 8. Modules

- Modules are a new way to organize code in ES6.
- Modules are a new way to export and import code in ES6.
- Modules are a new way to share code between files in ES6.

Example:

```javascript
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.mjs
import { add, subtract } from "./math.mjs";

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

package.json:

```json
{
  "type": "module"
}
```

// CommonJS

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// app.js
const { add, subtract } = require("./math.js");

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

### 9. Class in Javascript

- Classes are a new way to create objects in ES6.
- Collections of objects are called classes.
- Classes are a blueprint or template for creating objects.

this keyword:

- The this keyword refers to the object that is calling the function.
- The this keyword is used to refer to the current instance of the class.
