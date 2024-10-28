/*-----------------------------------
Užduotis 1:
Parašykite for ciklą, kuris skaičius nuo 1 iki 10 imtinai į išveda konsolę.
Rezultatas: 1, 2, 3, ..., 10
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*-----------------------------------
Užduotis 2:
Parasykite programa kuri nustatys ar ivestas tekstas yra palindromas (zodis is abieju pusiu skaitomas vienodai)
Rekursijos naudoti negalima
ABBA - palindromas
MAMA - ne palindromas
 
teksto apvertimui naudoti for cikla.
!!! .reverse() naudoti negalima
 
Parašykite su kokiomis 'zodis' reikšmėmis tikrinimote ar funkcija veikia korektiškai ir kokius rezultatus gavote.Kodėl pasirinkote tokias reikšmes?
*/

function arPalindormas(zodis) {
    let apsuktas = "";
    for (let i = zodis.length - 1; i >= 0; i--) {
        apsuktas += zodis[i];
    }
    return zodis === apsuktas;
}

// Test cases
let testWords = ["ABBA", "MAMA", "RADAR", "SĖDĖK UŽU KĖDĖS"];
for (let word of testWords) {
    console.log(`Ar "${word}" palindromas? ${arPalindormas(word)? "TAIP" : "NE"}`);
};

/*-----------------------------------
Užduotis 3:
Parašykite funkciją su vienu parametru 'x',  kurioje naudojamas for ciklas, kuris sudeda visus skaičius nuo x iki 100 imtinai ir grąžina galutinę sumą.
Parašykite su kokiomis 'x' reikšmėmis tikrinimote ar funkcija veikia korektiškai ir kokius rezultatus gavote.Kodėl pasirinkote tokias reikšmes?
*/

function sumaNuoX(x) {
    let suma = 0;
    for (let i = x; i <= 100; i++) {
        suma += i;
    }
    return suma;
}

let testavimoSkaiciai = [99, 100, 101, -1, 0, "A", 99.5];
for (let skaicius of testavimoSkaiciai) {
    console.log(`Suma imtinai nuo ${skaicius} iki 100 yra ${sumaNuoX(skaicius)}`);
};

/*-----------------------------------
Užduotis:
 
Parašykite programą, kuri naudodama `for` ciklą ir `switch`, apskaičiuotų turimų monetų bendrą svorį gramais.
Tarkime, turite tokius monetų kiekius:
- 3 monetos po 1 ct,
- 1 moneta po 2 ct,
- 10 monetų po 5 ct,
- 5 monetos po 10 ct,
- 2 monetos po 50 ct,
- 7 monetos po 1 €,
- 4 monetos po 2 €.
 
monetos sveria:
1 ct = 2.3 g
2 ct = 3.06 g
5 ct = 3.92 g
10 ct = 4.10 g
20 ct = 5.74 g
50 ct = 7.80 g
100 ct (1 €) = 7.50 g
200 ct (2 €) = 8.50 g
*/

// Coin quantities
let coinQuantities = {
    "1ct": 3,
    "2ct": 1,
    "5ct": 10,
    "10ct": 5,
    "50ct": 2,
    "1€": 7,
    "2€": 4
};

// Coin weights in grams
let coinWeights = {
    "1ct": 2.3,
    "2ct": 3.06,
    "5ct": 3.92,
    "10ct": 4.10,
    "50ct": 7.80,
    "1€": 7.50,
    "2€": 8.50
};

// Calculate total weight
let totalWeight = 0;

for (let coin in coinQuantities) {
    let quantity = coinQuantities[coin];
    let weight = coinWeights[coin];
    
    switch (coin) {
        case "1ct":
        case "2ct":
        case "5ct":
        case "10ct":
        case "50ct":
        case "1€":
        case "2€":
            totalWeight += quantity * weight;
            break;
        default:
            console.log(`Unknown coin: ${coin}`);
    }
}

console.log(`Total weight of coins: ${totalWeight} grams`);