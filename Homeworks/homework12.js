//Homework#12
//************************ CRUD  ************************

let cars = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
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
//             return {...value, [data.inovated]: data.values, engine: 3.5, [data.type]: data.value}
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
// console.log(Math.min(...arrNum)); //Min output: 4
// console.log(Math.max(...arrNum)); //Max output: 888
