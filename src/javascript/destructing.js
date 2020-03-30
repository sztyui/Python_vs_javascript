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

const myObj2 = {myVar1: "a", myVar2: "b"};
({myVar1, myVar2} = myObj2);
console.log(myVar1, myVar2);

// Assigning new variable names
const myObj3 = {q: "cool!", w: "oh yeah!", e: "nice :D", r: "awesome!"};
const {q: cool, w: yeah, e: nice, r: awesome} = myObj3;
console.log(cool);

const myObj4 = { uuid: 1243123, username: "es6rulez", loggedin: new Date()};

const {uuid: userId, username: name, loggedin: lastLoginDate} = myObj4;
console.log(userId, name, lastLoginDate);

const myObj5 = { a1: 10, b1: 20, c1: 30, d1: 40, e1: 100};
const {a1, b1, c1, d1, e1 = 50} =  myObj5;
console.log(e1);


function stateUser (obj){
    const {user, memberType} = obj;
    if(!user){
        console.log("Error No user name entered \\o/");
    }
    console.log(`Username: ${user}, membership type: ${memberType}`);
}

stateUser({user: "Steve", memberType: "Premium"});

const member1 = {user: "Steve", memberType: "premium"};
const member2 = {memberType: "free"};
stateUser(member1);
stateUser(member2);

function sayIfValid({prop, a111}){
    const internalObj = {
        prop: prop,
        a111: a111,
        constructed: true
    }
    console.log(internalObj);
}

const myObj6 = {
    prop: "I am valid.",
    proop: "I am not valid",
    a111: "I am also not valid"
}

sayIfValid({prop: "I am valid"});
sayIfValid({proop: "I am not valid!"})
sayIfValid(myObj6);


const myObj7 = {
    title: "My address book",
    entries: [
        {
            name: "Bob",
            nubmer: "555-5555",
            address: "123 Fake Street",
            other: {
                cell: "555-3333",
                email: "bob@es6rulez.com",
            }
        },
        {
            name: "Jill",
            number: "555-1234",
            address: "155 Fake St",
            other: {
                cell: null,
                email: "jill@jill.co.uk",
            }
        },
        {
            name: "Billy",
            number: "555-8888",
            address: "555 Fake St",
            other: {
                cell: "555-1233",
                email: null,
            }
        },
        {
            name: "Joan",
            number: "123-4444",
            address: "100 Fake Ave",
            other: {
                cell: '555.1234',
                email: null,
            }
        }
    ],
    myPhone: "555-1111"
};

const { title, entries} = myObj7;
for(const {name, address, other: {cell: cellPhone, email}} of entries){
    console.log(name, address, cellPhone, email);
}