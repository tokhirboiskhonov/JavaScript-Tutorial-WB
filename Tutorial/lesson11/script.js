// ** 11-dars **

// ************* Array methods (Basic) *************

// -- 1 --

// let arr = ['a', 'b'];

// arr.push('c', 'd'); //push methodi oxiridan qo'shib beradi ma'lumotni
// console.log(arr); //result is ['a', 'b', 'c', 'd']

// -- 2 --

// arr.pop(); //pop methodi oxiridan bitta ma'lumotni o'lib tashidi
// console.log(arr); //result is ['a', 'b', 'c']

// -- 3 --

// arr.unshift(1, 2, 3); //unshift methodi bo'shidan qoshib beradi ma'lumotni
// console.log(arr); //result is [1, 2, 3, 'a', 'b']

// -- 4 --

// arr.shift(); //shift methodi bo'shidan malumotni ochirib beradi.
// console.log(arr); //result is [ 'b' ]

// ===================

// let arr = [
//     {name: "Sirojiddin"},
//     {name: "Firdavs"},
//     {name: "Tohirbek"},
// ];

// const check = (inp) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].name.includes(inp)){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }

// check('e');

// ===================

// ************* Array methods (Advanced) *************

// -- 1 --

// let nums = [4, 2, 1, 3, 9, 6, 5, 7];
// nums.sort(); 
// console.log(nums); //result is [ 1, 2, 3, 4, 5, 6, 7, 9 ]

// let nums1 = [4, 2, 1, 3, 9, 6, 5, 7, 100, 78, 89, 55,];

// nums1.sort((a,b) => a - b); //result is [ 1,   2, 3,  4,  5, 6,   7, 9, 55, 78, 89, 100 ]
// nums1.sort((a,b) => b - a); //result is [ 1,   2, 3,  4,  5, 6,   7, 9, 55, 78, 89, 100 ]
// console.log(nums1); //result is [ 100, 89, 78, 55, 9, 7,  6,  5,  4, 3, 2,  1 ]

// let arr = ['d', 'c', 'a', 'b'];
// arr.sort();
// console.log(arr); //result is [ 'a', 'b', 'c', 'd' ]

// -- 2 --

// let arr1 = ['d', 'c', 'a', 'b', 'E', 'A', 'B', 'C'];

// arr1.sort((a, b) => a.localeCompare(b)); //result is ['a', 'A', 'b','B', 'c','C', 'd', 'E']
// arr1.sort((a, b) => b.localeCompare(a)); //result is ['E', 'd', 'C','c', 'B', 'b','A', 'a']
// console.log(arr1);

// -- 3 --

// let arr1 = ["Tokhir"];
// let arr2 = ["Tokhir"];

// let arr3 = arr1;

// console.log(arr1 === arr2); //false
// console.log(arr1 === arr3); //true

// -- 3-1 --

// let num = 129348567;  
// const digits = Array.from(String(num), Number);
// digits.sort((a, b) => a - b); //result is [1, 2, 3, 4, 5,6, 7, 8, 9]
// digits.sort((a, b) => b - a); //result is [9, 8, 7, 6, 5,4, 3, 2, 1]
// console.log(digits);

// -- 3-2 --

// let num1 = 129348567;

// let arrNum = +num1.toString().split('').sort().join(''); //[1, 2, 3, 4, 5,6, 7, 8, 9]
// console.log(arrNum);

// -- 4 --

// === MAP === map --> qiymatni update qila olamiz, va return ga qaytadi.

// let arr = ['Firdavs', 'Sirojiddin', 'Damir', 'Murodjon'];

// arr.map((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })

// let mapping = arr.map((value) => {
//     return 'Hello world'
// })

// console.log(mapping);

// === For Each === forEach --> qiymatni update qila olmaymiz, va return ga qaytmaydi.

// arr.forEach((value, idx, array) => {
    // console.log(value);
    // console.log(idx);
    // console.log(array);
// })

// ======== Arrow function ========

// let checking = arr.forEach((val)=>{
//     return 'Hello world!'
// });

// console.log(checking); //result is undefined, because you can't update data, which inside array.

//  ========== Function decloration ==========

// let arr1 = ["Firdavs", "Sirojiddin", "Damir", "Murodjon", "Tokhir"];

// let mapping = arr1.map(function callback(currentValue, index, array){
//     return "Hello world!"
// })

// console.log(mapping);

// === Filter ===

// let arr = [57, 86, 43, 25, 13];
// let arrStr = ["Firdavs", "Sirojiddin", "Damir", "Murodjon", "Tokhir"];

// let filtered = arrStr.filter(val => val !== "Damir"); //[ 'Firdavs', 'Sirojiddin', 'Murodjon', 'Tokhir' ]
// console.log(filtered);

// arr.map(value => {
//     if(value !== 57) console.log(value);
// })
