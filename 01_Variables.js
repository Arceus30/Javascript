const accountId = 144553;
// accountId = 2 // not allowed ❌ TypeError: Assignment to constant variable

let accountEmail = "hitesh@google.com";

var accountPassword = "12345";
accountCity = "Jaipur";
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let accountState; // undefined

// can reassign the value of let and var but not const
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

const user = { age: 22 };
user.age = 23; // ✅ allowed! const locks the BINDING, not the object's contents

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState,
]); // console.table() is used to display data in tabular format in the console
