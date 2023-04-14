// ** 16-dars **

// IIFE => Immidietely invoked function expression.

// === Function decloration in IIFE ===

// (function myFunc(){
//     console.log("Hello myFunc!");
// })()

// === Arrow function in IIFE ===

// (() => {
//     console.log("Hello Arrow func!");
//     let num = 0; // local variable
// })();

// === Function expression in IIFE ===

// (function () {
//     console.log("Hello Expression func");
// })();

// ======== Prototype ========

// const user = {
//     firstName: "Tokhir",
//     lastName: "Boiskhonov",
//     greeting() {
//         console.log("Hello");
//     },
// };

// const user2 = [];

// console.log(user.greeting());

// --- Global prototype ---

// Object.prototype.getAge = () => {
//     console.log("I am 23 years old.");
// };

// Array.prototype.example = () => {
//     console.log("Hello Array");
// };

// const example = Object.create(user)

// Object.prototype.getAge = () => {
//     console.log("I am 23 years old.");
// };
// console.log(example.firstName); //output: Tokhir

// let str = "Example";
// console.log(str);

// const str1 = new String("example");
// console.log(str1);

// const num = new Number(100);
// console.log(num);

// ======== FP => functional programming ========

// --- Constructor function ---
// function User(name) {
//     this.name = name;
// }

// let users = new User("Tokhir");

// console.log(users.name); //output: Tokhir
// console.log(typeof users); //output: Object

// ======== Class ========

// class User {
//     constructor(name, age, status) {
//         this.name = name; //if no global object, it means this keyword, so this function can be returns undefined
//         this.age = age;
//         this.status = status;
//     }

//     greeting() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.status);
//     }
// }

// let users = new User("Tokhir", 23, "Student");

// console.log(users.name); //output: Tokhir
// console.log(users.age); //output: 23
// console.log(users.status); //output: Student

// class Mashina {
//     constructor(brand, color, price) {
//         (this.brand = brand), (this.color = color), (this.price = price);
//     }

//     showInfo() {
//         console.log(
//             `Car's brand is ${this.brand}, color is ${this.color}, ${this.price}`
//         );
//     }
// }

// let cars1 = new Mashina("BMW", "Black", "50000$");
// let cars2 = new Mashina("AUDI", "White", "30000$");
// let cars3 = new Mashina("TAYOTA", "Red", "20000$");
// let cars4 = new Mashina("MERC", "Blue", "10000$");

// cars1.showInfo();
// cars2.showInfo();
// cars3.showInfo();
// cars4.showInfo();

// console.log(cars1);

// Class - inheritance -- meroz olish

// class1
class User1 {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register() {
        console.log(`${this.username} is registered now.`);
    }
}

//class2

class Member extends User1 {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage() {
        console.log(
            `${this.username} is subscribed to the ${this.package}, and his email is ${this.email}. Passowrd is ${this.password}`
        );
    }
}

let memberUser = new Member(
    "Tokhir",
    "tokhir060@gmail.com",
    "Tohir8008A",
    "Gold status"
);

// memberUser.getPackage();
// memberUser.register();

class Member2 extends Member {
    constructor(username, email, password, memberPackage, status) {
        super(username, email, password, memberPackage);
        this.status = status;
    }

    getStatus() {
        console.log(
            `${this.username} is subscribed to the ${this.memberPackage}, his email is ${this.email}, and passowrd is ${this.password}. He is a ${this.status}`
        );
    }
}

let member2 = new Member2(
    "Tokhir",
    "tokhir060@gmail.com",
    "Tohir8008A",
    "Gold status",
    "student"
);

member2.getStatus();

// let user = new User1("Tokhir", "tokhir060@gmail.com", "Tohir8008A");

// user.register();

// ======== OOP => Object oriented programming ========

// 1-Encaplsulation
// 2-Polymorphism
// 3-Inheritance
// 4-Abstranction
