let score = "33"; // "33" => 33
let score = "33abc"; // "33abc" => NaN (Not a Number — a number-typed value meaning “failed”)
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(Number("")); // 0
console.log(Number(true)); // 1 //  true => 1; false => 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(String(42)); // "42"

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true  ← non-empty string is truthy!

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3); // "hello hitesh"

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122" because "1" + 2 => "12", then "12" + 2 => "122"
console.log(1 + 2 + "2"); // "32" because 1 + 2 => 3, then 3 + "2" => "32"
console.log("5" - 2); // 3      (- forces numbers)
console.log("5" * "2"); // 10
console.log(true + 1); // 2

console.log(((3 + 4) * 5) % 3); // Use of parentheses is appreciated to set the order of operations

console.log(3 + ((4 * 5) % 3)); // not appreciated, but it works. 4 * 5 => 20, 20 % 3 => 2, 3 + 2 => 5
console.log(+true); // not appreciated, but it converts true to 1
console.log(+""); // not appreciated, but it converts "" to 0
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // not appreciated, but it works. num1 = num2 = num3 = 4

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"
