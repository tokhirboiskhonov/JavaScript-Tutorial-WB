// ** 12-dars **

// ********* arr.find *********

// let arr = ["Firdavs", "Damir", "Sirojiddin"];

// let finding = arr.find(val => val === "Damir")
// console.log(finding); //output: Damir

// let finding1 = arr.find(val => val === "");
// console.log(finding1); //output: undefined

// let finding2 = arr.find(val => val === "Example");
// console.log(finding2); //output: undefined

// let finding3 = arr.find(val => val !== "Example");
// console.log(finding3); //output: Firdavs --> typeof is String

// ********* arr.findIndex *********

// let arr1 = ["Abbos", "Murodjon", "Tokhirbek", "Khusnora", "Diyora", "Sardor"]

// let findIndex = arr1.findIndex(idx => idx === "Tokhirbek");
// console.log(findIndex); //output: 2 (index number)

// ********* arr.every *********

// let arrNum = [10, 1, 2, 5, 45];

// let arrEvery = arrNum.every(num => num < 50)
// console.log(arrEvery); //output: true

// ********* arr.some *********

// let arrNum1 = [15, 1, 2, 25, 30];

// let arrSome = arrNum1.some(num => num < 2);
// console.log(arrSome); //output: true (bir dona ma'lumot truthy bo'lsa unda true qaytaradi)

// ********* arr.fill *********

// let arrNum2 = [15, 1, 2, 25, 30];

// let filling = arrNum2.fill(100)
// console.log(filling); //output: [ 100, 100, 100, 100, 100 ], Array ni ichida nechta ma'lumot bo'lsa usha hammasini qovusni ichidagi data o'zgartirib yuvoradi.

// ********* arr.reduce *********

// let num = [15, 1, 2, 25, 30];

// let sum = num.reduce((initial, total) => initial + total, 0);
// let sum1 = num.reduce((a, b) => a + b, 0);

// console.log(sum);
// console.log(sum1);


// let arr = [2, [3, [1, [2], [3]]], [9]]

// let reducing = arr.reduce((initial, total) => initial + total, 0);
// console.log(reducing); //reduce methodi nested arrayni ichidagi ma'lumotni ustida ammal bajaololmaydi.

// ********* arr.flat *********

// let arr = [2, [3, [1, [2], [3]]], [9]];

// let flatting = arr.flat(Infinity);

// console.log(flatting); //output: [ 2, 3, 1, 2, 3, 9 ]

// let reducing1 = flatting.reduce((a, b) => a + b, 0);

// console.log(reducing1); //output: 20

// ********* Spread operator for Arrays *********

// let arr = ["Tokhirbek", "Damir", "Sirohjiddin", "Firdavs"];

// let spreading = [...arr, "Murodjon"];

// console.log(spreading); //output: [ 'Tokhirbek', 'Damir', 'Sirohjiddin', 'Firdavs', 'Murodjon' ]

// ********* Destructure for Arrays *********

// let users = ["Tokhirbek", "Damir", "Sirojiddin", "Firdavs"];

// const [, ikki, uch] = users;

// console.log(bir); //output: Tokhirbek
// // console.log(ikki); //output: Damir
// console.log(uch); //output: Sirojiddin 

// ============================

// let cars = [ 
//     { id: 1, year: 1998, engine: 1, name: "Tico"},
//     { id: 2, year: 2005, engine: 1.2, name: "Matiz"},
//     { id: 3, year: 2010, engine: 1.6, name: "Gentra"},
//     { id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
//     { id: 5, year: 2012, engine: 2, name: "Malibu"},
//     { id: 6, year: 2000, engine: 1.2, name: "Damas"},
//     { id: 7, year: 2018, engine: 2.4, name: "Tracker"}
// ];

// const namesOfCar = cars.map(({id, year, engine, name}) => {
    // console.log(`${id} --> ${year} --> ${engine} --> ${name}`);
    // console.log(year);
    // console.log(engine);
    // console.log(name);
// })

//************************ CRUD  ************************

let cars = [ 
    { id: 1, year: 1998, engine: 1, name: "Tico"},
    { id: 2, year: 2005, engine: 1.2, name: "Matiz"},
    { id: 3, year: 2010, engine: 1.6, name: "Gentra"},
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt"},
    { id: 5, year: 2012, engine: 2, name: "Malibu"},
    { id: 6, year: 2000, engine: 1.2, name: "Damas"},
    { id: 7, year: 2018, engine: 2.4, name: "Tracker"}
];

// --Read--

// const sortById = () =>{
//     let resById = cars.sort((a,b) => a.id - b.id);
//     cars = resById
// }

// const sortByYear = () =>{
//     let resByYear = cars.sort((a,b) => a.year - b.year);
//     cars = resByYear
// }

// const sortByEngine = () =>{
//     let resByEngine = cars.sort((a,b) => a.engine - b.engine);
//     cars = resByEngine
// }

// const sortByAlphabet = () =>{
//     let resByAlphabet = cars.sort((a,b) => a.name.localeCompare(b.name));
//     cars = resByAlphabet
// }

// sortById();
// sortByYear();
// sortByEngine();
// sortByAlphabet();
// console.log(cars);

// --Delete--

// const deleteCars = (ids) =>{
//     let resDelete = cars.filter(car => car.id !== ids)
//     // let resDelete = cars.filter(car => 1)
//     cars = resDelete
// }

// deleteCars(5)
// console.log(cars);

// --Add--

// const addCars = (car) => {
//     // console.log(cars);
//     cars = [...cars, {id: cars.length + 1, ...car}]
//     console.log(cars);
// }

// addCars({year: 2019, name: "WebBrain"});


// --Update--

// const updateCars = (data) => {
//     let resUpdate = cars.map(value => {
//         if(value.id === data.id){
//             return {...value, [data.inovated]: data.values, [data.type]: data.value}
//         }else{
//             return value
//         }
//     });
//     cars = resUpdate
// }

// updateCars({id: 2, type: 'name', value: 'Ferrari', inovated: "year", values: 2023});
// console.log(cars);


//--- Filter by key, id ---

// const getFilterByName = (key) =>{
//     let resFilterByName = cars.filter(val => val.name.toLowerCase().includes(key.toLowerCase()))
//     cars = resFilterByName;
// }

// const getFilterByID = (key) =>{
//     let resFilterByID = cars.filter(val => val.id === key)
//     cars = resFilterByID;
// }


// const getFilter = ({key, value}) => {
//     let res = cars.filter((usr) => `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase()))
//     cars = res;
// }


// getFilterByName("Malibu");
// getFilterByID(5);
// getFilter({value: 4, key: "id"})
// getFilter({value: "Gentra", key: "name"})
// console.log(cars);

// ******** HomeTask ********

// let arrNum = [4, 10, 888, 99, 100];

// let resSort = arrNum.sort((a, b) => Math.min(b) - Math.max(a))
// console.log(resSort);
// let min = arrNum.sort((a, b) => a - b)[0];
// console.log(min);
// console.log(Math.min(...arrNum)); //Min output: 4
// console.log(Math.max(...arrNum)); //Max output: 888