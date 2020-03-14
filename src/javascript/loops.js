// Loops
// Quick and easy was to do something repeatedly

const range = (start, end) => {
    const length = end - start;
    return Array.from({length}, (_, i) => start + i);
}

let x = 1, akt = 1, row = 26, jel = '*';
let szorzo = (row - akt)/2;
do {
    ures = ' '.repeat(szorzo);
    teli = jel.repeat(akt);
    console.log(`${ures}${teli}`);
    akt += 2;
    szorzo = (row - akt)/2;
    x += 1;
    if(szorzo < 0){
        let lab = (row - 3)/2;
        for(_ in range(0,2)){
            ures = ' '.repeat(lab);
            teli = jel.repeat(3);
            console.log(`${ures}${teli}`);
        }
        break;
    }
} while(szorzo > 0);
