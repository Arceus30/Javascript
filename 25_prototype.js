// prototype of function is an object
function multipleBy5(num) {
    return num * 5;
}
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}
User.prototype.greeting = function () {
    console.log(`Welcome ${this.username}`);
};

const userOne = new User("hitesh", 12, true); // new keywords links the prototype
const userTwo = User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
console.log(userTwo);
console.log(userOne instanceof User);
userTwo.greeting(); // it will throw error as prototype is not linked with this object
userOne.greeting(); // no error

// proto and inheritance
const User = {
    name: "chai",
    email: "chai@google.com",
};
const Teacher = {
    makeVideo: true,
};
const TeachingSupport = {
    isAvailable: false,
};
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
};
Teacher.__proto__ = User;
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
