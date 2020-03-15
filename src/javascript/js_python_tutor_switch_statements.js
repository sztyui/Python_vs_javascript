// Switch statements

function fruitLogger(fruit){
expression = "apple";
    switch (expression){
        case "apple":
            console.log("Awesome! I love apples.");
            break;
        case "orange":
            console.log("Oranges are cool. :D");
            break;
        default:
            console.log("That sounds pretty OK.");
    }
    console.log("Broke out of switch statement.");
}

function numChecker(num){
    let value;
    switch(num){
        case 0: case 1: case 2:
            value = "low range";
            break;
        case 3: case 4: case 5: case 6:
            value = "mid range";
            break;
        case 7: case 8: case 9:
            value = "high range";
            break;
        default:
            value = "Input number between 0-9";
            break;
    }
    return value
}

function setVolume(n) {
    console.log('Volume set at: ' + numChecker(n) + '.');
}

setVolume(6);

const donutPicker = (flav) => {
    switch(flav){
        case 's':
            return 'sprinkles';
        case 'c':
            return 'chocolate glazed';
        case 'b':
            return "bear claw";
        default:
            return "Did not understand";
    }
};

const donuts = (selection) => {
    const selectedDonut = donutPicker(selection);
    console.log("You have selected: " + selectedDonut);
};

donuts('s');
donuts('c');
donuts('b');
donuts(42);