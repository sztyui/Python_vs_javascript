
// const el = document.getElementsByTagName("div");
// const footerDiv = el[el.length - 1];
// footerDiv.id = "footer";

const dummyDiv = document.getElementsByClassName('test-class');
console.log(dummyDiv[0].className);

const purpleDivs = document.querySelectorAll('.purple');
for(const prop of purpleDivs){
    prop.classList.add("foo");
}

setInterval(function () {
    for (const prop of purpleDivs) {
        prop.classList.toggle("foo");
    }
}, 5000);

const foot = document.getElementById("footer");
foot.classList.add("foo");

const creationDiv = document.getElementById('created');
const newElement = document.createElement("P");
newElement.innerText = "Valami pelda szöveg.";
console.log(newElement);
creationDiv.appendChild(newElement);