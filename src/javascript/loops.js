// Loops
// Quick and easy was to do something repeatedly

// function loopDeLoop(){
//     console.log("I'm looping!!!");
// }

// let num1 = 0;
// let num2 = 0;
// while(num1 < 100){
//     num1 += 1;
//     num2 += num1;
//     loopDeLoop();
//     if (num1 === 50){
//         break;
//     }
// }

// console.log(num2);

// const names = ["Chris", "Bob", "Joe", "Jane", "Amy", "Ashley", "Billy"];

// const nameLooper = (arr, searchFor) => {
//     let found = -1
//     arr.forEach(function (item, index){
//         if(item === searchFor){
//             found = index;
//         }
//     });
//     return found;
// }

// console.log(nameLooper(names, "Ashley"));
const prompt = require('prompt');
prompt.start();

let condition;
let userInput;
do {
    prompt.get(['userInput'], function(err, result){
        if(err) {
            console.log(err);
            return 1;
        }
        userInput = result.userInput;
    });
    if(userInput === 'q'){
        condition = false;
    } else {
        condition = true;
    }
} while(condition);