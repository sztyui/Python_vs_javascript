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


function objectBuilder(x, y, z, numTimes){
    const allObjects = [];
    for(let i = 0; i < numTimes; i++){
        allObjects.push({x, y, z})
    }
    return allObjects;
}

const bob = objectBuilder(10, "bob", false, 3);
const { x: bobID } = bob;
console.log(bobID);

// Computed property keys:

const myID = 1;
const idParam = "userID";
const computedObj = {
    [idParam + "_" + myID]: "0123456",
};

console.log(computedObj.userID_1);

function getFirst(word){
    return word.charAt(0);
}

function getRest(word){
    return word.slice(1);
}

function capitalizer(word){    
    return getFirst(word).toUpperCase() + getRest(word).toLowerCase();
}

const obj111 = {
    [capitalizer("hello")]: "something",
    [capitalizer("ALLCAPS")]: "anything",
}

function dataFormat(arr){
    const formattedObj = {};
    for(const prop of arr){
        formattedObj["userID" + prop.x] = prop;
    }
    return formattedObj;
}

// console.log(dataFormat(bob));

// Map object
/*
    -- Used for simple key/value pairs.
    -- Any value can be used for either a key or value(i.e object, string, function)
    -- Reasons for using map over object:
        - Object prototype has default key that might confilct with own keys
        - Key of map can be anything whereas with objects, have to be string of symbol
        - Can easily get the size of Map
*/

const myMap = new Map()
const firstKey = "key2";
const firstVal = "first value :D";
const secondKey = {};
const thirdKey = () => {};
const fourthKey = () => {};

myMap.set(firstKey, firstVal);
myMap.set(secondKey, "AnotherBoringValue");
myMap.set(thirdKey, "Valami");
myMap.set("key", "value");
myMap.set("anotherKey", "anotherValue");
myMap.set("anotherKeyTwo", "anotherValueAgain");

myMap.delete(thirdKey);

// for (const [key, value] of myMap.entries()){
//     console.log(`${key} => ${value}`);
// }

const myMapData = [["keyA", "value one"], ["keyB", "value two"]];
const anotherMap = new Map(myMapData);
console.log(anotherMap);

// Set object
/*
    - Lets you store unique values of any type
    - Each element is unique
    - 
*/

const exampleArr = [1,1,1,2,3,4,5,5,5,5];
const mySet = new Set(exampleArr);
mySet.add("Bob");
mySet.add(true);
mySet.add(true);
console.log(mySet);

const arrFromSet = Array.from(mySet);
arrFromSet.push(1,2 ,3);
console.log(arrFromSet);

const exampleSentence = "Hello there!";
const myExampleSet = new Set(exampleSentence);
console.log(myExampleSet);
