var myFirstName = "Isti";
var myLastName = "Szilágyi";
var myAge = 29;

var myNewList = "\
        <ul>\n\
            <li>I am item 1</li>\n\
            <li>I am item 2</li>\n\
            <li>I am item 3</li>\n\
            <li>I am item 4</li>\n\
            <li>I am item 5</li>\n\
        </ul>\n";
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = myNewList;

const myOtherNewList = `
<ul>
    <li>I am ES6 number 1</li>
    <li>I am ES6 number 2</li>
    <li>I am ES6 number 3</li>
    <li>I am ES6 number 4</li>
    <li>I am ES6 number 5</li>
</ul>
`;

myDiv.innerHTML = myDiv.innerHTML + myOtherNewList;

const first = "Sally";
const last = "Smith";
const age = 52;

let greeting = `Hello ${first} ${last}! I am ${age} year(s) old.`;
const ageDiv = document.getElementById("ageDiv");
const para = document.createElement("P");
para.innerText = greeting;
ageDiv.appendChild(para);

const isTrue = true;
console.log(`Is true? ${isTrue === true}`);

const dateNow = new Date();
const localeDate = dateNow.toLocaleString();
console.log(`Today's is: ${dateNow.toLocaleString()}`);

const myArray = [1, 2, 3, 4, 5];
console.log(`Your array powed: ${myArray.map((num)=>{
    return num ** 2;
})}`);

const pizzaToppings = ["cheese", "mushrooms", "sauce", "pepproni", "pineapple"];
const myPizzaDiv = `<ul>${pizzaToppings.map((stuff)=>{
    return `<li>${stuff}</li>`
}).join('\n')}</ul>`
document.getElementById("pizzaDiv").innerHTML = myPizzaDiv;


function templateParser(arrayOfStrings, expression1, expression2){
    console.log(`${arrayOfStrings}, ${expression1}, ${expression2}`);
}

const person = "Chris", personAge = 21;
const myTemplateLiteral = templateParser`I am ${person}. I am ${personAge} year(s) old.`;