// Object Methods:


// 1.) Keys

let obj = {
    name: "adil",
    age: 17,
    age: 17,
    city: "karachi",
    email: "adil@gmail.com",
};

for ( let keys in obj ) {
    console.log(keys , obj[keys]);  
}

for ( let keys in obj ) {
    console.log(keys);  
}

console.log(Object.keys(obj));


// 2.) Values

console.log(Object.values(obj));


// 3.) Freeze

console.log(Object.freeze(obj));


// 4.) Entries

console.log(Object.entries(obj));



// Short Circuit:


// && AND Opertor

// || OR Opertor


let age = 22;

let check1 = age === 22 && "Allow";

console.log(check1);


let name = "null";

let check2 = name  && "Allow";

console.log(check2);


// ------------------------------------------------------------------------------


let a = 2;

let b = 3;


let exp1 = 30 + a-- - (false - 5) + ++b - a++ || "adil";

console.log(exp1);


let exp2 = 5 + 10 - (true + b) + --a || false;

console.log(exp2);


let exp3 = 3 - false + true + "hello" || true;

console.log(exp3);


let exp4 = 15 - 10 + 5 * 3 - (4 + b - a++ - a + true) || false && true;

console.log(exp4);


let exp5 = 65 * 15 - 2 + --b + --a + true - false && false || "good job!";

console.log(exp5);


let exp6 = false - --a + --a -45 + true - (false + a++ + b++ -true * (45 - false + --b) * a) || true + 34 + "abc" && "dafa ho";

console.log(exp6);



// Default Parameters:

function sum( a = 5 , b = 10 ) {
    console.log(a + b);
}

sum(20,30);



// Rest Operator (only work in functions):


function sum(a, b, ...rest) {

    console.log(a , b , ...rest);
    let storeNum = 0;

    for ( let i = 0 ; i < rest.length ; i++ ) {
        storeNum = rest[i] + storeNum;
    }

    console.log(a + b + storeNum);
    
}

sum(100, 200, 300, 400);



// BioData:

function bioData(...rest) {

    console.log(...rest);
    let storeBio = [];

    for ( var i = 0 ; i < rest.length ; i++ ) {
        storeBio[i] = rest[i];
        console.log(storeBio[i]);
    }

}

bioData("adil", "karachi", 17, "matric");



// Spread Operator (can be used in array & object):

let arr1 = ['abc', 12];

let arr2 = ['xyz', 15];

// let arr3 = arr1.concat(arr2);                   //Wrong

let arr3 = [...arr1,...arr2];                     //Correct

console.log(arr3);


let obj1 = {
    bookId: 1,
    bokTitle: "abc",
};

let obj2 = {
    studentId: 186,
    studentName: "adil",
};

let obj3 = {...obj1,...obj2};

console.log(obj3);



// Destructing of Array:

let [name1,num,status,obj5] = ['abc', 50, true, {id:1,status:false}];

console.log(name1);
console.log(num);
console.log(status);
console.log(obj5);



// Destructing of Object:

let {id,name0,status0} = {
    id: 5,
    name0: "zain",
    status0: true,
};

console.log(id,name0 ,status0);
