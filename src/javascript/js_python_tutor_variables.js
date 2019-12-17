// function sayHi(){
//     myName = "Sally";
//     console.log('Hi ' + myName);
// }

// var myName = "Isti";
// var myLastName = "Szilágyi";
// var myAge = 29;
// var myArray = [1, 2, 3, 4, 5, myName, myLastName];
// var myObject = {
//     firstName: "Isti",
//     age: 29,
//     lastName: "Szilágyi",
//     colour: "black",
// }

// console.log(typeof myName);
// console.log(myLastName);
// console.log(myAge);
// console.log(myArray);
// console.log(typeof myObject);

// sayHi();
// myName = 30;
// sayHi();

// var count = 1;

// function increase(){
//     count += 1;
//     console.log(count);
// }

// increase();
// increase();
// increase();

// var myNAME = "Chris";
// console.log(myname);

// var myName = "Chris"
// var amCrhis = (myName === "Chris") ? true : false;
// var amINull;

// console.log(amCrhis);
// console.log(amINull);

// var myName = "Bob";

// function sayName(){
//     var myName = "Chris";
//     console.log(myName);
// }

// console.log(myName);
// sayName();
// console.log(myName);

// var isStarted = false;
// var _123 = '123';
// console.log(_123);

// sayNewName = function(){
//     var _myName = 'Isti';
//     console.log(myName);
// }

// sayNewName();

// var myName = 'Isti';
// var anotherName = myName;
// var yetAnotherName = anotherName;
// console.log(myName);
// console.log(anotherName);
// console.log(yetAnotherName);

function sayHi(shouldSayHi){
    if(shouldSayHi){
        var myName = "Isti";
        console.log(`Hi ${myName}!`);
    }
    else {
        console.log("Goodbye nameless!");
    }
}

sayHi(1);
sayHi(0);