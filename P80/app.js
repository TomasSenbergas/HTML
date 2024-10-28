console.log('Hello world from external JavaScript')
var name = 'John Doe';
let age3 = 25;
const address = '123 Main St';

console.log(`name: ${name}, age: ${age3}, address: ${address}`);
age3 = "dvidesimt penki";
console.log(`name: ${name}, age: ${age3}, address: ${address}`);




let x = 5; // Sukuriamas (inicijuojamas) kintamasis x ir jam priskiriama reikšmė 5
let y = 10; // Sukuriamas kintamasis (inicijuojmaas) y ir jam priskiriama reikšmė 10
let z = x + y; // Sukuriamas kintamasis(inicijuojamas) z ir jam priskiriama reikšmė, kuri yra x ir y suma


let temperature = 22.5; //gali reikšti temperatūrą laipsniais Celsijaus, gali būti ir sukableliu
let userName = "Jonas"; //gali būti vartotojo vardas
const pi = 3.14159; // Pi reikšmė išlieka ta pati, nes tai yra konstanta

// Išvedimas į konsolę
console.log(`Temperatūra yra: ${temperature} °C`); // Išveda: Temperatūra yra: 22.5°C
console.log("Vartotojo vardas yra: " + userName); // Išveda: Vartotojo vardas yra: Jonas
console.log("Pi reikšmė yra: " + pi); // Išveda: Pi reikšmė yra: 3.14159

/*temperature kintamasis naudojamas temperatūros reikšmei saugoti ir išvesti.
userName kintamasis naudojamas vartotojo vardui saugoti ir išvesti.
pi konstanta naudojama matematinėms reikšmėms, kurios nesikeičia.*/


let score = 100;
score = 150; // Galima pakeisti reikšmę. Tai reiškia, kad jų reikšmė gali būti atnaujinta.

const maxScore = 200;
//maxScore = 250; // Tai sukels klaidą, nes reikšmė negali būti pakeista vėliau

//Abu let ir const turi bloko lygio aprėptį - prieinami tik tame kode, kuris yra tame pačiame bloke {}.

/*let naudojamas, kai reikia kintamojo, kurio reikšmė gali keistis programos vykdymo metu.
const naudojamas, kai reikia kintamojo, kurio reikšmė negali būti pakeista programos vykdymo metu.*/

/*let score = 100; - kintamasis naudojamas saugoti dabartinį rezultatą, kuris gali keistis.
const maxScore = 200; - kintamasis naudojamas saugoti maksimalią galimą rezultatą, kuris nesikeis ir gali būti naudojamas kaip apribojimas score reikšmei.
*/

// Funkcija, kuri atliekanti pagrindines aritmetines operacijas
function executeAritmeticalOperations(a, b, c, d) {
    // Sudėtis
    let suma = a + b + c + d; // Sukuriamas kintamasis suma ir jam priskiriama a, b, c ir d suma
    console.log("Sum: " + suma); // Išveda sumą į konsolę

    // Atimtis
    let skirtumas = a - b - c - d; // Sukuriamas kintamasis skirtumas ir jam priskiriama a, b, c ir d skirtumas
    console.log("Skirtumas: " + skirtumas); // Išveda skirtumą į konsolę

    // Daugyba
    let sandauga = a * b * c * d; //Sukuriamas kintamasis sandauga ir jam priskiriama a, b, c ir d sandauga
    console.log("Sandauga: " + sandauga); // Išveda sandaugą į konsolę

    // Dalyba
    let dalmuo = a / b / c / d; //Sukuuriamas kintamasis dalmuo ir jam priskiriama a, b, c ir d dalmuo
    console.log("Dalmuo: " + dalmuo); // Išveda dalmenį į konsolę
}

// Iškviečiame funkciją su keturiais skaičiais
executeAritmeticalOperations(10, 5, 2, 1);


//Duomenų tipai ir jų naudojimas „JavaScript“
//Boolean
let isTrue = true;
/*Aprašymas: Boolean tipas turi dvi reikšmes: true ir false.
Naudojimas: Naudojamas sąlyginiams sakiniams, ciklams ir loginėms operacijoms.
Operacijos:
Loginės operacijos: && (AND), || (OR), ! (NOT)
Palyginimo operacijos: ==, ===, !=, !==*/

//Number
let age1 = 25;

/*Aprašymas: Number tipas naudojamas sveikiesiems ir slankiojo kablelio skaičiams.
Naudojimas: Naudojamas aritmetinėms operacijoms, skaičiavimams.
Operacijos:
Aritmetinės operacijos: +, -, *, /, %
Palyginimo operacijos: <, >, <=, >=*/

//String
let name1 = "Jonas";

/*Aprašymas: String tipas naudojamas tekstinėms reikšmėms.
Naudojimas: Naudojamas tekstui saugoti ir manipuliuoti.
Operacijos:
Konkatenacija: +
Palyginimo operacijos: ==, ===, !=, !==
String metodai: .length, .toUpperCase(), .toLowerCase(), .substring(), .indexOf()
*/

//Undefined
let name2 = "Jonas";

/*Aprašymas: Undefined tipas reiškia, kad kintamasis buvo deklaruotas, bet jam nebuvo priskirta reikšmė.
Naudojimas: Naudojamas tikrinti, ar kintamasis buvo inicializuotas.
Operacijos:
Palyginimo operacijos: ==, ===, !=, !==*/

//BigInt
let bigNumber = BigInt(9007199254740991);

/*Aprašymas: BigInt tipas naudojamas labai dideliems sveikiesiems skaičiams, kurie viršija Number tipo ribas.
Naudojimas: Naudojamas dideliems skaičiams, kurie negali būti tiksliai atvaizduoti Number tipu.
Operacijos:
Aritmetinės operacijos: +, -, *, /, %
Palyginimo operacijos: <, >, <=, >=
Pastaba: BigInt negali būti maišomas su Number tipo reikšmėmis be aiškaus konvertavimo.
*/


let isAvailable = false;
let price = 0;
let result = isAvailable || price && "Kaina nėra nulis";
console.log(result);

function tikrintiAmziu(amzius) {
    if (amzius <= 18) {
        return "Jūs esate nepilnametis";
    } else {
        return "Jūs esate pilnametis";
    }
}
console.log(tikrintiAmziu("amzius"));

let a = false;
let b = a === true ? true : false;
console.log(b);


/*-----------------------------------
Užduotis 1:
 
Turite String tipo kintamajį 'age'.
Naudodami ternary operatorių, priskirkite kintamajam access reikšmę "Granted", jei vartotojo amžius yra 18 arba vyresnis, ir "Denied", jei vartotojas yra jaunesnis nei 18.
Parašykite su kokiomis 'age' reikšmėmis tikrinimote ar funkcija veikia korektiškai ir kokius rezultatus gavote. Kodėl pasirinkote tokias reikšmes?
*/
let age;
function access(age) {
    return age <= 0 ? "Invalid age" : age < 18 ? "Denied" : age < 150 ? "Granted": "Denied";
};
console.log("---18 boundary tests---");
console.log(access("17"));
console.log(access("18"));
console.log(access("19"));
console.log("---0 boundary tests---");
console.log(access("-1"));
console.log(access("0"));
console.log(access("1"));
console.log("---150 boundary tests---");
console.log(access("149"));
console.log(access("150"));
console.log(access("151"));






