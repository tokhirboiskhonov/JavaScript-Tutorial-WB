// ** 1-dars **

// :::::::::::::::::::::::: Type conversion ::::::::::::::::::::::::
// 1 - Implicit conversion => Automatic;
// 2 - Explicit conversion => Manual;

// 1 - Implicit conversion => Automatic;

//============ Implicit to Sting ============
let result = '5' + 10; // Implicit
console.log(result); // result is 510
console.log(typeof result); // Typeof is String

let result2 = false + "10"; // Implicit
console.log(result2); // result is false10
console.log( typeof result2); // Typeof is String

let result3 = undefined + '10'; // Implicit
console.log(result3); // result is undefined10
console.log(typeof result3); // Typeof is String

//============ Implicit to Number ============

let calculateNum = '4' - '2'; // Implicit
console.log(calculateNum); // result is 2, because there are math operator - between two string, so this operator automatic calculate!
console.log(typeof calculateNum); // Typeof is Number


let multiplyNum = 4 * '2'; // Implicit
console.log(multiplyNum); // result is 8, because there are math operator * between two string, so this operator automatic multiply!
console.log(typeof multiplyNum); // Typeof is Number

let divisionNum = 8 / '2'; // Implicit
console.log(divisionNum); // result is 4, because there are math operator / between two string, so this operator automatic division!
console.log(typeof divisionNum); // Typeof is Number

//============ Implicit to Boolean ============

// true => 1
// falsy value -> false, 0, null, undefined, ''
// false => 0
// null => 0

let booleanNum = 4 - true;
console.log(booleanNum); // result is 3, because true equals to 1 (4-1)
console.log(typeof booleanNum); //Typeof is Number

let booleanNum1 = 4 - false;
console.log(booleanNum1); // result is 4, because true equals to 0 (4-0)
console.log(typeof booleanNum1); //Typeof is Number

let booleanNum2 = '4' - true;
console.log(booleanNum2); // result is 3

let booleanNum3 = '4' - false;
console.log(booleanNum3); // result is 4

let booleanNum4 = 4 - null;
console.log(booleanNum4); // result is 4
console.log(typeof booleanNum4); //Typeof is Number

let booleanNum5 = 4 - undefined;
console.log(booleanNum5); // result is NaN


let numbe1 = true + undefined // NaN
console.log(typeof numbe1); // Typeof is number

let numbe12 = null + undefined // NaN
console.log(typeof numbe12); // Typeof is number


// 2 - Explicit conversion => Manual;

//============ Explicit to Number ============

// 1- Number()

let exnum = Number('200');
console.log(exnum); //result is 200
console.log(typeof exnum); //Typeof is Number

let exnumbool = Number(true);
console.log(exnumbool); //result is 1
console.log(typeof exnumbool); //Typeof is Number

let exnumbool1 = Number(false);
console.log(exnumbool1); //result is 0
console.log(typeof exnumbool1); //Typeof is Number

let res = Number(null);
console.log(res); //result is 0
console.log(typeof res); //Typeof is Number

let emptyStr = Number('');
console.log(emptyStr); //result is 0
console.log(typeof emptyStr); //Typeof is Number

let undef = Number(undefined);
console.log(undef); //result is NaN
console.log(typeof undef); //Typeof is Number

// 2- parseInt()

let parseNum = parseInt('20.2');
console.log(parseNum); //result is 20, chunki bu method faqat butun sonni olib beradi
console.log(typeof parseNum); //Typeof is Number

//==============

let parsefloatNum = parseFloat('20,35')
console.log(parsefloatNum);
console.log(typeof parsefloatNum);

//3- +

let plusNum = +'20.01'
console.log(plusNum);
console.log(typeof plusNum);

//============ Explicit to String ============

// 1- String()

let str = String(204);
console.log(str); //result is 204
console.log(typeof str); //Typeof is String

let str1 = String(3 + 5);
console.log(str1); //result is 8
console.log(typeof str1); //Typeof is String


let str2 = String(undefined);
console.log(typeof str2);

//============ Explicit to Boolean ============

//********* falsy qiymatla *********

let bool = Boolean('');
console.log(bool); //result is false

let bool2 = Boolean(0);
console.log(bool2); //result is false

let bool4 = Boolean(null);
console.log(bool4); //result is false

let bool5 = Boolean(undefined);
console.log(bool5); //result is false

let bool6 = Boolean(NaN);
console.log(bool6); //result is false

//********* truthy qiymatla *********

let bool1 = Boolean(' ');
console.log(bool1); //result is true

let bool3 = Boolean(1);
console.log(bool3); //result is true

let bool7 = Boolean(120);
console.log(bool7); //result is true

let bool8 = Boolean('Hey');
console.log(bool8); //result is true