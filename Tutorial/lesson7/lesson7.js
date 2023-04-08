// ** 7-dars **

// String data type

// syntax => '', "", ``

// let str = "WebBrain";

// let str1 = "webbrain";
// let str2 = new String("webbrain");
// let str2 = "Web \tBrain";
// console.log(str1 === "webbrain"); //true
// console.log(str2 === "webbrain"); //false, because constructor function always return object data type
// console.log(str1 === str2); //false
// console.log(str1.localeCompare(str2)); //output: 0
//When we need to compare two stirngs, so we have to use localeCompare, and this comparision can be return answer like this: -1 --> bu ummuman tog'ri kelmidi, 0 --> esa to'liq tog'ri keladi, 1--> qisamn tog'ri keladi

// let str1 = "webbrain";
// console.log(str1[0]); //output: w
// console.log(str1.charAt(0)); //output: w // minuslik value ni qabul qilmaydi
// console.log(str1.at(-1)); //output: n //minuslik value ni qabul qiladi

// console.log(str[0]);
// console.log(str.length);
// console.log(str[str.length - 1]); //Bu xolatda oxirgi xarfni olib beradi

// let str1 =
// `WebBrain
// Academy
// G20`;

// console.log(str1);

// let names = "Anvarjon";
// let statuss = "Employee";

// let str = `Mening ismim ${names}, He is ${statuss}.`;

// console.log(str);

// let str1 = "WebBrain \n Academy";
// console.log(str1);
// let str2 = "WebBrain \t Academy";
// console.log(str2);
// let str3 = "WebBrain \r Academy";
// console.log(str3);

// --- String Method ---

// let str = "Webbrain Academy";
// let str2 = "Academy";
// console.log(str.toLowerCase()); //webbrain
// console.log(str.toUpperCase()); //WEBBRAIN
// console.log(str.startsWith("W")); //true
// console.log(str.endsWith("s")); //false
// console.log(str.padStart(10, 'd')); //dddddddWeb
// console.log(str.padEnd(5, "s")); //Webss
// console.log(str.replace("Web", "IT")); //"ITbrain"
// console.log(str.repeat(10));
// console.log(str.concat(str2)); //WebbrainAcademy
// console.log(str.concat(str, "Hey")); //Webbrain AcademyWebbrain AcademyHey
// console.log(str.includes('e')); //true
// console.log(str.indexOf('n')); //index boyicha 7 chi
// console.log(str.indexOf("b", 5)); //'b' shu indexni 5 chi indexdan boshlab qidir dgan manoda keladi
// console.log(str.lastIndexOf('n')); //oxirgi kegan xarfni olib beradi index ni, ikkita "b" bolsa ham ikkinchisini qberadi.
// console.log(str.charAt(7)); //"n"
// console.log(str.substring(2, 7)); // "bbrai"
// console.log(str.substr(2, 5)); //"bbrai"
// console.log(str.slice(2, 7)); //"bbrai"
// console.log(str.split()); //[ 'Webbrain' ]
// console.log(str.trim().length); //white space ni yoqatadi
// console.log(`${str}`.toLocaleLowerCase());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// let str2 = "webbrain academy"
// console.log(str2.split(' '));
// console.log(str2.slice(0, 4)); //webb //0 chi indexdan 4 chi indexgacha olarkan, bu dgani 4-index include bo'midi.
// console.log(str2.substr(2, 2));
// console.log(new String("webbrain").valueOf()); //output: webbrain
// console.log(new String('webbrain')); //output: [String: 'webbrain']

let str = "web brain acad web emy";

console.log(str.replace(/web/i, "WEB")); //ignore qiladi birinchi kelgan oxshash ma'lumotni ignore qilib yangisini qoyib beradi, output: WEB brain acad emy

let str1 = "web brain acad web emy";
console.log(str1.replace(/web/i, "WEB")); //output: WEB brain acad web emy (birinchi kelgan tori ma'lumotni o'zgartirdi qoganiniga yetib bormadi).

let str2 = "web brain acad web emy";
// console.log(str2.replace(/web/ig, "WEB")); //output: WEB brain acad WEB emy global ignore qiladi bu dagni bitta stringni ichida nechi marotaba kelgan bolsa ham ignore qialdi
// console.log(str2.replaceAll('web', 'WEB')); //output: WEB brain acad WEB emy
console.log(str2.split(" ", 3)); //output: [ 'web', 'brain', 'acad' ]
