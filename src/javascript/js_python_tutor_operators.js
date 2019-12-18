// If statement
// Tells the code: if this thing is true, run more code.
// if (expression) { 
//    statements(s) to be executed if expression evaluates truthy or falsey
// }

const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

function alert(s) {
    console.log(`${FgRed}${s}${Reset}`);
}

function warning(s){
    console.log(`${FgYellow}${s}${Reset}`);
}

function ok(s){
    console.log(`${FgGreen}${s}${Reset}`);
}

// const shouldSayHi = false;
// if (shouldSayHi) {
//     alert('Hi there!')
// }
// else {
//     warning('Nothing happened!')
// }

// var innie = "innie";
// var minnie = "minnie";
// var mo = "mo";
// var sentence = `${innie} ${minnie} ${minnie} ${mo}`;
// alert(sentence);

// const shouldSayHi = true;
// if (shouldSayHi == true){
//     alert('Hi there!');
// }

// const numberFive = 5;
// console.log(typeof numberFive);

// const stringFive = "5";
// console.log(typeof stringFive);

// const stringConversion = parseInt(stringFive);

// console.log('===', numberFive === stringFive);
// console.log('==', numberFive == stringFive);
// console.log('+', numberFive + stringFive);
// console.log('int + int', numberFive + stringConversion);
// console.log('===', numberFive === stringConversion);
// console.log('==', numberFive == stringConversion);

// const myArray = [1, 2, 3,];
// const myOtherArray = myArray;

// console.log(myArray, '==', myOtherArray, myArray == myOtherArray);
// console.log(myArray, '===', myOtherArray, myArray === myOtherArray);

// const myObject  ={name: "Chris"};
// const myOtherObject = myObject;

// console.log(myObject, '==', myOtherObject, myObject == myOtherObject);

const bankAccountBalance = 123;
const costOfItem = 122;
const tax = 0.50;

const taxApplied = costOfItem + tax;

if (taxApplied < bankAccountBalance) {
    ok('Megvetted az árut cigány!');
}
else if (taxApplied === bankAccountBalance) {
    warning('Erre még éppen volt pénzed te roma!');
}
else {
    alert('Erre már nincs pénzed csóró!');
}