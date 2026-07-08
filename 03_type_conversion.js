let score = "33"; // "33" => 33
let score = "33abc"; // "33abc" => NaN (Not a Number — a number-typed value meaning “failed”)
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

Number(""); // 0
Number(true); // 1 //  true => 1; false => 0
Number(null); // 0
Number(undefined); // NaN

String(42); // "42"

Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("0"); // true  ← non-empty string is truthy!
