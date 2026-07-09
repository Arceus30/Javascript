// if
const score = 200;
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
//or
if (score > 100) console.log("User power: fly"); // implicit scope valid for single statement

// if / else
const temperature = 41;
if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// if / else if / else
if (score >= 90) grade = "A";
else if (score >= 60) grade = "B";
else grade = "F";

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// ternary — a compact if/else that returns a value
const msg = age >= 18 ? "adult" : "minor";

// switch — clean multi-branch on one value
switch (day) {
    case "Sat":
    case "Sun":
        type = "weekend";
        break; // break stops fall-through
    default:
        type = "weekday";
}

// short-circuit tricks
const port = userPort || 3000; // fallback if userPort is falsy
const name2 = user?.profile?.name; // optional chaining — no crash if missing
const seats = count ?? 0; // nullish: fallback only if null/undefined
