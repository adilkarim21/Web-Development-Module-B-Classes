// abc();

// function abc() {
//     console.log("function calling...");
// }


// xyz();

// let xyz = function () {
//     console.log("function calling...");
// }


// Arrow function / Fat Arrow function:

// greet()

// let greet = () => {
//     console.log("arrow function call...");
// };


// let sum = (a,b) => {
//     var start = 10;
//     return start + a + b;
// };

// console.log(sum(10,30));


// High Order Function:

// let outer = (num1) => {
//     return function (num2) {
//         return function (num3) {
//             console.log(num1 + num2 + num3);
//         };
//     };
// };

// outer(10)(20)(30);


// Callback function:

// let abc = (callback) => {
//     callback();
// };

// let xyz = () => {
//     console.log("xyz call...");
// };

// abc(xyz);


// setInterval(() => {}, interval);

// setTimeout(function () {});


// reduce():

// let arr = [{ num: 3 }, { num: 5 }, { num: 7 }, { num: 8 }];

// let element = arr.reduce((a,b) => {
//     return a + b.num;
// } , 12);

// console.log(element);


// some():

// let arr = [{ num: 30 }, { num: 30 }, { num: 50 }, { num: 30 }, { num: 30 }];

// let Arr = arr.some((e,i) => {
//     return e.num === 30;
// });

// console.log(Arr);


// every():

// let arr = [{ num: 30 }, { num: 30 }, { num: 50 }, { num: 30 }, { num: 30 }];

// let Arr = arr.every((e,i) => {
//     return e.num === 30;
// });

// console.log(Arr);


// map():

// let arr = [{ num: 30 }, { num: 30 }, { num: 50 }, { num: 30 }, { num: 30 }];

// let newArr = arr.map((e,i) => {
//     return e + 10;
// });

// console.log(newArr);


// FindIndex Method:

// let arr = [{ num: 30 }, { num: 30 }, { num: 50 }, { num: 30 }, { num: 30 }];

// let Arr = arr.findIndex((e,i) => {
//     return e === 9;
// });

// console.log(Arr);


// Filter Method:

// let citiesArr = ["karachi", "lahore", "islamabad", "quetta"];

// let newArr = citiesArr.filter((e,i) => {
//     return e === "lahore";
// });

// console.log(newArr);


// Map Method:

// let arr = [{ num: 3 }, { num: 5 }, { num: 7 }, { num: 8 }];

// let elements = arr.map((e,i) => {
//     return 10;
// });

// console.log(elements);


// ForEach Method:

// let arr = [{ num: 3 }, { num: 5 }, { num: 7 }, { num: 8 }];

// let elements = arr.forEach((e,i) => {
//     return 10;
// });

// console.log(elements);

