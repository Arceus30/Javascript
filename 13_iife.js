// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon is important here to end the statement and function execution

(function () {
    // unnamed IIFE
    const secret = "hidden"; // trapped inside — doesn't pollute global scope
    console.log("runs immediately");
})();

// arrow IIFE
(() => {
    console.log("also runs now");
})();

((name) => {
    console.log(`${name} also runs now`);
})("Keshav");
