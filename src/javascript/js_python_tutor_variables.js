function sayHi(){
    console.log('Hi ' + myName);
}

var myName = "Isti";
var myLastName = "Szilágyi";
var myAge = 29;
var myArray = [1, 2, 3, 4, 5, myName, myLastName];
var myObject = {
    firstName: "Isti",
    age: 29,
    lastName: "Szilágyi",
    colour: "black",
}

console.log(typeof myName);
console.log(myLastName);
console.log(myAge);
console.log(myArray);
console.log(typeof myObject);

sayHi();
myName = "Jane";
sayHi();