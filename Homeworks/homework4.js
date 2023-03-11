// $$$$$$$$$$$$$$$$$$$$$$$$$$$ Homework#4 $$$$$$$$$$$$$$$$$$$$$$$$$$$

// -- 1 --

for(let i = 1; i <= 5; i++){
    if(i % 2 === 0) console.log(`juft son: ${i}`);
    else console.log(`to'q son: ${i}`);
}

// -- 2 --

let str = "WeBbraIN";
let result = "";

for(let i = 0; i < str.length; i++){
    if(str[i] == str[i].toUpperCase())result += str[i];
}

console.log(result);
 
// -- 3 --

let str3 = "WebBrainAcadAmya";
let count = 0

for(let i = 0; i <= str3.length; i++){
 if(str3[i] == "A" )count++;
 else if(str3[i] == "a")count++;
}
console.log(`Result is: A, a - ${count}`);

// -- 4 --

let strFozil = "fozil";
let reserveStr = ""

for(let i = strFozil.length -1; i >= 0; i--)reserveStr += strFozil[i];

console.log(reserveStr);