// $$$$$$$$$$$$$$$$$$$$$$$$$$$ Homework#6 $$$$$$$$$$$$$$$$$$$$$$$$$$$
//-- 1 --
function mathPow(son, daraja){
    return son ** daraja
}

console.log(mathPow(10, 2));

// -- 2 --

function mathSqrt(son){
    return son ** 0.5
}

console.log(mathSqrt(64));

// -- 3 --

const modules = (n) => {
    if(n > 0 || n == 0){
        return n;
    }else{
        return n - n - n;
    }
};

console.log(modules(-550));