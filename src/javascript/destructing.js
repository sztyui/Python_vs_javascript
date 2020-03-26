// Destructing

const myArray = [1, 2, 3, 4, 5];
const [x,y,z, a, b] = myArray;
console.log(x, y, z, a, b);

const mySecondArray = ["Jane Doe", "John Doe", "Billy Bob"];
let [suspect1, suspect2, suspect3, suspect4="HanCock"] = mySecondArray;
console.log(suspect1, suspect2, suspect3, suspect4);

let aa = 100;
let bb = 250;
let cc = 500;

[aa, bb, cc] = [bb, cc, aa]

console.log(aa, bb, cc);

// use with functions
function returnArray(arr, term){
    return arr.filter((t)=>{return t.includes(term)})
}
const mainDiv = document.getElementById("questionDiv");
const textArea = mainDiv.querySelector("textarea");
document.addEventListener("keydown", (event)=>{
    if(event.keyCode === 13){
        const [result] = returnArray(["chicken", "fish", "tofu"], textArea.value);
        document.getElementById("answer").innerText = result;
    }
});

// Can ignore some return values
const anotherArray = [10, 20, 50, 100, 1000, 30];
const [numA, numB, , numC, , numD] = anotherArray;
console.log(`First: ${numA}, second: ${numB}, third: ${numC}, fourth: ${numD}`);

// Can use rest pattern
function sayHi(firstArg, ...restOfArgs){
    console.log(`Hi ${firstArg}`);
    console.log(restOfArgs);
}

sayHi('Isti', 29, "Some Street 23", false);

const erdeiAllatok = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [bla, blabla, ...blablabla] = erdeiAllatok;
console.log(bla, blabla, blablabla);

const myObj = {firstName: "Chris", lastName: "Jones", age: 16, height: "6ft"};
console.log(`First name: ${myObj.firstName}, Last name: ${myObj.lastName}, Age: ${myObj.age}, Height: ${myObj.height}`);

const { firstName, lastName, age, height } = myObj;
console.log(firstName, lastName, age, height);