function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username); // arguments are passed one by one.
    // In modern JavaScript, the spread operator (...) often replaces many use cases for .apply().
    this.email = email;
    this.password = password;
}

function createUser2(username, email, password) {
    SetUsername.apply(this, [username]); // arguments are passed as single array or array-like object.
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

const chai2 = new createUser2("chai", "chai@fb.com", "123");
console.log(chai2);
