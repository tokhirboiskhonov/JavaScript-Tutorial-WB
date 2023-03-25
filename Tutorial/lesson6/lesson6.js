// ** 6-dars **

// -- Math methods --

// console.log(Math.pow(3, 2)); //darajaga ko'taradi.
// console.log(Math.sqrt(64)); //ildiz ostidan chiqarish.
// console.log(Math.cbrt(64)); //uchinchi darajali ildiz ostidan chiqarish.
// console.log(Math.max(10, 4, 37)); //maximal sonni ajratib beradi.
// console.log(Math.min(10, 4, 37)); //minimal sonni ajratib beradi.
// console.log(Math.abs(-5)); //manfiy sonni bermidi(module), absolute qiymat.
// console.log(Math.random()); //random sonni chiqarib beradi. Bu 0-1 gacha bo'lgan sonni chiqarib beradi.
// console.log(Math.random() * 10); //bu esa ham random sonni chiqaradi faqat 1-10 gacha.
// console.log(parseInt(Math.random() * 10)); //bu esa yaxlatib beradi sonni ParseInt dan foydalangan xolatda. ParseInt yana typeofni Number qberadi
// console.log(Math.round(Math.random() * 100)); //bu esa yaxlatib beradi sonni Math.round() dan foydalangan xolatda.
// console.log(Math.floor(6.8)); //Math.floor ni vazifasi butun sonni oberadi.
// console.log(Math.ceil(4.001)); //Math.ceil ni vazifasi ostatka bosa ushani bittaga oshib ketadi.

// -- Function -- Block of code

// Types of functions => Declaration, Expression(anonymous), Arrow function

// -- Declaration function --

// function example() {
//     console.log("Hi!");
// }

// example() //invoking or calling a function

// -- Expression function --

// const example = function(){
//     console.log("Hi...");
// }
// example()

// -- Arrow function --

// const example = () => {
//     console.log("Hi....");
// }

// example()

// ===============================================

//Hoisting

// 1-step

// Function decloration

// example()

// function example() {
//     console.log("Hi");
// }

// Function expression

// example() //ReferenceError: Cannot access 'example' before initialization
// const example = function() {
//     console.log("Hi!!!");
// }

// example(); //TypeError: example is not a function

// var example = function(){
//     console.log("Hello brother!");
// }

// Arrow function


// example(); //TypeError: example is not a function

// var example = () => {
//     console.log("Hello");
// }


// example(); // ReferenceError: Cannot access 'example' before initialization

// let example = () => {
//     console.log("Hello");
//} //const ham shunaqa bo'ladi


// =============

// Decloration function

// function example(){
//     return 2 + 2 //agar return bo'lmasa unda function ni value si undefined ga teng bo'ladi.
// }
// console.log(example());

// =============

// Expression function

// const example = function(){
//     return '3 + 3'
// } 

// console.log(example());

// =============

// Arrow function

// const example = () => {
//    return "Hey"
// }

// console.log(example());

// 2-) Arrow autoreturn

// const example = () => 2 + 3; //Autoreturn ishlab ketadi, o'zi return qvoradi, uning uchun faqat bir line da bolish kere.
// console.log(example());


// -- Parametr and argument --

//1--

// function person(name = "Default name", tel = "Default number", username = "Default username"){
//     console.log("Ismi:" + name + ' ' + 'Tel:' + tel + " " + "UserName:" + username);
// }

// person("Tokhir", 998900680606, "@exapmle1");
// person("Muhammad", 998900680606, "@exapmle1");
// person(); //Bunda default ishlab ketadi.

//2--

// function sumNum(a, b){
//     return a + b
// }
// console.log(sumNum(10, 50));

// const getAvr = function(name, surname, age){
//     console.log(`Name: ${name}`);
//     console.log(`Surname: ${surname}`);
//     console.log(`Age: ${age}`);
// }

// getAvr('Tokhir', 'Boiskhonov', 23);

// const GPA = (a = 0, b = 0, c = 0, d = 0) => {
//     let result = (a + b + c +d) / 4;
//     return result;
// }
// console.log(GPA(5, 4, 3, 5)); //4.25

// const getGpa = (a) => {
//     let total = 300;
//     let percent = 100;
//     return Math.round((a * percent) / total)
// }
// console.log(getGpa(256)); //85