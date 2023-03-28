// ** 10-dars **

// ========= This keyword =========

// console.log(this); //you can not see result in terminal, because "this" keyword is Global object('Window'), so you only can see on Browser help with Inspect Website page.

// ============ Anonymous function ============

// let obj = {
//     name: "WebBrain",
//     age: 5,
//     status: "Academy",
//     info: function(){
//         //console.log(`${this.name} ${this.status} is ${this.age} years old`);
//         // console.log(this); //when this keyword use inside object, so this keyword automated approached to object
//         // console.log(obj.name); //WebBrain
//     },
// }

// obj.info();

// ============ Arrow function ============
// let obj = {
//     name: "WebBrain",
//     age: 5,
//     status: "Academy",
//     info:()=>{
//         // console.log(this); //Arrow function da this kaliti, global Object ya'ni windowga teng bo'lib qoladi.
//         console.log(obj.name);  
//     }
// }

// obj.info()

// ========= Arrays =========

// let arr = [
//     {
//         name: "Nexia",
//         engine: 1.6 
//     },
//     {
//         name: "Damas",
//         engine: 0.8
//     },
//     {
//         name: "Cobalt",
//         engine: 1.5 
//     },
//     {
//         name: "Malibu2",
//         engine: 2.0
//     },
//     {
//         name: "Tahoe",
//         engine: 5.0 
//     },
// ]

// console.log(arr);

// let arr1 = [100, 'hello', null, undefined, {name: 'example'}, function(){}, false];
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.at(-1)); //arr1[arr1.length - 1] blan bir xil ishlidi, bu arrayni ozini methodi.


// let arr1 = [3];
// let arr2 = new Array(100); //agar bir dona qiymat berib ketilsa, unda usha qiymatni ozi oladi, lekin uni 2 ta qiymat berilsa unda automatic length ni xisoblidi
// // console.log(arr1, arr2);
// console.log(arr1.length);
// console.log(arr2.length);

// let arr = [1, 2];
// console.log(Array.isArray(arr));
// let arr3 = [3, 5, 1];
// let arr4 = new Array(100, 2, 5); 
// console.log(arr3.length);
// console.log(arr4.length);


// ************* Array ga qo'shish; *************

// ************* Array methods *************

// -- 1 --

// let arr = [true];
// arr[0] = false; //this method can be updated the value of array

// // arr[0] = "Olma";
// // arr[10] = "Nok"
// console.log(arr);
// console.log(typeof arr);

// -- 2 --

// let arr1 = ['Tokhir', 'Ismoil', 'Bekhruz'];
// let arr2 = ['Xondamir', 'Umid', 'Nodirkhon'];

// console.log(arr1.concat(arr2, 'WB Academy'));

// -- 3 --

let arr1 = ["Damir", "Tokhir", "Firdavs"];

// console.log(arr1.slice(0, 2)); //"slice" bu faqat copy qb olib turadi, lekin tegi arrayni ichida saqlanib turgan bo'ladi. Bu dgani slice assosiy arrayga ta'sir qilmaydi
// console.log(arr1.splice(0, 2)); //"splice" esa teg tugi blan olib tashidi, keyin uni console.log() qilib tekshirsa ham ko'rsatmidi. Bu dgani splice assosiy arrayga ta'sir qiladi
// console.log(arr1);

// -- 4 --
let arr2 = ["Damir", "Tokhir", "Firdavs"];

// let str = "WebBrain"
// console.log(str.split(''));
console.log(arr2.reverse()); //Ma'lumotni teskari qilib beradi.

//string ustida ammal bajarish.
let str = "Webbrain";
console.log(typeof str.split('').reverse().join('')); // ===================
let str1 = ""
for(let i = str.length -1; i >= 0; i--)str1 += str[i]
console.log(str1);

//number ustida ammal bajarish.

let num = 123456789;

console.log(typeof +(num.toString().split('').reverse().join('')));

// -- 5 --

let arrs = ["Damir", "Tokhir", "Firdavs"];

console.log(arrs.includes("Tokhir"));

