
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

const allatokDiv = document.getElementById("allatok");
let allatok = ["kutya", "cica", "bari", "kecske", "17 kilós ronda BAKNYÚL"];
const ul = document.createElement("ul");
for(const allat of allatok){    
    let newAllat = document.createElement("li");
    newAllat.innerText = allat;
    ul.appendChild(newAllat);
    if(allat.includes("BAKNYÚL")){
        newAllat.classList.add("pink");
    }
}
allatokDiv.appendChild(ul);
document.body.appendChild(allatokDiv);

const nagyBaknyul = document.querySelector('.pink');
console.log(nagyBaknyul);
setInterval(function(){
    nagyBaknyul.classList.toggle("pink");
}, 1000);


const newElement2 = document.createElement("div");
newElement2.id = "hatalmasACsekom";
document.body.appendChild(newElement2);
document.body.removeChild(newElement2);


const erdeiAllatok = allatokDiv.getElementsByTagName("li");
for(let allatka of erdeiAllatok){
    if(allatka.innerText === "bari"){
        ul.removeChild(allatka);
    }
}
