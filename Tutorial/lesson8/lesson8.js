// ** 8-dars **
// -- 1 --
// let obj1 = {
//     name: 'Tokhir',
//     age: 23,
//     nationality: 'Uzbekistan'
// }

// let ism = "name";

// console.log(obj1.name);
// console.log(obj1['name']);
// console.log(obj1[ism]);

// let nation = 'nationality';
// console.log(obj1.nation); //result is undefined
// console.log(obj1['nation']); //result is undefined
// console.log(obj1[nation]); //result is Uzbekistan

// console.log(obj1.key); //result is undefined, because there is not key(key's name is key)
//But we can use dynamic access to join this obj, For instance:

// console.log(obj1[key]); //result is "Tokhir", because we use dynamic access.

// Objectni valuesiga kirishiga 3 ta usul bor:
    // obj1.name
    // obj['name'] // numeric keylarda
    // let ism = 'name' ----> console.log(obj1[ism]) // result is Tokhir

// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1['full name']); //result is Boiskhonov Tokhir
// console.log(obj1['name']);
// console.log(obj1.age);
// console.log(obj1['age']);
// console.log(obj1.language);
// console.log(obj1['language']);
// console.log(obj1.nationality);
// console.log(obj1['nationality']);
// console.log(obj1.opportunity);
// console.log(obj1['opportunity']);
// console.log(obj1.status);
// console.log(obj1['status']);

// -- 2 --
// let obj2 = {
//     name: 'Khusan',
//     age: 25,
//     language: 'Kirgiz',
//     nationality: 'Kirgizistan',
//     opportunity: 'Furniturer',
//     status: 'Master'
// }

// console.log(obj2);
// console.log(obj1 == obj2); //result is false
// console.log(obj1 === obj2); //result is false

// == new Constuctor ==
// let obj3 = new Object();
// obj3.name = "Ismoil";
// console.log(obj3);
// == new Constuctor ==

// -- 3 --
// ==========Object methods==========

// let car = {
//     name: 'BMW',
//     year: 2023,
//     engine: 6.5,
// }
// console.log(car);

// car.engine = 7.7; //updated the data.
// car.color = "Black"; //added a new key and value: color: 'Black'.
// delete car.year; //deleted key and value of the object.
//console.log(Object.keys(car)); //result is [ 'name', 'year', 'engine' ]
//console.log(Object.values(car)); //result is [ 'BMW', 2023, 6.5 ]
//console.log(Object.entries(car)); //result is [ [ 'name', 'BMW' ], [ 'year', 2023 ], [ 'engine', 6.5 ] ]

// let arr = [ [ 'name', 'BMW' ], [ 'year', 2023 ], [ 'engine', 6.5 ] ];
// console.log(Object.fromEntries(arr)); //result is { name: 'BMW', year: 2023, engine: 6.5 }

// Object.freeze(car);
// car.name = "AUDI"; //after Object.freeze you can't update the data of this object.
// car.color = "Black"; //after Object.freeze you can't add a new key and value --> color: 'Black'.
// delete car.engine; //after Object.freeze you can't delete the data of this object.

// console.log(car.name);
// console.log(car.color);
// console.log(car.engine);
// console.log(car);


// Object.seal(car);
// car.name = "Tayota" //after Object.seal you can update the data of this object.
// car.color = "White"; //after Object.seal you can't add a new key and value --> color: 'White'.
// delete car.year //after Object.seal you can't delete the data of this object.

// console.log(car.name);
// console.log(car.color);
// console.log(car.year);

// ==========Object tricky==========

// let obj1 = {
//     name: "WebBrain IT Academy",
//     founder: "Sardor Mukhtorov",
//     founded: 2020,
// }

// // Object.freeze(obj1);
// // Object.seal(obj1)

// obj1.name = "Najot Ta'lim";
// obj1.status = "Great";
// delete obj1.founder;

// console.log(obj1);

// let key = prompt("Type something", "");

// console.log(obj1[key]);