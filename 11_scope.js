var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER: ", a); // 10
}

console.log(a); // 300
console.log(b); // ReferenceError: b is not defined
console.log(c); // var is function scoped, so c is 30 overwriting the previous c = 300

const g = "global";
function outer() {
    const o = "outer";
    function inner() {
        const i = "inner";
        console.log(g, o, i); // ✅ sees all three (scope chain)
    }
    inner();
    // console.log(i);        // ❌ ReferenceError — i is inner-only
}
outer();

// ++++++++++++++++++ interesting ++++++++++++++++++
addone(5); // 6
function addone(num) {
    return num + 1;
}

addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2;
};
