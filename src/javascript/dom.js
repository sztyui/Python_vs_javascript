
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

let allatok = ["kutya", "cica", "birka", "kecske", "17 kilós ronda BAKNYÚL"];
const ul = document.createElement("ul");
for(const allat of allatok){
    let newAllat = document.createElement("li");
    newAllat.innerText = allat;
    ul.appendChild(newAllat);
}
creationDiv.appendChild(ul);