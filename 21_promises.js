const promiseFour = new Promise(function (resolve, reject) {
    // Do an async task: DB calls, cryptography, network
    setTimeout(function () {
        let ok = true;
        if (ok) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        // it catches errors thrown by all the promises or .then() above it
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// promise and async - await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// promise.all: run promises in PARALLEL, wait for all
// it takes an array of promises and executes them (i.e, either resolve or reject them, all in parallel)
const [a, b] = await Promise.all([fetch(urlA), fetch(urlB)]);
