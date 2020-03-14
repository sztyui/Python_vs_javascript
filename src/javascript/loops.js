// Loops
// Quick and easy was to do something repeatedly

for(let i = 1; i <= 100; i++){
    if(!(i%3) && !(i%5)){
        // console.log("FizzBuzz");
        continue;
    }
    else if(!(i%3)){
        // console.log("Fizz");
        continue;
    }
    else if(!(i%5)){
        // console.log("Buzz");
        continue;
    }
    else {
        console.log(i);
    }
}