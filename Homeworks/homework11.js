//Homework#11

let users = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

//--1--

// let filtered = users.filter(value => value.year < 2000);
// console.log(filtered);

//--2--

// let filtered1 = users.filter(v => v.year > 2010)
// console.log(filtered1);

//--3--

// let resEngine = users.sort((a, b) => b.engine - a.engine);
// console.log(resEngine);

//--4--

// let resYear = users.sort((a, b) => a.year - b.year);
// console.log(resYear);

//--5--

// let resName = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(resName);

//--6--

// let mapUsers = users.map((value) => {
// if(value.year < 2000){
// value.status = "Eski"
// console.log(value);
// }
// })

//--6--

// let mapUsers1 = users.map((value) => {
// if(value.year >= 2000 && value.year <= 2010){
// value.status = "O'rta"
// console.log(value);
// }
// })

//--7--

// let mapUsers2 = users.map((value) => {
//     if(value.year >= 2010 && value.year <= 2022){
//         value.status = "Yangi"
// console.log(value);
//     }
// })

//--8--

// const onDelete = (id) => {
//     users = users.filter(user => user.id !== id)
//     console.log(users);
// }
// onDelete(4);

//--9--

// let arr = [1, [3, [5]], [10]];
// let sum = 0;

// function sumArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       sumArray(arr[i]);
//     } else {
//       sum += arr[i];
//     }
//   }
// }

// sumArray(arr);
// console.log(sum); // output: 19
