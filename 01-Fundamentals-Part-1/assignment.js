// LECTURE: Values and Variables
const country = "India";
const continent = "Asia";
let population = 1407600000;

console.log(country, continent, population);

// LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = "Hindi";

// LECTURE: Basic Operators
console.log(population / 2);

population++;
console.log(population / 2);

let populationFinland = 6000000;
console.log(population > populationFinland);

let averagePopulationOfACountry = 33000000;
console.log(averagePopulationOfACountry > population);

let description = 'India is in Asia, and its 703 million people speak Hindi';

// Coding Challenge #1
// Case 1
// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnsWeight = 92;
// let johnsHeight = 1.95;
// Case 2
let marksWeight = 95;
let marksHeight = 1.88;
let johnsWeight = 85;
let johnsHeight = 1.76;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI, markHigherBMI); // Case 1: true, Case 2: false

// LECTURE: Strings and Template Literals
population--;
description = `${country} is in ${continent}, and its ${(population / 2)/1000000} million people speak ${language}`;
console.log(description);