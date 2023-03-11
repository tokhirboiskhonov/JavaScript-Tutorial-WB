// ** 2-dars **

// :::::::::::::::::::::::: Comparison ::::::::::::::::::::::::

console.log(10 == '10'); // == check up only value --> true
console.log(10 === '10'); // == check up value and data types --> false
console.log(10 > 10); //result is false
console.log(10 > 5); //result is true
console.log(10 >= 10); //result is true
console.log(10 <= 9); //result is false

// :::::::::::::::::::::::: Logical operators ::::::::::::::::::::::::

// 1- && (and)

// let car = 'BMW';
// let car2 = 'AUDI'

// car === 'BMW' && car2 === 'AUDI' && console.log('15000$');

let login = 'student';
let password = 'xyz'

login === 'student' && password === 'xyz' ? console.log('Welcome to your profile') : console.log('Your login or password is wrong'); //If we use && operator, so result is "Welcome to your profile", because both infos are correct.

login === 'student1' && password === 'xyz' ? console.log('Welcome to your profile') : console.log('Your login or password is wrong'); //If we use && operator, so result is "Your login or password is wrong", because login is wrong.

login === 'studnet2' || password === 'xyz' ? console.log('Welcome to your profile') : console.log('Your login or password is wrong'); //If we use || operator, so result is "Welcome to your profile", because login can be wrong, however password is correct, if also only one correct answer, this operator can be give you positive answer.

console.log(0 && true && false); //result is 0
console.log(1 && true && false); // result is false
console.log(1 && false && 0); // result is false


// 2- || (or)

console.log(1 || false || true); //result is 1

console.log(false || 0 || true); //result is true

// 3- ! (not)

let car = 'Tayota';

car == 'Tayota' && console.log("10000$");

car !== 'Tayota' && console.log("Don't have this brand of car");

console.log(!false); //result is true.

console.log(!true); //result is false.

console.log(!0); //result is true.

console.log(!1); //result is false.