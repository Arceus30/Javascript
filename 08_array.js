const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]); // 1
console.log(myArr[myArr.length - 1]); // 5
console.log(myArr.length); // 3

// Array methods

// add / remove
myArr.push(40); // add to END      → [10,20,30,40]
myArr.pop(); // remove from END  → returns 40
myArr.unshift(5); // add to START    → [5,10,20,30]
myArr.shift(); // remove from START

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

// slice, splice
// the tricky pair
newArr1 = myArr.slice(1, 3); // COPY of items 1..2, original untouched
newArr2 = myArr.splice(1, 2); // REMOVES 2 items from index 1, MUTATES original

console.log(myArr);
console.log(newArr1);
console.log(newArr2);

[(1, 2, 3)].join("-"); // "1-2-3"
[(3, 1, 2)].sort(); // sorts as STRINGS by default!

/* */
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // add array to array
console.log(marvel_heros); // ["thor", "Ironman", "spiderman", Array(3)]
console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc_heros); // add array to array
console.log(allHeros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
const all_new_heros = [...marvel_heros, ...dc_heros]; // add array to array
console.log(all_new_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({ name: "hitesh" })); // ['[object Object]'] interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

// array destructuring
const [first, second] = [10, 20, 30]; // first=10, second=20
const [head, ...rest] = [1, 2, 3, 4]; // head=1, rest=[2,3,4]
