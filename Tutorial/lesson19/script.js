// ** 19-dars **

// Promise => Object, and existed 3 states

// 1-Pending
// 2-Fullfilled
// 3-Rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;

//     if (!error) {
//         resolve("resolved the promise");
//     } else {
//         reject("rejected the promise!");
//     }
// });
// // console.log(myPromise);

// myPromise
//     .then((value) => {
//         return value + " " + 100;
//     })
//     .then((newValue) => console.log(newValue))
//     .catch((err) => console.log(err));

// console.log("Started");

// const users = {
//     id: 1,
//     password: 12345,
//     username: "Firdavs",
// };

// const facebook = (password, username) => {
//     let user =  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (users.password === password && users.username === username) {
//                 resolve("Welcome to Facebook");
//             } else {
//                 reject("Password or username is wrong");
//             }
//         }, 3000);
//     });

//     user.then((response) => {
//             console.log(response);
//         }).catch((err) => {
//             console.log(err);
//         }).finally(()=>console.log('Finished!'));
// };

// facebook(12345, "Firdavs");

// ========================== async/await ==========================

// const facebook = (password, username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (users.password === password && users.username === username) {
//                 resolve("Welcome to Facebook");
//             } else {
//                 reject("Password or username is wrong");
//             }
//         }, 3000);
//     });
// };

// const test = async () => {
//     try {
//         let user = await facebook(12345, "Firdavs");
//         console.log(user);
//     } catch (err) {
//         console.log("Error 404");
//     } finally {
//         console.log("Finally!");
//     }
// };

// test();

// ========================== async/await within fetch ==========================

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         throw new Error("This page is not defined");
//     })
//     .catch((err) => console.log(err));

const myAsyncFunc = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        console.log(jsonData);
        throw new Error("Error");
    } catch (err) {
        console.log(err);
    }
};

console.log(myAsyncFunc());
