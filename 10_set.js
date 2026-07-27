const nums = new Set();
nums.add(10);
nums.add(20);
nums.add(30);
nums.add(20); // ignored (duplicate)
nums.size; // 3
nums.has(20); // true
nums.has(100); // false
nums.delete(20); // true
nums.clear(); // removes everything
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = new Set(arr);
console.log(unique); // Set(5) {1,2,3,4,5}

const fruits = new Set(["Apple", "Banana", "Mango"]);
for (const fruit of fruits) {
    console.log(fruit);
}
fruits.forEach((value) => console.log(value));
