let js = "amazing";
console.log(40 + 79 - 32 * 2);

// Referencing a variable.
let firstName = "Yudhishthir";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable Naming Conventions
// let 3years = 3; // Throws: Uncaught SyntaxError: Invalid or unexpected token
// let bed&breakfast; // Throws: Uncaught SyntaxError: Unexpected token '&'
let bed_breakfast = "Air BnB"; // Cannot use symbols in names.
// let function; // Throws: Uncaught SyntaxError: Unexpected token 'function'
let $function = 34; // Cannot use reserved words as names, but if we still want to then we prefix the keyword by '_' or '$'.

let person = "Jonas" // Should not use Person as it is a common notation for Classes (in OOP).
let PI = 3.1415; // We use all caps for constants that are never going to change.

// Use descriptive names rather than vague names.
let myFirstJob = "Ruby on Rails Developer"; // Descriptive.
let mySecondJob = "React Developer"; // Descriptive.

let job1 = "Ruby on Rails Developer"; // Vague.
let job2 = "React Developer"; // Vague.

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun); // boolean

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 13); // number
console.log(typeof "Yudhishthir"); // string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // string

let year;
console.log(year); // undefined
console.log(typeof year); // undefined
year = 1991;
console.log(typeof year); // number

console.log(typeof null); // object (weird behaviour of JavaScript)

// Defining Variables
let age = 30; // Mutable Variables
age = 31;

const birthYear = 1993; // Immutable Variables
// birthYear = 1994; // Throws: Uncaught TypeError: Assignment to constant variable.

// const job; // Throws: Uncaught SyntaxError: Missing initializer in const declaration

var job = "Ruby on Rails Developer"; // Should not be used now. Was used earlier in JS ES5.
job = "React Developer";

lastName = "Bhunwal"; // Creates a property on golobal object (you don't want this).
console.log(lastName);

// Operators
const now = 2023;
const ageJohnDoe = now - 1990;
const ageJaneDoe = now - 1994;
console.log(ageJohnDoe, ageJaneDoe);

console.log(ageJohnDoe * 2, ageJaneDoe / 10, 2 ** 2);

const greeting = "Welcome!";
console.log(firstName + ', ' + greeting); // String concatenation.

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 2; // 50
x++; // 51
x--; // 50
x--; // 49
console.log(x);

// Comparison Operators
console.log(ageJohnDoe > ageJaneDoe); // true
console.log(ageJaneDoe >= 18); // true

// Check Operator Precedence (in MDN Docs)
