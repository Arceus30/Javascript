const score = 400;
console.log(score); // 400
const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(2)); // 1.2e+2
console.log(otherNumber.toPrecision(3)); // 123
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++
const n = 42.7;

console.log(Math); // Math object
Math.round(n); // 43
Math.floor(n); // 42
Math.ceil(n); // 43
Math.trunc(n); // 42  (chops decimals)
Math.max(3, 9, 1); // 9
Math.min(3, 9, 1); // 1
Math.abs(-5); // 5
Math.pow(2, 10); // 1024   (or 2 ** 10)
Math.sqrt(144); // 12

console.log(0.1 + 0.2); // 0.30000000000000004  ← floating-point rounding
console.log((0.1 + 0.2).toFixed(2)); // "0.30"  (string, 2 decimals)

// random integer in [min, max]
console.log(Math.random()); // random float in [0, 1)
console.log(Math.random() * 10 + 1); // random float in [1, 11)
console.log(Math.floor(Math.random() * 10) + 1); // random integer in [1, 10]

const max = 20;
const min = 10;
const rand = Math.floor(Math.random() * (max - min + 1)) + min; // random integer in [10, 20]
console.log(rand); // random integer between 10 and 20
