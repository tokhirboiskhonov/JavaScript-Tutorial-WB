// ** 9-dars **

// Object basics 2

// -- 1 --
// const acc1 = {
//     name: "WebBrain IT Academy",
//     major: "Front-End",
// }


// const acc2 = {
//     name: "WebBrain IT Academy",
//     major: "Front-End",
// }

// console.log(acc1 === acc2); //false

// let acc3 = acc1;

// acc1.founded = 2020;

// console.log(acc1);
// console.log(acc3);
// console.log(acc1 === acc3);

// -- 2 --

// const acc4 = {
//     name: "Najot Ta'lim",
//     major: "Frontend & Backend",
// }

// const acc5 = structuredClone(acc4);

// console.log(acc5); //{ name: "Najot Ta'lim", major: 'Frontend & Backend' }

// -- 3 --

// let brand = "webbrain academy",
//     major = "frontend";

//If brand and major, these names of variable same with object's keys, so we can abbreviate key in Object.

// const education = {
//     brand: 'WBrain Academy',
//     major: 'FE, BE',
// }

// console.log('brand' in education); //result is true, because 'brand' this key in Object"education"
// console.log(education); //{ brand: 'webbrain academy', major: 'frontend' }

// -- 4 --

// const obj1 = {
//     name: 'Tokhir',
//     surname: 'Boiskhonov',
//     age: 23,
//     properties: {
//         location: 'Location 1'
//     }
// }

// const obj2 = Object.assign({}, obj1); //Shallow clone, it is not Deep clone. Bu Object.assign nested object bo'lganda clone qilolmidi, uni orniga structuredClone() ishlatish kere.
// obj2.name = 'Khusan';
// obj2.age = 25;
// obj2.properties.location = 'Location 2'
// // console.log(obj2);
// console.log(obj1);

//========

// const obj2 = {};
// obj1.name = "Ismoil" //can update the data

// Object.assign(obj2, obj1);

//========


// -- 5 --

// const obj = {
//     name: "Tokhir",
//     surnmae: "Boiskhonov",
//     majot: "Software engineering",
//     opportunity: "Student",
//     age: 23,
// }

// for(const key in obj){
//     console.log(obj[key]); //tokhir, boiskhonov, software engineering, student, 23
// }

// ===== Spread operator =====

// const obj = {
//     name: "John",
//     status: "Developer",
//     age: 30,
// }
// const obj2 = {status: "Engineer", ...obj}; //{ status: 'Develoepr', name: 'John', age: 30 }, Bu xolatda spread operator ishlamidi. sababi order tori kemidi.
// console.log(obj2);
// // const obj2 = {...obj}; // { name: 'John', status: 'Develoepr', age: 30 }
// // const obj2 = {...obj, name: "Due" , status: "Frontend", hobby: "Hockey"}

// // console.log(obj2);

// ===== Destructure =====

// const emplayee = {
//    developers: {
//     0 : {
//         id: 1,
//         fullname: 'John Doe',
//         occupation: 'Programmer',
//         age: 23
//     },

//     1 : {
//         id: 2,
//         fullname: 'Bruce Lee',
//         occupation: 'Coach',
//         age: 53
//     },

//     2 : {
//         id: 3,
//         fullname: 'Ip Man',
//         occupation: 'Fighter',
//         age: 123
//     }
//    }
// }

// const {
//     developers: {
//     1: {
//         id,
//         fullname,
//         occupation: kasb,
//         age
//     }
// }} = emplayee

// console.log(id);
// console.log(fullname);
// console.log(kasb);
// console.log(age);

// -------------------- Object Advanced --------------------

// let obj = {
//     name: 'WebBrain',
//     age: 23,
//     child: {
//         name: 'Eshmat',
//         age: 11,
//         child: {
//             name: 'Toshmat',
//             age: 33,
//             child: {
//                 name: 'Anvar',
//                 age: 50,
//                 child: {
//                     name: 'Momin',
//                     age: 22,
//                     child: {
//                         name: 'Sardor',
//                         age: 25,
//                         child: {
//                             name: 'Tohir',
//                             age: 23,
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };

// let sum = 0;

// while(obj){
//     sum += obj.age;
//     obj = obj.child
// }

// console.log(sum);
