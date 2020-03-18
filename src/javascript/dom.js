const myAppDiv = document.getElementById("app");
const specialWords = myAppDiv.getElementsByTagName("p");

let sum = 0;
for(const i of specialWords){
    sum += parseInt(i.innerText);
}
console.log(sum);
document.getElementById("result").innerText = sum;

document.getElementById("changed").innerText = specialWords.length;