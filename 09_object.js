const mySym = Symbol("key1");
// object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email); // dot notation
console.log(JsUser["email"]); // bracket notation
console.log(JsUser["full name"]); // bracket notation (bracket notation — needed for spaces/dynamic keys)
console.log(JsUser[mySym]); // symbol key

const key = "age";
console.log(user[key]); // 22   ← dynamic key lookup

// Object.freeze(JsUser) // freeze the object, so that we cannot change the properties of the object

user.city = "Delhi"; // add
delete user.age; // remove
console.log("name" in user); // true

console.log(Object.keys(user)); // ["name","fav lang","greet","city"]
console.log(Object.values(user)); // ["Keshav","JS","function greet() { console.log('Hello'); }","Delhi"]
console.log(Object.entries(user)); // [["name","Keshav"], ...]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

JsUser.greeting = function () {
    console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/* */
// Object constructor -> Singleton Object
const tinderUser = new Object();
tinderUser.id = "123abc"; // add key value pair
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary",
        },
    },
}; // nested object

console.log(regularUser.fullname.userfullname.firstname); // hitesh
console.log(regularUser.fullname?.userfullname?.firstname); // conditional chaining (optional chaining) - if any of the property is undefined, it will return undefined instead of throwing an error

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj4 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// Object.assign() and spread operator (...) are used to merge objects. Both will return a new object.
// Object.assign(target, source) takes a target object and one or more source objects, and copies the properties from the source objects to the target object. It returns the target object.
const obj5 = Object.assign({}, obj1, obj2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj6 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// object destructuring
const user = { name: "Keshav", city: "Alwar", role: "SDE" };
const { name, city } = user; // name="Keshav", city="Alwar"
const { role: job } = user; // rename → job="SDE"
const { salary = "TBD" } = user; // default if missing

// JSON — the text format APIs speak
const text = JSON.stringify(user); // object → string (to send)
const back = JSON.parse(text); // string → object (when received)
