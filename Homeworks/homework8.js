//Homework#8

// -- 1 --

let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete"
// console.log(user.name);

delete user.name;

console.log(user);

// -- 2 --

let schedule = {};

 console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

// -- 3 --

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries){
    sum += salaries[key]
}

console.log(sum);

// -- 4 --

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
  
  function multiplyNumeric(obj) {
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
  
  }
  
  multiplyNumeric(menu);
  
  console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );