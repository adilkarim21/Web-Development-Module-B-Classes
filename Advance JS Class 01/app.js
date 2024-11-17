// ADVANCE JS (ES6)



// 1.) difference btw var, let & const:


// var firstName = "adil";

// console.log(firstName);


// (BLOCK-SCOPE):
// {

// }



// Variable Declaration with var let & const:
// Global & Block Scope:


// var firstName = "adil";

// {
//     var firstName = "muhammad";
//     console.log(firstName);
// }

// console.log(firstName);


// let firstName = "adil";

// {
//     let firstName = "muhammad";
//     console.log(firstName);
// }

// console.log(firstName);


// const firstName = "adil";

// {
//     const firstName = "muhammad";
//     console.log(firstName);
// }

// console.log(firstName);



// Function Scope:

// function num() {
//     let nums = 10;
// }

// num();
// console.log(nums);



// Reassigning OR Updating values:


// var num = 50;

// num = 100;

// console.log(num);


// let num = 50;

// num = 100;

// console.log(num);


// const num = 50;

// num = 100;

// console.log(num);



// (We can update a key's value but not the whole object when using 'const'):

// const obj = {
//     name: "adil",
//     email: "adil@gmail.com",
//     city: "karachi",
// };

// obj = "Muhammad Adil"

// console.log(obj);


// let obj = {
//     name: "adil",
//     email: "adil@gmail.com",
//     city: "karachi",
// };

// obj = "Muhammad Adil"

// console.log(obj);



// Redeclaring Variables:

// var firstName = "Muhammad";

// var firstName = "Adil";

// console.log(firstName);


// let firstName = "Muhammad";

// let firstName = "Adil";

// console.log(firstName);


// const firstName = "Muhammad";

// const firstName = "Adil";

// console.log(firstName);



// 2.) Hoisting:


// console.log(firstName);

// var firstName = "adil";


// console.log(firstName);

// let firstName = "adil";


// console.log(firstName);

// const firstName = "adil";


// function greet() {
//     console.log("welcome user..");
// }

// greet();


// greet();

// function greet() {
//     console.log("welcome user..");
// }


// func();
// console.log(func);


// var func = function () {
//     console.log("welcome user..");
// }


// let func = function () {
//     console.log("welcome user..");
// }


// const func = function () {
//     console.log("welcome user..");
// }



// -----------------------------------------------------------------------------


// Regular Function:

// function abc() {

// }


// Anonymous Function:

// var abc = function () {

// }


