let fruits = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
console.log(fruits[3]); // strawberry
console.log(fruits[4]); // kiwi

fruits[2] = 'pear';
fruits[3] = 'lemon';
console.log("---after array change---");
console.log(fruits[2]); // pear
console.log(fruits[3]); // lemon


/*console.log("---after array change---");
let darbuotojai = ['Jonas', 'Petras', 'Asta', 'Rita', 'Tomas', 'Mindaugas', 'Dalia', 'Saulius', 'Inga'];
darbuotojai.push('Ieva', 'Rasa', 'Vaida', 'Darius',);

console.log(darbuotojai);

darbuotojai.splice(0, 2);
darbuotojai.splice(2, 2);
darbuotojai.splice(3, 1);
darbuotojai.splice(7, 1);

console.log(darbuotojai);
*/

let darbuotojai = ['Jonas', 'Petras', 'Asta', 'Rita', 'Tomas', 'Mindaugas', 'Dalia', 'Saulius', 'Inga'];

// 1. Pridėti darbuotojus: Ieva, Rasa, Vaida ir Darius į sąrašą.
darbuotojai.push('Ieva', 'Rasa', 'Vaida', 'Darius');

console.log("Atskirtos moterys");
let vyrai = ['Jonas', 'Petras', 'Tomas', 'Mindaugas', 'Saulius', 'Vaidas', 'Darius'];
darbuotojai = darbuotojai.filter(vardas => !vyrai.includes(vardas));
console.log(darbuotojai);

// 2. Pašalinti visus vyrus iš sąrašo.
let moterys = darbuotojai.filter(name => !['Jonas', 'Petras', 'Tomas', 'Mindaugas', 'Saulius', 'Darius'].includes(name));

// 3. Atnaujinti darbuotojų informaciją prie ardo pridedant ir pvardę.
moterys = moterys.map(name => `${name} ${name}aitė`);

// 4. Padalinti į 2 atskirus sąrašus lygiai pagal abėcėlę.
moterys.sort();
let pirmasSarasas = moterys.slice(0, 4);
let antrasSarasas = moterys.slice(4);

console.log('Pirmas sąrašas:', pirmasSarasas);
console.log('Antras sąrašas:', antrasSarasas);

