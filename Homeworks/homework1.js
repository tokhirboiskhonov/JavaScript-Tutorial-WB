// $$$$$$$$$$$$$$$$$$$$$$$$$$$ Homework#1 $$$$$$$$$$$$$$$$$$$$$$$$$$$

// -- 1 --

let num = 4;

num == 4 && console.log('juft son') || num == 5 && console.log('toq son');

// -- 2 --

let score = 49;

score >= 86 && score <= 100 && console.log('A') || score >= 61 && score <= 85 && console.log('B') || score >= 50 && score <= 60 && console.log('C') || score < 50 && console.log('Failed!');

// -- 3 --

let fruits = 'pomidor';

fruits == 'olma' && console.log('10 000') || fruits == 'nok' && console.log('12 000') || fruits == 'tarvuz' && console.log('20 0000') || fruits == 'pomidor' && console.log('unday meva yoq');

// -- 4 --

let numbers = 60;

if(numbers % 3 == 0 && numbers % 5 == 0){
    console.log('3 ga va 5 ga bolinadi');
}else if(numbers % 5 == 0){
    console.log('5 ga bolinadi');
}else if(numbers % 3 == 0){
    console.log('3 ga bolinadi');
}else{
    console.log('The end');
}

// -- 5 --

let age = 14;

age > 13 && age < 91 ? console.log('Okay') : console.log('No');

// -- 6 --

let age1 = 14

!age1 > 13 && !age1 < 91 ? console.log('Okay') : console.log('No');

//  -- 7 --

if(-1 || 0) console.log('first'); // first
if(-1 && 0) console.log('second'); // natija chiqmidi
if(null || -1 && 1) console.log('third'); // third