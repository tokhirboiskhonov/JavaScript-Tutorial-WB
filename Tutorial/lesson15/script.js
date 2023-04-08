// ** 15-dars **
// ---- Recursion or Recursion function ----
// -- 1 --
// function recurse(number) {
//     console.log(number);
//     let newNumber = number - 1;
//     if (newNumber > 0) {
//         recurse(newNumber);
//     }
// }

// recurse(5);

// -- 2 --

// function findSum(n) {
//     if (n > 0) {
//         return n + findSum(n - 1);
//     } else return n;
// }

// console.log(findSum(5));

// -- 3 --

// let person = {
//     id: 1,
//     name: "Odil",
//     age: 78,
//     child: {
//         id: 1,
//         name: "Ali",
//         age: 48,
//         child: {
//             id: 1,
//             name: "Umar",
//             age: 20,
//         },
//     },
// };

// let sum = 0;

// function getAge(obj) {
//     sum += obj.age;
//     if (obj.child) {
//         getAge(obj.child);
//     }
// }

// getAge(person);
// console.log(sum);

// ---- Closure ----

// function parent() {
//     let num = 10;

//     function child() {
//         console.log(num);
//     }

//     child();
// }
// parent();

// ---- Higher Order Function ----
// HOF -->  parametr sifatida function qabul qiladi. (forEach, map, filter, find).

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((num) => console.log(num + 1));

// ---- Callback Function ---- parametr sifatida keladigan function, bu callback function diyiladi

// let arr = [1, 2, 3, 4, 5];
// let filter = arr.filter((n) => n > 1);
// console.log(filter);

// ---- Getter, Setter ----
// "get" ni vazifasi objectni ichida berilgan funksiyani(methodni) oddiy property qilib chaqirib olish uchun.
// "set" ni vazifasi esa usha objectni tashqarisida yangi ma'lumot qb berib qoyish. Xar doim parametr oladi.

// const person1 = {
//     firstName: "Shaxboz",
//     lastName: "Yaxyoyev",

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(value) {
//         const values = value.split(" ");
//         this.firstName = values[0];
//         this.lastName = values[1];
//     },
// };

// person1.fullName = "Tokhir Boiskhonov";

// console.log(person1.fullName);

// ---- Curry function ----

// -- 1 --

// const addition = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         };
//     };
// };

// console.log(addition(1)(2)(3));

// -- 2 --

function sendRequest(greet) {
    return function (name) {
        return function (message) {
            return `${greet} ${name} ${message}`;
        };
    };
}

console.log(sendRequest("Salom")("Tokhir")("Telefonga qaravoring shep!"));
