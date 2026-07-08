console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log("2" === 2); // false  (number vs string)
console.log(2 === 2); // true

console.log("2" == 2); // true   (== converts "5" to 5)
console.log(2 == 2); // true   (number vs number)

console.log(0 == false); // true   (both coerce to 0)

// unpredictable behavior of undefined and null in comparisons
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(null == undefined); // true   (special rule)
console.log(null === undefined); // false

console.log("" == 0); // true   ← the kind of bug == creates
