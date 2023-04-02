// ** 13-dars **

// =================== Call, apply, bind ===================

// -- Call -- ==>  this ni boshqa objectga yunaltirib beradi, birinchi argument target object bo'ladi, qolganlari esa oddiy korinishda, automatic functionni chaqirvoradi.

// let user = {
    // name: "John",
    // sayHi: function(age, status){
        // console.log(this.name); //output: undefined
        // console.log(this.surname); //output: Doe
        // console.log(this); //output: { surname: 'Doe' }, call functionni berganimiz uchun bu user objectda user1 objectni olib bervotti.
        // console.log(`John ${this.surname} is ${age}, He is ${status}`);
    // }
// }

// let user1 = {
//     surname: "Doe",
//     id: 1,
// }

// user.sayHi.call(user1, 25, 'Mentor');

// -- Apply -- ==> this ni boshqa objectga yunaltirib beradi, birinchi argument target object bo'ladi, qolganlari array ichida buladi[], automatic functionni chaqirvoradi

// let user2 = {
//     name: "Tokhir",
//     sayHi: function(status, age){
//         console.log(this.surname);
//         console.log(this.surname, status, age);
//     }
// }

// let user3 = {
//     surname: "Boiskhonov",
//     id: 2
// }

// user2.sayHi.apply(user3, ["Mentor", 25]); //status argumentiga array o'rqali beriladi misol uchun ["Mentor", 25]

// -- Bind --  ==> this ni boshqa objectga yunaltirib beradi, birinchi argument target object bo'ladi, qolganlari oddiy ko'rinishda, functionnni automatic chaqirmaydi, uzimiz chaqirib quyishimiz kerak.

// let user4 = {
    // name: "Tokhir",
    // sayHi: function(status, age){
        // console.log(this.surname);
        // console.log(this.surname, status, age);
    // }
// }

// let user5 = {
//     surname: "Boiskhonov",
//     id: 2
// };

// -- 1-usul --
// user4.sayHi.bind(user5, "Mentor", 25)(); //Bu xolatda functionni o'zimiz chaqirib qoyishimiz kerak, sababi "Bind"da invoce ishlamidi. autocall yo'q!

// -- 2-usul --

// let binded = user4.sayHi.bind(user5, "Mentor", 25); //alohida bir variable ga biriktirib qoyib keyin usha variableni ozini function xolatida chaqirib qoyishimiza mumkin

// binded(); //shunday xolatda...


// =================== Scope ===================

// Scope => Global scope, Function scope, Block scope

// Global scope => var
// Function scope => var, let, const
// Block scope => let, const

// =================== Function scope ===================

// -- 1 --

// var num1 = 5;
// console.log(num1); //output: 5

// function check(){
//     num1 = 10;
// }

// console.log(num1); //output: 5
// check();
// console.log(num1); //output: 10

// -- 2 --


// var num1 = 5;
// console.log(num1); //output: 5

// function check(){
    // var num1 = 10; // Local variable
    // console.log(num1); // output: 10
// }

// console.log(num1); //output: 5
// check();
// console.log(num1); //output: 5

// -- 3 --

// const num = 5;

// function check(){
    // const num = 10; // Local variable
    // console.log(num); // output: 10
// }

// console.log(num); //output: 5 
// check(); //output: 10
// console.log(num); //output: 5


// =================== Block scope ===================
// block scope => {}, if/else, for loop, do while, while loop.

// function check(){
    // if(1){
        // var a = "JavaScript";
        // let b = "React";
        // const c = "Angular";
    // }
        // console.log(a); // output: JavaScript
        // console.log(b); // ReferenceError: b is not defined, because let is block scope
        // console.log(c); // ReferenceError: c is not defined, because const is block scope
// };

// check();