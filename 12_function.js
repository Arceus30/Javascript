// declaration (hoisted — callable before its line)
function sayMyName() {
    console.log("Keshav");
}
sayMyName(); // Keshav

function add(a, b) {
    return a + b;
}
const result = add(3, 5); // 8

// expression (NOT hoisted — stored in a variable)
const mul = function (a, b) {
    return a * b;
};

// arrow function (compact; special 'this' — see below)
const sub = (a, b) => a - b; // two params, one expression
const square = (n) => n * n; // one param, one expression

// default parameters
function greet(name = "guest") {
    return `Hi ${name}`;
}

// rest parameter — collect “the rest” into an array
function sum(...nums /* nums become an array*/) {
    return nums.reduce((t, n) => t + n, 0);
}
sum(1, 2, 3, 4); // 10

const user = {
    username: "hitesh",
    prices: 199,
};

function handleObject(anyobject) {
    console.log(
        `Username is ${anyobject.username} and price is ${anyobject.price}`,
    );
}
handleObject(user);
