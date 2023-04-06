//Homework#14

// -- 1 --

let summ = function (number) {
    let sum = 0;

    for (i = 1; i <= number; i++) {
        sum += number;
        console.log(sum);
    }
};
summ(10);

// -- 2 --

function getUniqueValues(arr) {
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];

        let isValueAlreadyInArray = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (currentValue === uniqueArr[j]) {
                isValueAlreadyInArray = true;
                break;
            }
        }
        if (!isValueAlreadyInArray) {
            uniqueArr.push(currentValue);
        }
    }

    return uniqueArr;
}

console.log(getUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 3, 4, 2, 5]));
