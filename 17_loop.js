for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip THIS iteration
    if (i === 4) break; // exit the loop entirely
    console.log(i); // 0, 1, 3
}

let n = 0;
while (n < 3) {
    console.log(n);
    n++;
} // check, then run

do {
    console.log("runs once even if...");
} while (false); // run, then check

const arr = ["a", "b", "c"];
for (const val of arr) {
    console.log(val);
} // VALUES: "a","b","c"   ← use for arrays

for (const idx in arr) {
    console.log(idx);
} // KEYS/indexes: "0","1","2"

arr.forEach((val, idx) => {
    console.log(val, idx);
}); // callback per item (can't break out)

const obj = { x: 1, y: 2 };
for (const key in obj) {
} // object keys: "x","y"   ← use for objects

const nums = [1, 2, 3, 4, 5];

// map → transform each item, SAME length
const doubled = nums.map((n) => n * 2); // [2,4,6,8,10]

// filter → keep items that pass a test
const evens = nums.filter((n) => n % 2 === 0); // [2,4]

// reduce → fold everything into ONE result
const total = nums.reduce((acc, n) => acc + n, 0); // 15
//   acc = running result (starts at the 2nd arg, 0);  n = current item

// they chain beautifully
const sumOfDoubledEvens = nums
    .filter((n) => n % 2 === 0) // [2,4]
    .map((n) => n * 2) // [4,8]
    .reduce((a, n) => a + n, 0); // 12
