// $$$$$$$$$$$$$$$$$$$$$$$$$$$ Homework#3 $$$$$$$$$$$$$$$$$$$$$$$$$$$

// -- 1 --

// -- if else -- 

// let score = 120;

// if(score >= 86 && score <= 100){
//     console.log('Your grade is A');
// }else if(score >= 61 && score <= 85){
//     console.log("Your grade is B");
// }else if(score >= 50 && score <= 60){
//     console.log("Your grade is C");
// }else{
//     console.log("Failed! Please try again!");
// }


// // -- switch case --

// const grade = 101;

// switch (true) {
//    case (grade >= 86 && grade <= 100):
//       console.log("A");
//       break;
//    case (grade >= 61 && grade <= 85):
//       console.log("B");
//       break;
//    case (grade >= 50 && grade <= 60):
//       console.log("C");
//       break;
//    default:
//       console.log("Failed");
// }


// // -- Ternary operator --

// let mark = 120;

// mark >= 86 && mark <= 100 ? console.log('A') : mark >= 61 && mark <= 85 ? console.log("B") :  mark >= 50 && mark <= 60 ? console.log('C') : console.log("Failed");

// // -- 2 --

// // -- if else --

// let meva = 'pomidor'

// if(meva === "olma"){
//     console.log("10 000");
// }else if(meva === "nok"){
//     console.log("12 000");
// }else if(meva === "tarvuz"){
//     console.log("20 000");
// }else{
//     console.log("Unday meva yo'q");
// }

// // -- switch case --

// let fruits = "olma";

// switch (fruits) {
//     case "olma":
//         console.log("10 000");
//         break;
//     case "nok":
//         console.log("12 000");
//         break;
//     case "tarvuz":
//         console.log("20 000");
//         break;
//     default:
//         console.log("Unday meva yo'q");
// }


// // -- Ternary operator --

// let 苹果 = "pomidor";

// 苹果 === "olma"  ? console.log('10 000') : 苹果 === "nok" ? console.log("12 000") :  苹果 === "tarvuz" ? console.log('20 000') : console.log("Unday meva yo'q");


// // -- 3 --

// // -- if else --

// let numbers = 60;

// if(numbers % 3 === 0 && numbers % 5 === 0){
//     console.log('3 ga va 5 ga bolinadi');
// }else if(numbers % 5 === 0){
//     console.log('5 ga bolinadi');
// }else if(numbers % 3 === 0){
//     console.log('3 ga bolinadi');
// }else{
//     console.log('The end');
// }

// // -- switch case --

// let num = 8;

// switch (true) {
//     case (num % 3 === 0 && num % 5 === 0):
//         console.log('3 ga va 5 ga bolinadi');
//         break;
//     case (num % 5 === 0):
//         console.log('5 ga bolinadi');
//         break;
//     case (num % 3 === 0):
//         console.log('3 ga bolinadi');
//         break;
//     default:
//         console.log("Tugadi!");
//         break;
// }

// // -- Ternary operator --

// let number = 67;

// number % 3 === 0 && number % 5 === 0  ? console.log('3 ga va 5 ga bolinadi') : number % 5 === 0 ? console.log("5 ga bolinadi") :  number % 3 === 0 ? console.log('3 ga bolinadi') : console.log("Tamom!");

// // -- 4 --
// // Rewrite the "switch" into an "if"

// let browser = "Edge";

// if(browser === "Edge"){
//     console.log("You've got the Edge!");
// }else if(browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera"){
//     console.log("Okay we support these browsers too");
// }else{
//     console.log("We hope that this page looks ok!");
// }

// // -- 5 --

// let message;
// let login = "Director";

// login == "Employee" ? message = "Hello" : login == "Director" ? message = "Greetings" : login == "" ? message = "No login" : message = "";

// console.log(message);

// -- 6 --

// let begin = prompt("What's the “official” name of JavaScript?", "");

// if(begin === "ECMAScript"){
//     alert(`Right!`)
// }else{
//     alert(`You don't know? "ECMAScript!"`)
// }

// -- 7 --

// let value = +prompt("Type a number", 0);

// if(value > 0){
//     alert(1)
// }else if(value < 0){
//     alert(-1)
// }else{
//     alert(0)
// }

// -- 7 --

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// Rewrite this if using the conditional operator '?':

// let a = 1,
//     b = 2;

// let result = (a + b < 4) ? console.log("Below") : console.log("Over");

// -- 8 --

// let userName = prompt("Who's there", "");

// if(userName == "Admin"){
//     let passw = prompt("Password?", "");
//     if(passw == "TheMaster"){
//         alert("Welcome!")
//     }else if (passw === '' || passw === null) {
//         alert( "Canceled" );
//     }else{
//         alert("Wrong password")
//     }
// }else if(userName === '' || userName === null){
//     alert("Canceled")
// }else{
//     alert("I don't know you.")
// }