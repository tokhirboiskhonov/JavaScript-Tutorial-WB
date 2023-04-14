// ** 14-dars **

// -- new Date() --

// console.log(date.getTime()); //getTime() methodi Date.now() blan bir xil ma'lumotni chiqarib beradi.
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date);
// console.log(Date.now()); //bu method 1970 yildan - xozirgi kungacha bo'lgan sekundni chiqarib beradi

// const getToday = (symbol) => {
//     let date = new Date();
//     return `Today: ${date.getDate()}${symbol}${
//         date.getMonth() + 1
//     }${symbol}${date.getFullYear()}`;
// };

// console.log(getToday("/"));

// let weeks = ["Yakshanba", "Dushanba"];

// let date = new Date();
// console.log(date);
// console.log(weeks[date.getDay()]);

// -- JSON --

// let user = {
//     name: "WebBrain",
//     status: "IT Center",
//     age: 15,
//     data: { fullname: "WebBrain Academy", founded: 1999 },
// };

// let json = JSON.stringify(user);
// let obj = JSON.parse(json);
// console.log(obj);

// console.log(JSON.stringify(user)); // { name: "WebBrain", status: "IT Center", age: 15}
// console.log(JSON.stringify(user, ["name", "status"])); //{"name":"WebBrain","status":"IT Center"}

// console.log(JSON.stringify(user, ["name", "status", "data", "fullname", "founded"], 4));

// -- MAP, SET, WEAK MAP, WEAK SET --

// -- Map --

// let map = new Map([
//     ["name", "WebBrain"],
//     ["title", "IT center"],
// ]);

// map.set("name", "WBA")

// console.log(Object.fromEntries(map)); //output: { name: 'WebBrain', title: 'IT center' }
// console.log(Object.fromEntries(map).title); //output: IT center
// console.log(Object.fromEntries(map).name); //output: WBA
// console.log(map.title); //output: undefined

// map.forEach((element) => console.log(element)); //output: WebBrain IT center
// maps.map((el) => console.log(el)); //output: TypeError: maps.map is not a function

// map.set("name", "WebBrain");
// map.set(123, 2018);

// console.log(map.size, map);
// console.log(map.get("name"));
// console.log(map.has(123)); //output: true
// console.log(map.delete(123)); //output: this key will be delete
// console.log(map.clear()); //output: all key, which in object will be delete, it means clear
// console.log(map.keys()); //output: { 'name', 'title' }
// console.log(map.values()); //output: { 'WebBrain', 'IT center' }
// console.log(map.entries()); //output: { [ 'name', 'WebBrain' ], [ 'title', 'IT center' ] }
// console.log(map); // ouput: Map(2) { 'name' => 'WebBrain', 'title' => 'IT center' }

// for(let value of map){
//     console.log(value); //output: [ 'name', 'WebBrain' ] [ 'title', 'IT center' ]
// }

// for(let value of map.entries()){
//     console.log(value); //output: [ 'name', 'WebBrain' ] [ 'title', 'IT center' ]
// }

// for(let value of map.values()){
//     console.log(value); //output: WebBrain IT center
// }

// for(let value of map.keys()){
//     console.log(value); //output: name title
// }

// console.log(map.entries()); //output: [Map Entries] { [ 'name', 'WebBrain' ], [ 'title', 'IT center' ] }

// let generator = map.entries();
// generator.next();
// generator.next();
// console.log(generator.next()); //{ value: [ 'name', 'WebBrain' ], done: false }
// console.log(generator.next()); //{ value: [ 'name', 'WebBrain' ], done: false }
// console.log(generator.next()); //{ value: [ 'name', 'WebBrain' ], done: true }

// -- Set --
// let arr = [1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 1, 2, 2, 2, 3, 3, 3, 3];
// let obj = {
//     name: "Tokhirbek",
// };

// function name() {
//     console.log("Hi");
// }

// let set = new Set();
// set.add(obj);
// set.add(name)
// let set1 = new Set(arr);

// console.log(set);
// console.log(set.has(name));

// let map = new Map([
//     ["name", "WebBrain"],
//     ["title", "IT center"],
// ]);

// let obj = {data: map};

// map = null;
// console.log(map);
// console.log(obj);

// let map = new Map();
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");
// console.log(map.get(1));
// console.log(map.get("1"));
// console.log(map.size);

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // try to use an object

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
// console.log(visitsCountObj[john]); // 123

// let recipeMap = new Map([
//     ["cucumber", 500],
//     ["tomatoes", 350],
//     ["onion", 50],
// ]);

// for(let vegatable of recipeMap.keys()){
//     console.log(vegatable);
// }

// for(let amount of recipeMap.values()){
//     console.log(amount);
// }

// for(let entry of recipeMap){
//     console.log(entry);
// }

// let obj = {
//     name: "John",
//     age: 30,
// };
// let map = new Map(Object.entries(obj));
// console.log(map); // Map(2) { 'name' => 'John', 'age' => 30 }
// console.log(map.get("name")); //output: John

// let map = new Map();

// map.set("banana", 1).set("orange", 2).set("meat", 4);

// let obj = Object.fromEntries(map.entries());

// console.log(map);
// console.log(obj.banana);
// console.log(obj.orange);
// console.log(obj.meat);

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// console.log(set.size);

// for(let user of set){
//     console.log(user.name);
// }

// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) console.log(value);

// the same with forEach:
// set.forEach((value, valueAgain, set) => {
    // console.log(value);
    // console.log(valueAgain);
    // console.log(set);
// });


// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");
// weakMap.set(john, "secret documents");

// console.log(weakMap);
// john = null; // overwrite the reference


// john is removed from memory!

//  visitsCount.js
// let visitsCountMap = new Map(); // map: user => visits count

// // increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// console.log(countUser(john));


// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
// console.log(visitedSet.has(john)); // true

// check if Mary visited?
// console.log(visitedSet.has(mary)); // false

// john = null;
// console.log(visitedSet);