// ADVANCE JS (ES6)



// Template Literals:

// let userName = prompt("Enter your name");

// let userCity = prompt("Enter your city");

// console.log(`Hello! My name is ${userName}. I live in ${userCity}.`);


// Multiplication Table:

// var userInput = +prompt("Enter any number");
// var range = +prompt("Enter table range");

// for (var i = 1 ; i <= range ; i++) {
//     document.write(`
//         <center>
//         ${userInput} x ${i} = ${userInput*i}
//         </center>
//         `);
// }



// (Triple Equal to) / Wrong Method

// let age = "20";

// if (age === 20) {
//     console.log("Allowed!");
// }
// else {
//     console.log("Not Allowed!");
// }


// (Double Equal to) / Wrong Method

// let age = "20";

// if (age === 20) {
//     console.log("Allowed!");
// }
// else {
//     console.log("Not Allowed!");
// }



// Ternary Operators (ES6) / Correct Method:


// let age = 20;

// let check = age === 20 ? 'Allowed!' : 'Not Allowed!';

// console.log(check);



// let age = 25;

// let gender = "male";


// if (age === 25 && gender === "male") {
//     console.log("Allowed!");
// }
// else {
//     console.log("Not Allowed!");
// }


// let check = age === 25 && gender === "male" ? 'Allowed!' : 'Not Allowed!';

// console.log(check);




// if (age === 25) {
//     if (gender === "male") {
//         console.log("Allowed!");
//     }
//     else {
//         console.log("Gender not matched!");
        
//     }
// }
// else {
//     console.log("Age not matched!");
// }


// let check = 
//     age === 25 
//         ? gender === "male" 
//         ? 'Allowed!' 
//         : 'Gender not matched!' 
//         : 'Age not matched!';

// console.log(check);



// User Percentage Calculator:

// let userPercentage = +prompt("Enter your percentage..");

// let check = userPercentage >= 90 ? "Brilliant!" :
//             userPercentage >= 80 ? "Impressive!" :
//             userPercentage >= 70 ? "Very Good!" :
//             userPercentage >= 60 ? "Good!" :
//             userPercentage >= 50 ? "Average!" :
//             userPercentage >= 40 ? "Need Improvement!" : "Very Bad";

// console.log(check);



// Object Methods:


// let obj = {
//     name: "abc",
//     age: 20,
//     city: "karachi",
//     email: "abc123@gmail.com",
// };

// a.) Keys:

// console.log(Object.keys(obj));


// b.) Values:

// console.log(Object.values(obj));


// c.) Freeze:

// console.log(Object.freeze(obj));


// d.) Entries:

// console.log(Object.entries(obj));