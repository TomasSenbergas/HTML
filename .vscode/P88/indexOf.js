/*----------------------------
Užduotis 1: Naudodami .indexOf(), suraskite pirmo vardo 'Petras' indeksą masyve vardai.
Pradiniai duomenys: let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Petras'];
Laukiamas rezultatas: 2
*/
const uzduotis1 = () => {
    let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Petras'];
    let index = vardai.indexOf('Petras');
    console.log(index);
}
uzduotis1();

/*----------------------------
Užduotis 2: Suraskite, kuriame indekse yra skaičius 3 masyve skaiciai, ir pradėkite paiešką nuo 4 indekso.
Pradiniai duomenys: let skaiciai = [1, 2, 3, 4, 5, 3, 7, 8];
Laukiamas rezultatas: 5
*/

const uzduotis2 = () => {
    let skaiciai = [1, 2, 3, 4, 5, 3, 7, 8];
    let index2 = skaiciai.indexOf(3, 4);
    console.log(index2);
}
uzduotis2();

/*----------------------------
Užduotis 3: Naudodami .indexOf(), suraskite, ar masyve spalvos yra spalva 'Geltona'. Jeigu taip, grąžinkite jos "Suradau", jei nėra, grąžinkite "Nerasta"
Pradiniai duomenys: let spalvos = ['Raudona', 'Žalia', 'Mėlyna', 'Geltona', 'Žalia'];
Laukiamas rezultatas: Suradau
*/

const uzduotis3 = () => {
    let spalvos = ['Raudona', 'Žalia', 'Mėlyna', 'Geltona', 'Žalia'];
    console.log(spalvos.indexOf('Geltona') !== -1 ? 'Suradau' : 'Nerasta');
}
uzduotis3();


/*----------------------------
Užduotis 4: Sukurkite funkciją, kuri grąžins pirmo pasikartojančio elemento indeksą iš masyvo vardai. Pvz., pirmas pasikartojantis elementas yra 'Petras', ir jo antrasis pasirodymas yra indekse 5.
Pradiniai duomenys: let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Petras', 'Tomas', 'Petras'];
Laukiamas rezultatas: 5
*/
let vardai = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Petras', 'Tomas', 'Petras'];

const uzduotis4a = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            console.log(i);
            break;
        }
    }
};
uzduotis4a(vardai);

const uzduotis4b = (arr) => {
    let indexOfRepeatElement = arr.indexOf(arr.find((item, index) => arr.indexOf(item) !== index));
    console.log(indexOfRepeatElement);
};
uzduotis4b(vardai);

const uzduotis4c = (arr) => {
    for(let a of arr){
        if(arr.indexOf(a) !== arr.lastIndexOf(a)){
            console.log(arr.indexOf(a));
            break;
        }
    }};
uzduotis4c(vardai);


/*----------------------------
Užduotis 5: Naudodami .indexOf(), suraskite, ar masyve skaiciai yra skaičius 3, ir grąžinkite visų jo pasikartojimų indeksus. Sukurkite ciklą, kuris naudoja .indexOf() kelis kartus, kol nerandama daugiau pasikartojimų.
Pradiniai duomenys: let skaiciai = [1, 2, 3, 4, 5, 3, 7, 8];
Laukiamas rezultatas: [2, 5]
*/

const uzduotis5 = (skaicius) => {
    let skaiciai = [1, 2, 3, 4, 5, 3, 7, 8, 3, 3];
    let indexes = [];
    let index = skaiciai.indexOf(skaicius);
     
    while(index !== -1){
        indexes.push(index);
        index = skaiciai.indexOf(skaicius, index + 1);
    };
    console.log(indexes);
};
    uzduotis5(3);



    /*----------------------------
    Uzduotis "Practice time" 1:
    */
    let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

    
//    Sukurkite funkciją, kuri padvigubina visus masyvo elementus ir išveda rezultatą į konsolę.
   uzduotisP1 = (arr) => {
    const arrDoubled = arr.map(n => n * 2);
    console.log(arrDoubled);
   };
    uzduotisP1(numbers);


// Sukurkite funkcija arrMultiplied, kuri priima masyvą ir skaičių, ir grąžina visus masyvo elementus padaugintus iš šio skaičiaus.
    uzduotisP2 = (arr, num) => {
        const arrMultiplied = arr.map(n => n * num);
        console.log(arrMultiplied);
    };
    uzduotisP2(numbers, 2);

    // Parasykite funkcij1 getBudget kuri grazina suma visu biudzetu
const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

uzduotisP3 = (arr) => {
    let totalBudget = 0;
    arr.map(obj => totalBudget += obj.budget);
    console.log(totalBudget);
};
uzduotisP3(budgets);

//skurti fukcija kuri grazina masyva su visais vardais
uzduotisP4 = (arr) => {
    return arr.map((item) => item.name);
}
console.log(uzduotisP4(budgets));


/*----------------------------
Užduotis 1: Naudodami .filter(), iš masyvo skaiciai atrinkite tik tuos skaičius, kurie yra nelyginiai.
Pradiniai duomenys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Laukiamas rezultatas: [1, 3, 5, 7, 9]
*/
let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const uzduotis1F = (arr) => {
    let nelyginiai = arr.filter(n => n % 2 !== 0);
    console.log(nelyginiai);
};
uzduotis1F(skaiciai);

/*----------------------------
Užduotis 2: Naudodami .filter(), atrinkite vardus, kurių ilgis yra didesnis nei 4 simboliai.
Pradiniai duomenys: ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas']
Laukiamas rezultatas: ['Jonas', 'Petras', 'Tomas']
*/
let vardai2 = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas'];

const uzduotis2F = (arr) => {
    let ilgesniUz4 = arr.filter(name => name.length > 4);
    console.log(ilgesniUz4);
};
uzduotis2F(vardai2);


/*----------------------------
Užduotis 3: Naudodami .filter(), atrinkite žmones iš masyvo zmones, kurie yra vyresni nei 30 metų.
Pradiniai duomenys: [
{ name: 'Jonas', age: 25 },
{ name: 'Asta', age: 30 },
{ name: 'Petras', age: 35 },
{ name: 'Inga', age: 28 },
{ name: 'Tomas', age: 40 }]
Laukiamas rezultatas: [{ name: 'Petras', age: 35 }, { name: 'Tomas', age: 40 }]
*/
let zmones = [
    { name: 'Jonas', age: 25 },
    { name: 'Asta', age: 30 },
    { name: 'Petras', age: 35 },
    { name: 'Inga', age: 28 },
    { name: 'Tomas', age: 40 }
];

const uzduotis3F = (arr) => {
    let amziusDaugiau30 = arr.filter(person => person.age > 30);
    console.log(amziusDaugiau30);
};
uzduotis3F(zmones);

/*----------------------------
Užduotis 4: Naudodami .filter(), atrinkite žmones, kurių vardas prasideda raide 'J'.
*/

const uzduotis4F = (arr) => {
    let zmonesSuJ = arr.filter(person => person.name[0] === 'J');
    console.log(zmonesSuJ);
}
uzduotis4F(zmones);

/*----------------------------
Užduotis 4: Surikiuokite ir filtruokite studentus pagal jų pažymius
Turite studentų sąrašą su jų pažymiais. 
Surikiuokite studentus pagal pažymius mažėjančia tvarka, bet prieš rikiuodami, filtruokite tuos, kurie turi mažiau nei 5 balus. Grąžinkite tik vardus ir pažymius.
 
Pradiniai duomenys:
let students = [
    { name: 'Jonas', grade: 4 },
    { name: 'Asta', grade: 9 },
    { name: 'Petras', grade: 6 },
    { name: 'Inga', grade: 2 },
    { name: 'Tomas', grade: 8 }
];
Laukiamas rezultatas:
[{ name: 'Asta', grade: 9 }, { name: 'Tomas', grade: 8 }, { name: 'Petras', grade: 6 }]
*/

let students = [
    { name: 'Jonas', grade: 4 },
    { name: 'Asta', grade: 9 },
    { name: 'Petras', grade: 6 },
    { name: 'Inga', grade: 2 },
    { name: 'Tomas', grade: 8 }
];

const uzduotis4d = (arr) => {
    let filteredStudents = arr.filter(student => student.grade > 5 )
    let sortedStudents = filteredStudents.sort((a, b) => b.grade - a.grade);
    console.log(sortedStudents);
}
uzduotis4d(students);


/*----------------------------
Užduotis 5: Suraskite ir susumuokite unikalius teigiamus skaičius
 
Turite masyvą, kuriame yra teigiami ir neigiami skaičiai, kai kurie iš jų pasikartoja. 
Raskite unikalius teigiamus skaičius, surikiuokite juos didėjančia tvarka ir susumuokite.
 
Pradiniai duomenys:
let numbers = [3, -1, 4, 3, -2, 5, -3, 4, 6, 7];
 
Laukiamas rezultatas:
Surikiuoti unikalūs teigiami skaičiai: [3, 4, 5, 6, 7]
Suma: 25
*/

let numbs = [3, -1, 4, 3, -2, 5, -3, 4, 6, 7];

const uzduotis5d = (arr) => {
       let positiveNumbers = arr.filter(x=>x >0)
    let uniqueNumb = [];

    positiveNumbers.map(x => {
        if(!uniqueNumb.Includes(x) {
            uniqueNumb.push(x)
        
    


        console.log(sortedUniqueNumb); 
    }
uzduotis5d

