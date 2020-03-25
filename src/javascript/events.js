/*
    Function initialization.
*/
const logEvent = (event) => {
    console.log(event.type);
}

let numberOfClicks = 0, numberOfScrolls = 0;
const clicksDiv = document.getElementById("numberOfClicks");
const buttonToClick = document.getElementById("clickButton");
const scrollDiv = document.getElementById("numberOfScrolls");

buttonToClick.addEventListener("click", function () {
    numberOfClicks += 1;
    clicksDiv.innerText = numberOfClicks;
    buttonToClick.innerText = "Plz no click. :(";
    buttonToClick.removeEventListener("click", logEvent);
});

scrollDiv.addEventListener("scroll", function () {
    numberOfScrolls += 1;
    scrollDiv.innerText = String(numberOfScrolls);
});

buttonToClick.addEventListener("focus", logEvent);

buttonToClick.addEventListener("focusout", logEvent);

document.addEventListener("click", logEvent);

const bckgrnd = document.getElementById("background");
const listItemsUL = bckgrnd.querySelector('UL');
const allLIs = bckgrnd.querySelectorAll('LI');

const switchBackground = (e) => {
    const hasBeenClicked = bckgrnd.contains(e.target);
    hasBeenClicked ? bckgrnd.classList.add("background-color1") : bckgrnd.classList.remove("background-color1");
};

const addGreenBackground = (e) => {
    e.stopPropagation();
    const targetLI = e.target;
    if (targetLI.nodeName === "UL") {
        return;
    }
    const green = bckgrnd.querySelector(".green");
    if (green) {
        green.classList.remove("green");
    }
    targetLI.classList.toggle("green");
};

document.addEventListener("click", switchBackground);
listItemsUL.addEventListener("click", addGreenBackground);

const bckgrnd2 = document.getElementById("background2");
const allLISs2 = bckgrnd2.querySelectorAll("li");

for(const prop of allLISs2){
    prop.addEventListener("click", event => {
        console.log(this);
    });
}

const div2 = document.getElementById("div2");
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", addToList);
function addToList(e) {
    e.preventDefault();
    const myInput = document.getElementById("myInput");
    const newLI = document.createElement('li');
    let charCodes = "";
    for(let i = 0; i < myInput.value.length; i++){
        charCodes += String(myInput.value.charCodeAt(i)) + " ";
    }
    newLI.innerText = charCodes;
    document.getElementById('postUL').appendChild(newLI);
    myForm.reset();
}


const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textArea = div3.querySelector("textarea");
const paraText = "User is typing...";
let timer;

textArea.addEventListener("keydown", (event)=>{
    para.innerText = paraText;
});

textArea.addEventListener("keyup", (event)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
        para.innerText=""
    }, 2000);
});

textArea.addEventListener("keydown", (event)=>{
    if(event.keyCode === 13){
        event.preventDefault();
        let newLI = document.createElement("li");
        newLI.innerText = textArea.value;
        document.getElementById("postUL").appendChild(newLI);
        textArea.value = "";
    } else {}
});