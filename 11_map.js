const user = new Map();
user.set("name", "Keshav");
user.set("age", 22);
user.set(true, "developer");

user.get("name"); // "Keshav"
user.get(true); // "developer"
user.has("age"); // true
user.delete("age");
user.size; // 2

// Any Datatype can be a Key
const map = new Map();
map.set(1, "number");
map.set("1", "string");
map.set(true, "boolean");
// All three keys are different.
// ________________________________________
// Object as a Key
const person = { id: 1 };
const map = new Map();
map.set(person, "Employee");
map.get(person);
// "Employee"
// Objects are compared by reference, not by value.
// ________________________________________
// Looping through a Map
const map = new Map([
    ["name", "Keshav"],
    ["city", "Delhi"],
]);
for (const [key, value] of map) {
    console.log(key, value);
}
// Or;
map.forEach((value, key) => {
    console.log(key, value);
});
