// $$$$$$$$$$$$$$$$$$$$$$$$$$$ Homework#2 $$$$$$$$$$$$$$$$$$$$$$$$$$$

// -- 1 --

// let num = 4;

// (num == 4 && console.log("juft son")) || (num == 5 && console.log("toq son"));

// -- 2 --

// let score = 49;

// (score >= 86 && score <= 100 && console.log("A")) ||
//     (score >= 61 && score <= 85 && console.log("B")) ||
//     (score >= 50 && score <= 60 && console.log("C")) ||
//     (score < 50 && console.log("Failed!"));

// -- 3 --

// let fruits = "pomidor";

// (fruits == "olma" && console.log("10 000")) ||
//     (fruits == "nok" && console.log("12 000")) ||
//     (fruits == "tarvuz" && console.log("20 0000")) ||
//     (fruits == "pomidor" && console.log("unday meva yoq"));

// -- 4 --

// let numbers = 60;

// if (numbers % 3 == 0 && numbers % 5 == 0) {
//     console.log("3 ga va 5 ga bolinadi");
// } else if (numbers % 5 == 0) {
//     console.log("5 ga bolinadi");
// } else if (numbers % 3 == 0) {
//     console.log("3 ga bolinadi");
// } else {
//     console.log("The end");
// }

// -- 5 --

// let age = 14;

// age > 13 && age < 91 ? console.log("Okay") : console.log("No");

// -- 6 --

// let age1 = 14;

// !age1 > 13 && !age1 < 91 ? console.log("Okay") : console.log("No");

//  -- 7 --

// if(-1 || 0) console.log('first'); // first
// if(-1 && 0) console.log('second'); // natija chiqmidi
// if(null || -1 && 1) console.log('third'); // third

//  -- 8 --

// alert( null || 2 || undefined ); // result is 2

// alert( alert(1) || alert(3) || 2 ); //Bu xolatda hammasi ishlidi bu dgani jovobi: 1 -- 3 -- 2 ko'rinishida bo'ladi.
// alert( alert(1) || 2 || alert(3) ); //Bu xolatda chapdan birinchi va ikkinchisi ishlidi bu dgani jovobi: 1 -- 2 ko'rinishida bo'ladi.
// alert( 1 && null && 2 ); //bu falsy qiymat qaytaradi tushunki bir dona qiymat falsy bo'lsa bu dgani AND operatori ishlamidi va falsy qiymat qaytaradi!
// alert( alert(1) && alert(2) ); //result is 1 and undefined, because undefined is a falsy value.
// alert( null || 2 && 3 || 4 ); //result is 3