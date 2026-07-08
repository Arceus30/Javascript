const first = "Keshav";
const role = "SDE";

// template literals (backticks) — the modern way to build strings
const line = `${first} is training to be an ${role}`;

console.log(first[0]); // "K"
console.log(first.charAt(2)); // "e"
console.log(first.__proto__); // prototype of string
console.log(first.length); // 6
console.log(first.toUpperCase()); // "KESHAV"
console.log(first.indexOf("s")); // 2
const newFirst = first.substring(0, 4);
console.log(newString);
console.log(first.slice(0, 3)); // "Kes"  (start, end-exclusive)
console.log("  hi  ".trim()); // "hi"
console.log("abc".replace("a", "X")); // "Xbc"
console.log("js".includes("j")); // true
console.log("a,b,c".split(",")); // ["a","b","c"]
