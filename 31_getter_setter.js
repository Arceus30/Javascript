class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase(); // a separate variable is created in order to prevent the race condition between constructor and getter
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}hitesh`;
    }

    set password(value) {
        this._password = value;
    }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);

// old method of creating getters and setters:
function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        },
    });
    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        },
    });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);
