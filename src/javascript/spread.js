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