function shouldGoFirst(callback){
    setTimeout(()=>{
        console.log("I should always go first");
        callback();
    }, 1000);
}

function shouldGoSecond(){
    console.log("I should go second");
}

function sumUpNumbers(num1, num2, callback){
    let summedValue;
    setTimeout(()=>{
        summedValue = num1 + num2;
        callback(summedValue);
    }, 1000);
    
}

function logSummedValue(val){
    console.log("The summed total is: ", val);
}

function sayWhenDone(loopCount){
    console.log("Done! :D Capitalized", loopCount, "times");
}

// Parent function
function looper(arr, callback){
    let i = 0;
    for(; i < arr.length; i+=1){
        const name = arr[i];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        arr[i] = capitalizedName;
    }
    callback(i);
    return arr;
}

const myNames = ["chris", "russell", "toby", "angela"];
looper(myNames, sayWhenDone);
console.log(myNames);

function anotherLogger(num1, num2, somethingElse){
    const squaredAndSummedNums = (num1 * num1) + (num2 * num2);
    if (somethingElse && typeof(somethingElse) === "function"){
        somethingElse(squaredAndSummedNums);
    }
}

anotherLogger(10, 50, function(p){
    console.log(`Hey! ${p}`);
});


const myDiv = document.getElementById('main');
const myButton = myDiv.querySelector('button');
const fakeData = {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

myButton.addEventListener("click", function(){
    requestData(populateDOM);
});

function requestData(cb){
    setTimeout(()=>{
        // Response from server
        const data = fakeData.text;
        cb(data);
    }, 2000);
}

function populateDOM(data){
    myDiv.innerHTML += `<p>${data}</p>`;
}
