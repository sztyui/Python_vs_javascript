
class Ship {
    constructor() {
        this.floats = true;
        this.material = "steel";
    }

    toString = function () {
        let answer = "The ship sank.";
        if (this.floats) {
            answer = "The ship actually floats.";
        }
        return `${answer} Material: ${this.material}`;
    };
};

// class Animal {
//     constructor(type, name){
//         this.type = type;
//         this.name = name;
//     }
    
//     toString(){
//         return `My name is ${this.name}. I am a(n) ${this.type}!`;
//     }
// };

const myShip = new Ship();
console.log(myShip.toString());

const eddie = new Animal("dog", "Eddie");
document.getElementById("myDog").innerText = eddie.toString();

const myObj = {
    a: 1,
    b: 2,
    valueOf: function(){
        console.log("Got me!");
    }
};
const myString = "Helloka!";
console.log(myObj.valueOf());
console.log(myString.charAt(3));
myObj.valueOf();

console.log(myObj.hasOwnProperty('valueOf'));

const myArray = ["a", "b", "c"];
myArray.push("d");
console.log(Array.prototype);

const name1 = {
    name: "Billy",
    age: "16",
    sayName:  function() {
        console.log(`My name is ${this.name}.`);
    },
    sayYourAge: function() {
        console.log(`I am ${this.age} years old.`)
    }
}

const name2 = Object.create(name1);
name2.name = "Jane Doe";
name2.sayName();

const name3 = Object.create(name2);
name3.sayName();
console.log(name3.hasOwnProperty("name"));

function Animal(name, age){
    this.name = name;
    this.age = age;
}

Animal.prototype.introduce = function() {
    return `Hi! My name is ${this.name}. I am ${this.age} years old. My breed is ${this.breed}.`;
}

Animal.prototype.makeNoise = function(){
    return `Generic animal noise.`;
}

function Dog(name, age, breed){
    Animal.call(this, name, age);
    this.breed = breed;
    
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeNoise = function () {
    return "bark, bark wooof!";
}

console.log(Dog.prototype);
const barky = new Dog("Barky", 1, "Chihuahua");
console.log(barky.makeNoise());

