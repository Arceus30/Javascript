const id = setTimeout(() => console.log("once, later"), 2000);
// clearTimeout(id); // cancel before it fires

const sayKeshav = function () {
    console.log(Keshav);
};
const id2 = setTimeout(sayKeshav, 2000); // function is not called only its reference is passed
// clearTimeout(id2); // cancel before it fires

const sayName = function (name) {
    console.log(name);
};
const id3 = setTimeout(sayKeshav, 2000, "Keshav"); // after timer the rest of the parameters are passed to the function as arguments
// clearTimeout(id3); // cancel before it fires

const t = setInterval(() => console.log("every 1s"), 1000);
// clearInterval(t); // stop the repetition

const sayDate = function () {
    sayKeshav();
    console.log(Date.now());
};
const t2 = setInterval(sayDate, 2000); // function is not called only its reference is passed
// clearTimeout(t2); // cancel before it fires

const sayDate = function (name) {
    sayName(name);
    console.log(Date.now());
};
const t3 = setInterval(sayDate, 2000, "Keshav"); // after timer the rest of the parameters are passed to the function as arguments
// clearTimeout(t3); // cancel before it fires

console.log("1");
setTimeout(() => console.log("2"), 0); // macrotask
Promise.resolve().then(() => console.log("3")); // microtask
console.log("4");

// Output: 1, 4, 3, 2
// sync (1,4) → microtasks (3) → macrotasks (2), even with 0ms delay
