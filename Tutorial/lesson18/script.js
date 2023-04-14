// ** 18-dars **

// -------- Sunchrounous vs Asynchronous --------

// JS => synchroun programming language, blocking, single-thread

// Synchroun

// function a() {
//     console.log("A");
// }

// function b() {
//     console.log("B");
// }

// a();
// b();

// Blocking
// Single thread

// Browser Web Apis => setTimeOut, setInterval, user interaction => addEventListener
// Backend dan ma'lumot kelishi jarayonlarini boshqarishda => callback, promise, async/await

// --- setTimeout, setInterval ---

// console.log("1");

// setTimeout(() => {
//     console.log("Hello G20 group");
// }, 2000);

// setTimeout(() => {
//     console.log("Hello G20 group");
// });

// setInterval(() => {
//     let date = new Date();
//     console.log(
//         `Current time:
//         ${date.getHours()}
//         ${date.getMinutes()}
//         ${date.getSeconds()}
//         `
//     );
// }, 1000);

// console.log("2");

// --- Error handling --- // try catch, error parametri object xisoblanadi...

// try {
// const add = (a, b) => {
// return a + b;
// };
// console.log(add(10, 20)); //output: 30
// } catch (error) {
// console.log(`You have to fixed this error: ${error.name}`); // ReferenceError
// console.log(`You have to fixed this error: ${error.message}`); // add is not defined
// console.log(`You have to fixed this error: ${error.stack}`); //bu esa errorni to'liq qilib chiqarib beradi
// console.log("Error");
// }

// --- Callback => 2 xil bo'ladi: async va sync.
// synchronous => map, filter, forEach, reduce
// asynchronous => Backend dan handle qilinganda.

console.log("Started");

const users = {
    id: 1,
    password: 12345,
    username: "Firdavs",
};

const Facebook = (password, username, callback) => {
    setTimeout(() => {
        if (users.password === password && users.username === username) {
            callback("Welcome to Facebook");
        } else {
            callback("Password or username is wrong");
        }
    }, 3000);
};

const user = Facebook(12345, "Firdavs", (data) => {
    console.log(data);
    console.log("Finished");
});
// console.log(user); //undefined chiqadi, sababi "Facebook" functionni async function emas ichida setTimeout ishlasa ham.
