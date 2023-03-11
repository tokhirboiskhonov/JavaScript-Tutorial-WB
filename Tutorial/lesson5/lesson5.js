// ** 5-dars **

// -- While Loop --

//Syntax of while loop --> Iteration.

// while(condition){
//your code
//body cycle
// }

// -- 1 --
// let i = 0;

// while(i < 3){
//     console.log(i);
//     i++
// }

//-- 2/1 --
// let i = 3;

// Например, while (i) – более краткий вариант while (i != 0):

// while (i != 0) {
    // когда i будет равно 0, условие станет ложным, и цикл остановится
    // console.log(i);
    // i--;
// }

//-- 2/2 --
// let num = 3;
// while (num) console.log(num--);

// -- Do While Loop --  it isn't best practice...

//Syntax of do while loop --> Iteration.

// do{
//your code
// } while(condition)

// let iter = 0;

// do {
//     console.log(iter);
//     iter++;
// } while (iter < 3);


// -- For Loop --

//Syntax of For Loop --> Iteration.

// for(begin; condition; step){
    //your code
// }

// -- 1 --

// for(let i = 0; i < 3; i++){
//     console.log(i);
// }

// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → ...

// -- 2 --

// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
//   }
//   console.log(i); // ошибка, нет такой переменной

// -- 3 --

// let iteration = 0;

// for (iteration = 0; iteration < 3; iteration++) { // используем существующую переменную
//   console.log(iteration); // 0, 1, 2
// }

// console.log(iteration); // 3, переменная доступна, т.к. была объявлена снаружи цикла

// -- 4 --

// let i = 0;
// for(; i < 3; i++) console.log(i);

// -- 5 --

// let i = 0;

// for (; i < 3;) {
//   console.log(i++);
// }

// -- 6 --

// for(;;)console.log('Hi');  // будет выполняться вечно

// -- 7 --

//Прерывание цикла: «break»

// let sum = 0;

// while(true){

//     let value = +prompt("Bведите число", '');

//     if(!value) break; //*

//     sum += value;
// }

// alert('Сумма: ' + sum);

// -- 8 --

//Переход к следующей итерации: continue

// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0) continue;  // если true, пропустить оставшуюся часть тела цикла
//     console.log(i); // 1, затем 3, 5, 7, 9
// }
// Tasks:

// Task-1

// let i = 3;

// while (i) {
//   console.log( i-- );
// }

// Task-2

// let i = 0;
// while (++i < 5) console.log( i ); // 1, 2, 3, 4

// Task-3

// let i1 = 0;
// while (++i1 < 5) console.log( i1 ); // 1, 2, 3, 4

// Task-4

// for (let i = 0; i < 5; i++) console.log( i ); // 0, 1, 2, 3, 4

// Task-5

// for (let i = 0; i < 5; ++i) console.log( i ); // 0, 1, 2, 3, 4

// Task-6

// for(let i = 2; i<= 10; i++){
    // if(i % 2 === 0)console.log(i); // 2, 4, 6, 8, 10
// }

// Task-7

// for(let i = 0; i < 3; i++){
    // console.log(`number ${i}!`);
// }

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// let i = 0

// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++
// }

// while(true){
//     let valueNum = +prompt("Введите число", "");

//     if(valueNum >= 100) break;
//     console.log(valueNum);
// }

// Task-8

// let n = 10;

// nextPrime:
// for(let i = 2; i <= n; i++){
//     for(let j = 2; j < i; j++){
//         if(i % j == 0) continue nextPrime;
//     }
//     console.log(i);
// }


// Task-9

// for(i = 1; i <= 10; i++){
//     for(j = i; j <= 10; j++){
//             console.log(`result is ${i * j}`);
//     }
// }