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
