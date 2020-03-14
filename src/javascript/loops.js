// Loops
// Quick and easy was to do something repeatedly

const range = (start, end) => {
    const length = end - start;
    return Array.from({length}, (_, i) => start + i);
}

const write = (u, t) => {
        console.log(`${u}${t}`);
}

let x = 1, akt = 1, row = 26, jel = '*';
let szorzo = (row - akt)/2;
do {
    let ures = ' '.repeat(szorzo);
    let teli = jel.repeat(akt);
    write(ures, teli);
    akt += 2;
    szorzo = (row - akt)/2;
    x += 1;
    if(szorzo < 0){
        let lab = (row - 3)/2;
        for(_ in range(0,2)){
            ures = ' '.repeat(lab);
            teli = jel.repeat(3);
            write(ures, teli);
        }
        break;
    }
} while(szorzo > 0);


for(let i = 0; i < 10; i += 1){
    setTimeout(() => {
        console.log(i);
    }, i * 500);
}


const users = {
    a: "Sally",
    b: "Billy",
    c: "Ashley",
    d: "Timmy"
}

for(let prop in users){
    setTimeout(()=>{
        console.log(`${prop}: ${users[prop]}`);
    }, 500);
}

const drinks = ['coffee', 'sprite', 'tea', 'coke', 'pepsi'];
drinks.forEach(function(value, index){
    console.log(`${index}: ${value}`);
});

for (const iterator of drinks) {
    console.log(iterator);
}