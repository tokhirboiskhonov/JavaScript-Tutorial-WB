// ** 4-dars **

// ?? --> Nullish operator

// null yoki undefined bo'lsa keyingi qiymatiga o'tib ketadi. Agar null yoki undefined dan tashqari qiymat kelsa unda usha birinchi kelgan qiymatni ko'rsatadi

const data = null ?? "Sizning ma'lumotingiz kelmadi!"
console.log(data); //result is "Sizning ma'lumotingiz kelmadi!"

const data1 = undefined ?? "This data is comming soon!"
console.log(data1); //result is "This data is comming soon!"

const data2 = 1 ?? "This data is comming soon."
console.log(data2); //result is 1, because the first value is not null or undefined, so result is first value of data.

// Foor loop

for(let i =1; i <= 10; i++){
    console.log("Hi bro"); //Hi bro * 10;
}

for(i = 1; i <= 12; i++){
    if(i % 2 === 0) console.log(`juft son: ${i}`);
    else console.log(`to'q son: ${i}`);
}


// let num10 = 1
// num10++ //result is 1
// console.log(num10); //result is 2

// let num11 = 1;
// console.log(++num11); //result is 2


for(let i = 0; i <= 2; i++){
    console.log("---Tashqi Loop");

    for(let j = 0; j <= 3; j++){
        console.log("---Ichki Loop");
    }
}