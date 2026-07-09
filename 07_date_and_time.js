// Dates

const now = new Date(); // current date & time
console.log(now); // e.g. "Wed Jan 14 2026 12:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(now.getFullYear()); // 2026
console.log(now.getMonth()); // 0–11  ← January is 0, not 1!
console.log(now.getDate()); // day of month 1–31
console.log(now.getDay()); // day of week 0 (Sun) – 6 (Sat)
console.log(now.getHours()); // 0–23
console.log(now.toString()); // "Wed Jan 14 2026 12:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(now.toDateString()); // "Wed Jan 14 2026"
console.log(now.toLocaleString()); // "1/14/2026, 12:00:00 PM" (in the US)
console.log(now.toLocaleString("en-IN")); // "14/01/2026, 12:00:00 PM" (in India)
console.log(typeof now); // "object"

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toLocaleString()); // "1/23/2023, 12:00:00 AM"
myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString()); // "1/23/2023, 5:03:00 AM"
myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toLocaleString()); // "1/14/2023, 12:00:00 AM"
myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString()); // "1/14/2023, 12:00:00 AM"

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1673683200000
console.log(myCreatedDate.getTime()); // 1673683200000
console.log(Math.floor(Date.now() / 1000)); // 1673683200
console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
    }),
); // "Wednesday"
