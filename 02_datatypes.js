// number => (-(2^53 - 1)) to (2^53 - 1)
// bigint => huge integers
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

let name = "hitesh";
console.log(typeof name); // "string"

let age = 18;
console.log(typeof age); // "number"

let isLoggedIn = false;
console.log(typeof isLoggedIn); // "boolean"

let state;
console.log(typeof undefined); // "undefined"
console.log(typeof state); // "undefined"

console.log(typeof null); // "object"   ← famous historical BUG in JS, kept for compatibility
console.log(typeof function () {}); // "function"

const user = { age: 22 };
console.log(typeof {}); // "object"
console.log(typeof user); // "object"

console.log(typeof []); // "object"   ← arrays are objects; use Array.isArray([]) to be sure
