const myAppDiv = document.getElementById("app");
const specialWords = myAppDiv.getElementsByTagName("span");


for(const span of specialWords){
    span.innerText = "Fox";
}