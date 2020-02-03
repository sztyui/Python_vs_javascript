// Functions
/*
    "A function is a JavaScript procedure - a set of statements
    that performs a task or calculates a value. [...]"
    - MDN
*/

/* function sayHi(user) {
    console.log('Hi ' + user.firstName + " " + user.lastName + "!");
};

function numberDuble(num){
    return num * 2;
}

function numberAdder(num1, num2){
    return num1 + num2;
}

var bob = {firstName: "Bob", lastName: "Bjúkennen"};
var brike = {firstName: "Brájk", lastName: "Szilent"};
var klubb = {firstName: "Klubb", lastName: "Korona"};

sayHi(bob);
sayHi(brike);
sayHi(klubb);

console.log(numberDuble(10));

const numTwoDoubled = numberDuble(2);
const numFiveDoubled = numberDuble(5);
console.log(numTwoDoubled);
console.log(numFiveDoubled);
console.log(numberAdder(numTwoDoubled, numFiveDoubled));

function sayHi() {
    if(!myName){
        var myName = 'Bob';
    }
    console.log("Hi " + myName);
}

const myName = "Chirs";

sayHi(); */

// const squaredNumber = function (num) {
//     return num * num;
// }

// const numberAdder = function (num1, num2, task) {
//     return task(num1 + num2);
// }

// console.log(numberAdder(2, 3, squaredNumber));
/* 
let myNumber = 100;

function addTwenty(num) {
    return num + 20;
}

console.log(addTwenty(myNumber));
console.log(myNumber); */

// const myInfo = {Name: "Chris", age: 30};
// const myNumbers = [1,2,3,4,5];


// function addToArray(myArray){
//     myArray.push(6);
// }


// function birthDay(myObj){
//     myObj.Name = "Aladár" + " " + myObj.Name;
//     myObj.age++;
//     //return myObj;
// }

// console.log(myInfo);
// birthDay(myInfo);
// console.log(myInfo);
// console.log(myNumbers);
// addToArray(myNumbers);
// console.log(myNumbers);


function squareAndMultiply(num1, num2){
    
    let testLet = "I am a test";

    function squarer(x){
        return x*x;
    }


    function multiplyBy10(y){
        return y * 10;
    }


    return squarer(num1) * multiplyBy10(num2);
}

const first = squareAndMultiply(4,4);
const second = squareAndMultiply(10,2);
const third = squareAndMultiply("Hello","kiraly");

console.log(first);
console.log(second);
console.log(third);
