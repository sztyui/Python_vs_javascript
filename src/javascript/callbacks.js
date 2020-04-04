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
const myPara = document.getElementById("content");

myButton.addEventListener("click", function(){
    requestData(populateDOM);
});

function requestData(cb){
    let data = "Loading...";
    cb(data);
    setTimeout(()=>{
        // Response from server
        const data = fakeData.text;
        cb(data);
    }, 2000);
}

function populateDOM(data){
    myPara.innerText = data;
}


function counter(){
    setTimeout(()=>{
        console.log("First");
        setTimeout(()=>{
            console.log("Second");
            setTimeout(()=>{
                console.log("Third");
                setTimeout(()=>{
                    console.log("Fourth");
                }, 400);
            }, 600);
        }, 800);
    }, 1000);
}

// counter();

function numCruncher1(num, cb){
    const newNum = num * num;
    cb(newNum);
}

function numCruncher2(num, cb){
    const anotherNewNum = num / 100;
    cb(anotherNewNum);
}

function totalSum(a, b, cb){
    cb(a + b);
}

function crunchNumbers(a, b, cb1, cb2, cb3){
    cb1(a, function(x){
        cb2(b, function(y){
            cb3(x, y, function(result){
                console.log(result);
            });
        });
    });
}

// crunchNumbers(5, 10, numCruncher1, numCruncher2, totalSum);

// Promises

const testPromise = new Promise((resolve, reject) => {
    if(Math.random() > 0.5){
        reject("promise no good! Rejected");
    }
    setTimeout(()=>{
        resolve("promise OK!");
    }, 1000);
});

testPromise.then((resolveMessage)=>{
    console.log(`Looks like: ${resolveMessage}`);
}).then(()=>{
    console.log("I should run after the promise resolved!");
}).catch((rejectedMessage)=>{
    console.log(`Error: ${rejectedMessage}`);
});

function numAdder(n1, n2){
    return new Promise((resolve, reject)=>{
        const addedNums = n1 + n2;
        setTimeout(()=>{
            resolve(addedNums);
        }, 500);
    });
}

function numSquarer(num){
    return new Promise((resolve, reject)=>{
        if(Math.random() > 0.5){
            reject("TAKARODJ INNEN A KURVA ANYÁDBA!");
        }
        setTimeout(()=>{
            resolve(num*num);
        }, 800);
    });
}

// numAdder(100, 23).then((data)=>{
//     console.log(`Data arrived: ${data}`);
//     return numSquarer(data);
// }).then((moreData)=>{
//     console.log(`More data arrived: ${moreData}`);
// });

numAdder(100, 23)
    .then(data => numSquarer(data))
    .then(moreData => console.log(`More data arrived: ${moreData}`))
    .catch(error => console.log(`Error answer returned: ${error}`));

function alwaysResolves(){
    return Promise.resolve("I love resolving :D");
}

const prom = Promise.resolve([10, 20, 30]);
prom.then(nums => nums.map(num => {return  num * 10}))
    .then(transformNums => console.log(transformNums));

const anotherProm = Promise.resolve({text: "resolved :D"});
anotherProm.then(data => console.log(data.text));

Promise.resolve({message: "Some kind of issue happend here."})
    .then(
        resu => {console.log('ok'); return Promise.reject({message: "Something always happens."});},
        data => console.log(`The following rejection reason arrived: ${data.message}`)
    ).then(
        res => console.log("Something good happened before! <3"),
        err => console.log("Something bad happened before! :(")
    ).catch(data => console.log(data.message));


function timeLogger(message, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
        if(typeof message !== "string" || typeof time !== "number"){
            reject("Invalid arguments");
        }
    })
}

timeLogger("first", 1000)
    .then(message => {
        console.log(message);
        return timeLogger("second", 800);
    })
    .then(message => {
        console.log(message);
        return timeLogger("third", 600);
    })
    .then(message => {
        console.log(message);
        return timeLogger("fourth", 400);
    })
    .then(message => console.log(message))
    .catch(err => console.log(err));

Promise.resolve("hi")
    .then(string => {
        // Effectively same as saying return Promise.resolve()
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(string.charAt(0).toUpperCase() + string.slice(1) + " there");
            }, 1)
        });
    })
    .then(string => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{resolve(string += " Isti")},1);
        }) 
    })
    .then(string => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{resolve(string += "!")},1);
        })  
    })
    .then(result => {   
        console.log(result);
    });

const userName = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({text: "billybillybob1234"});
    }, 1000);
});
const position = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject({text: "manager"})
    }, 300);
});

Promise.all([userName, position])
    .then((data) => data.map(entry => entry.text))
    .then(content => console.log(content))
    .catch(err => console.log(err));

Promise.race([userName, position])
    .then(data => console.log(data));