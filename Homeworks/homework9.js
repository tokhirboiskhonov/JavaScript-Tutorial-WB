//Homework#9

// -- 1 --

// let obj = {
//     id: 1,
//     name: "WebBrain"
// }

// for(key in obj)console.log(key); //id, name

// -- 2 --

// let obj = {
//     id: 1,
//     name: "WebBrain"
// }

// for(const key in obj){
//     if(typeof obj[key] === 'number'){
//         console.log(key);
//     }
// }

// -- 3 --

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// }

// for(key in obj){
//     if(typeof obj[key] === 'boolean') console.log(`${key}: ${obj[key]}`);
// } 

// -- 4 --


// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }

// let sum = 0;

// while(true){
//     if(person) sum += person.age;
//     else break;
//     person = person.child
// }

// console.log(sum); // 146

// -- 5 --

// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function enterToSite(parol,name){
//         if(parol === person.parol && name === person.name){
//             console.log("Hush kelibsiz");
//         }else{
//             console.log("Parol yoki name xato berilgan");
//         }
// }
// // enterToSite(); // Parol yoki name xato berilgan
// enterToSite(person.parol, person.name); //Hush kelibsiz