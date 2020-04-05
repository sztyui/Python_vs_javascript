function spreadFunction(...multipleArgs){
    console.log(multipleArgs);
}

const myArray = [1, 2, 3, 4];
const mySecondArray = [5, 6, 7, 8, 9];
const myThirdArray = [...myArray, ...mySecondArray];
mySecondArray.push(...myArray);
console.log(myThirdArray);

function sayHello(x, y, z){
    console.log(`Hello ${x}, ${y}, ${z}!`);
}

const helloArray = ["Bob", "Jane", "Peter"];
sayHello.apply(null, helloArray);

sayHello(...helloArray);

// const arr1 = [10, 20, 30];
// const arr2 = [40, 50, 60];
// arr1.push.apply(arr1, arr2);
// console.log(arr1);

const arr1 = [60, 70, 80];
const arr2 = [90, 100, 110];
arr1.push(...arr2);
console.log(arr1);

const myArr = ["jelly beans"];
const myArr2 = ["donuts", "chocolate"];
const myArr3 = ["pie", "lemonade"];

const newMyArr = [...myArr, ...myArr2, ...myArr3];
console.log(newMyArr);

const listOfCarParts = ["gasket", "tires", "radiator", "muffler"];
const listOfPartsToInsert = ["wipers", "headlights"];

listOfCarParts.splice(0, 1);
console.log(listOfCarParts);

function listInserter(arr1, arr2, index){
    const firstPartOfArray = arr1.slice(0, index);
    const secondPartOfArray = arr1.slice(index);

    const assembledCar = [...firstPartOfArray, ...arr2, ...secondPartOfArray];
    console.log(assembledCar);
}

listInserter(listOfCarParts, listOfPartsToInsert, 1);

const anotherArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const yetAnotherArr = [...anotherArr];
yetAnotherArr.push(10000);
console.log(anotherArr, yetAnotherArr);

function hasManyArgs(...allArgs){
    for(const prop of allArgs){
        console.log(prop + 10);
    }
}

// hasManyArgs(10, 50, 123, 234, 54325, 10243);

const myObj = {
    id: 10,
    sayHi: function(){
        console.log("Hi");
    }
}

const myES6Obj = {
    id: 11,
    sayHi() {
        console.log("ES6 is cool");
    },
    sayBye(){
        console.log("By now!");
    }
}

myES6Obj.sayHi();

const anotherObj = {
    greet(arg1) {
        console.log(`Hey ${arg1}!`);
    },
    anotherMethod(...args){
        this.greet(args[0]);
        console.log(`I have ${args.length} arguments!`);
    }
}

anotherObj.anotherMethod("Tim", 1, false, true, [123], 61);


// Object property shorthands
const a = 10;
const b = 20;
const c = 30;
const d = {
    a: a,
    b: b,
    c: c
}

const e = {a, b, c};

console.log(e.c);