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


// function squareAndMultiply(num1, num2){
    
//     let testLet = "I am a test";

//     function squarer(x){
//         return x*x;
//     }


//     function multiplyBy10(y){
//         return y * 10;
//     }


//     return squarer(num1) * multiplyBy10(num2);
// }

// const first = squareAndMultiply(4,4);
// const second = squareAndMultiply(10,2);

// console.log(first);
// console.log(second);


// function personFormatter(firstName, lastName, age){
//     function formatNames(arg1, arg2){
//         return arg1 + " " + arg2;
//     };
//     const formattedName = formatNames(firstName, lastName)
//     function dataFormatter(fullName, num){
//         var d = new Date();
//         const formattedData = {
//             name: fullName,
//             age: num,
//             dayOfBirth: d.setFullYear(d.getFullYear() - num )
//         };
//         return formattedData;
//     }
//     return dataFormatter(formattedName, age);
// }


// console.log(personFormatter("Miccs", "Bjúkennen", 29));

// var sayHi = () => {
//     console.log("Hi, I'am using arrow function!");
// }

// sayHi();

// const multiplier = (num1, num2) => {
//     return num1 * num2;
// }

// console.log(multiplier(5, 10));

// function mapUserNames(myArr){
//     const userNameList = myArr.map((user) => {
//         return user.name;
//     });
//     return userNameList;
// }


// console.log(mapUserNames(users));

// const switcher = (x, y) => [y, x];

// const heyyer = x => 'Hey ' + x + '!';

// console.log(heyyer('Joe'));

// const users = [
//     {name: "Chris", age: 60},
//     {name: "Jane", age: 30},
//     {name: "Billy", age: 45}
// ]

// const mapUserNames = (myArr, param) => myArr.map(user => user[param]);
// console.log(mapUserNames(users, 'age'));

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const filteredNumbers = (myArr, parity) => myArr.filter(num => num % 2 === parity);
// console.log(filteredNumbers(numbers, 0));

// const doubledNumbers = (num) => {
//     const numberContainer = [];
//     num.forEach(x => {
//         const doubled = x * 2;
//         numberContainer.push(doubled);
//     });
//     return numberContainer;
// }

// const doubledNumbers2 = (num) => 2 * num;

// console.log(numbers.map(doubledNumbers2));

// function numberMultiplier(x=5, y=10){
//     return x * y;
// }

// function isItAFive(number){
//     return Number(number) === 5 ? true : false;
// }

// console.log(numberMultiplier());

// console.log(isItAFive('4'));

// var batman = bat => bat.map(i => Number(i)).join() + ' Batman!';
// console.log(batman(['a', 'b', 'c', 'd']));

// function stringSplitter(str){
//     return str.split(" ");
// }

// console.log(stringSplitter("Na mi a fasz van veletek?"));

// const bankAccount = {
//     canSpendMoney: true,
//     hasCreditCard: true,
//     balance: 100
// }

// function canPurchaseItem(price, acct=bankAccount){
//     if(acct.canSpendMoney) {
//         acct.balance -= price;
//         if(acct.balance <= 0){
//             acct.canSpendMoney = false;
//         }
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(bankAccount);
// console.log(canPurchaseItem(100));
// console.log(bankAccount);
// console.log(canPurchaseItem(101));
// console.log(bankAccount);

// console.log(canPurchaseItem(100, {canSpendMoney: true, hasCreditCard: false, balance: 40}));

// function logAllArguments(x, y){
//     const args = Array.prototype.slice.call(arguments, logAllArguments.length);
//     console.log(args.sort());
// }

// logAllArguments('hi', 'hello', 'a', 'rák', 'egye', 'ki', 'a', 'szívedet');;

function logAllArguments(x, ...nums){
    console.log(nums.length);
}

logAllArguments(1, 2, 3, 4, 5);

function multiply(multiplier, ...nums){
    return nums.map((n) => multiplier * n);
}

console.log(multiply(10, 5, 1, 2, 3, 4, 5, 7, 8, 9));


function Dog(years, breed) {
    this.years = years;
    this.type = breed;
    setInterval(() => {
        if(isNaN(this.age))
            this.age = 1;
        else
            this.age += 1;
        console.log(this);
    }, 5000);
}

function pp(dog){
    console.log("Years: " + dog.years + ", Type: " + dog.type);
}

const spike = new Dog(3, "Golden Retriver");
const fido = new Dog(5, "Poodle");
pp(spike);
pp(fido);