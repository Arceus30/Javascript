const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this refers to the context of the object calling the method, which is the user object
    },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); // this refers to the global context, empty object outside of browser context and window object in browser context

function chai() {
    let username = "hitesh";
    console.log(this.username); // will return undefined because username is not a property of the global object
    // this refers to undefined since there is no referencing context
    // in non-strict mode, 'this substitution' takes place and this === global object
    // in strict mode, no 'this subsitution' so, this === undefined
}
chai();

const chai2 = function () {
    let username = "hitesh";
    console.log(this.username); // will return undefined because username is not a property of the global object
};
chai2();

const chai3 = () => {
    let username = "hitesh";
    console.log(this); // this refers to the global context, empty object outside of browser context and window object in browser context
    console.log(this.username); // will return undefined because username is not a property of the global object
};
chai3();

const addTwo1 = (num1, num2) => {
    return num1 + num2; // return is required when using curly braces in arrow functions
};
const addTwo2 = (num1, num2) => num1 + num2;
const addTwo3 = (num1, num2) => num1 + num2; // return an object literal, parentheses are required to avoid ambiguity with block statements and return is implicit (not required)
const addTwo4 = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo1(3, 4));
console.log(addTwo2(3, 4));
console.log(addTwo3(3, 4));
console.log(addTwo4(3, 4));

// arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope. In the case of arrow functions, 'this' is lexically bound, meaning it uses 'this' from the surrounding code where the arrow function is defined.

const obj = {
    a: 10,
    b: function () {
        console.log(this); // object (obj is the referencing context)
    },
    c: () => {
        console.log(this); // global / window (this captured from surrounding context)
    },
    d: function () {
        function abc() {
            console.log(this); // global / window (abc is a function called normally so this === global / window)
        }
        abc();
    },
    e: function () {
        const abc = () => {
            console.log(this); // obj (this === obj arrow function took this from the surrounding context and in this case obj.e function's this === obj)
        };
        abc();
    },
    f: () => {
        function abc() {
            console.log(this); // global / window (abc is a function called normally so this === global / window)
        }
        abc();
    },
    g: () => {
        const abc = () => {
            console.log(this); // global / window (arrow function abc checks the surrounding context and obj.g function's surrounding context shows this === global / window)
        };
        abc();
    },
};
