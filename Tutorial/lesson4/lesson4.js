// ** 4-dars **

// ?? --> Nullish operator

// null yoki undefined bo'lsa keyingi qiymatiga o'tib ketadi. Agar null yoki undefined dan tashqari qiymat kelsa unda usha birinchi kelgan qiymatni ko'rsatadi

const data = null ?? "Sizning ma'lumotingiz kelmadi!";
console.log(data); //result is "Sizning ma'lumotingiz kelmadi!"

const data1 = undefined ?? "This data is comming soon!";
console.log(data1); //result is "This data is comming soon!"

const data2 = 1 ?? "This data is comming soon.";
console.log(data2); //result is 1, because the first value is not null or undefined, so result is first value of data.

let height = null;

console.log(height ?? 100); //result is 100

// Foor loop

for (let i = 1; i <= 10; i++) {
    console.log("Hi bro"); //Hi bro * 10;
}

for (let i = 1; i <= 10; i++) {
    console.log(i); //Hi bro * 10;
}

for (i = 1; i <= 12; i++) {
    if (i % 2 === 0) console.log(`juft son: ${i}`);
    else console.log(`to'q son: ${i}`);
}

// let num10 = 1
// num10++ //result is 1
// console.log(num10); //result is 2

// let num11 = 1;
// console.log(++num11); //result is 2

// for (let i = 0; i <= 2; i++) {
//     console.log("---Tashqi Loop");

//     for (let j = 0; j <= 3; j++) {
//         console.log("---Ichki Loop");
//     }
// }

// let idx = 1;

// for (; idx <= 10; ) {
//     console.log(idx);
//     idx++
// }

// var sum = 0;

// for(i = 1; i < 12; i++){
//     if(sum === 10)break;
//     console.log(sum += i);//result is 1, 3, 6 ,10
// }

for(let i = 1; i <= 12; i++){
    if(i % 3 === 0)break;
    console.log(i);
}

outer: for(let i = 1; i <= 10; i += 3){
    inner: for(let j = 1; j <= 10; j += 3){
        if(i === 4)break outer;
        console.log(`J qiymati: ${j}`);
    }
    console.log(`I qiymati: ${i}`);
}

for(i = 1; i <= 10; i++){
    console.log("============");
    for(j = i; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`);
    }
}

outer: for(let i = 1; i <= 5; i++){
    inner: for(let j = 1; j <= 5; j++){
        if(i === 2)break outer;
        console.log(`J qiymati: ${j}`);
    }
    console.log(`I qiymati: ${i}`);
}