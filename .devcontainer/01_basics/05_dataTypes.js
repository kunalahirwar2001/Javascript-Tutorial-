// primitive dataTypes, call by value, copy is created changes are made in copy 
// 7 types : String, boolean, null, undefined, number, Symbol, BigInt
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// const score = 100;
// const scoreValue = 100.3;
// const loggedIn = false;
// const outSide = null;
// let UserEmail;
// const name = "kunal";

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);



// non Primitive dataTypes/reference Type  
// Arrays, Objects, Functions
// const heroes = ["shaktiman", "nagraj", "doga"]

// let myobj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function () {
//     console.log("hello world");
// }

// *************************************************
// stack (primitive)(Copy), Heap (Non - Primitive)(Reference)
let myYoutubename = "kunalahirwardotcom"

let anothername = myYoutubename
anothername = "kunalandcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"user@google.com",
    upi:"kunal@paytm.in"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);