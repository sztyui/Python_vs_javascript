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

buttonToClick.addEventListener("click", function(){
    numberOfClicks += 1;
    clicksDiv.innerText = numberOfClicks;
    buttonToClick.innerText = "Plz no click. :(";
    buttonToClick.removeEventListener("click", logEvent);
});

scrollDiv.addEventListener("scroll", function(){
    numberOfScrolls += 1;
    scrollDiv.innerText = String(numberOfScrolls);
});

buttonToClick.addEventListener("focus", logEvent);

buttonToClick.addEventListener("focusout", logEvent);

document.addEventListener("click", logEvent);

const bckgrnd = document.getElementById("background");

const switchBackground = (e) => {
    const hasBeenClicked = bckgrnd.contains(e.target);
    hasBeenClicked ? bckgrnd.classList.add("background-color1") : bckgrnd.classList.remove("background-color1");
};

document.addEventListener("click", switchBackground);

bckgrnd.addEventListener("mousedown", switchBackground);
bckgrnd.addEventListener("focusout", switchBackground);