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