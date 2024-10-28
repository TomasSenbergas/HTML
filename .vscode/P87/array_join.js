let words = ['JavaScript', 'yra', 'galinga', 'kalba'];

console.log(words.join('')); // 'JavaScript yra galinga kalba'

console.log(words.join(' ')); // 'JavaScript yra galinga kalba'

console.log(words.join('--')); // 'JavaScript--yra--galinga--kalba'

console.log(words.join('!, ')+'!'); // 'JavaScript!, yra!, galinga!, kalba!'

console.log(words.join(',')); // 'JavaScript,yra,galinga,kalba'

/*------------------------------------
Užduotis 7:  
Turite masyvą su darbuotojų duomenimis. Jūsų tikslas yra naudoti .join() metodą,
kad sujungtumėte duomenis į vieną CSV formato eilutę, kurią būtų galima naudoti duomenų eksportavimui arba failų saugojimui.
Naudodami .join(), sukurkite CSV formato eilutę, kur kiekvieno darbuotojo duomenys yra atskirti kableliais, o kiekvieno darbuotojo įrašas yra atskirtas nauja eilute (\n).
 
Laukiamas rezultatas:
Jonas,Jonaitis,30,Programuotojas
Asta,Astaitė,25,Projektų vadovė
Petras,Petraitis,35,Analitikas
Inga,Ingaitytė,28,Testuotoja*/

let darbuotojai = [
    ['Jonas', 'Jonaitis', 30, 'Programuotojas'],
    ['Asta', 'Astaitė', 25, 'Projektų vadovė'],
    ['Petras', 'Petraitis', 35, 'Analitikas'],
    ['Inga', 'Ingaitytė', 28, 'Testuotoja']
];

//let csv = darbuotojai.map(darbuotojas => darbuotojas.join(',')).join('\n');



joinToCsv = () => {
 for (darbuotojas of darbuotojai) {
    console.log(darbuotojas.join(','));
 }  };

joinToCsv();



//Pirminiai duomenys:
let vardai = ['Jonas', 'Asta', 'Petras', 'Inga'];
let skaiciai = [1, 2, 3, 4, 5];
let spalvos = ['Raudona', 'Zalia', 'Melyna', 'Geltona'];

/*----------------------------
Užduotis 1:
Iš masyvo vardai pašalinkite elementą 'Asta' naudodami .splice().
Laukiamas rezultatas: ['Jonas', 'Petras', 'Inga']
*/
pasalintiAsta = () => {
    vardai.splice(1, 1);
    console.log(vardai);
}
//pasalintiAsta();

/*----------------------------
Užduotis 2:
Į masyvą vardai įterpkite vardus 'Tomas' ir 'Rita' po 'Jonas', nenaudodami jokių pašalinimų.
Laukiamas rezultatas: ['Jonas', 'Tomas', 'Rita', 'Asta', 'Petras', 'Inga']
*/
iterptiTomasRita = () => {
    console.log("Ilgis pries iterpima ", vardai.length);
    vardai.splice(1, 0, 'Tomas', 'Rita');
    console.log(vardai);
    console.log("Ilgis po iterpimo ", vardai.length);
}
iterptiTomasRita();

/*----------------------------
Užduotis 3:
Iš masyvo skaiciai pašalinkite 3 elementus, pradedant nuo antrojo indekso.
Laukiamas rezultatas: [1, 2]
*/
 pasalinti3Elementus = () => {
     skaiciai.splice(2); //nurodant tik viena skaiciu, bus pasalinti visi elementai nuo nurodyto indekso iki galo
     console.log(skaiciai);
 }
//pasalinti3Elementus();

/*----------------------------
Užduotis 4:
Į masyvą skaiciai po pirmuoju indeksu pridėkite skaičius 10 ir 11, tuo pačiu pašalindami vieną esamą skaičių.
Laukiamas rezultatas: [1, 10, 11, 3, 4, 5]
*/

prideti10ir11vietoj2 = () => {
    skaiciai.splice(1, 1, 10, 11);
    console.log(skaiciai);
}
prideti10ir11vietoj2();

/*----------------------------
Užduotis 5:
Iš masyvo spalvos pašalinkite paskutinį elementą ir vietoje jo pridėkite spalvas 'Juoda' ir 'Balta'.
Adresuokite masyvą nuo galo.
Laukiamas rezultatas: ['Raudona', 'Zalia', 'Melyna', 'Juoda', 'Balta']
*/
pasalintiPaskutini = () => {
    spalvos.splice(-1, 1, 'Juoda', 'Balta');
    console.log(spalvos);
}
pasalintiPaskutini();

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements

arr.splice(0, 3, "Lets", "dance"); // remove 3 first elements

console.log(arr.join(" ") );

//Pradiniai duomenys:
let vardai2 = ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Rita', 'Mindaugas'];
let skaiciai2 = [1, 2, 3, 4, 5, 6, 7, 8];
let spalvos2 = ['Raudona', 'Zalia', 'Melyna', 'Geltona', 'Juoda'];

/*----------------------------
Užduotis 1: Naudodami .slice(), sukurkite naują masyvą, kuris turėtų tik pirmus tris vardus iš masyvo vardai.
Laukiamas rezultatas: ['Jonas', 'Asta', 'Petras']
*/
pirmi3Vardai = () => {
    let naujasVardai = vardai2.slice(0, 3);
    console.log(naujasVardai);
}
//pirmi3Vardai();


/*----------------------------
Užduotis 2: Iš masyvo skaiciai išskirkite elementus, pradedant nuo 3 indekso ir baigiant (neįskaitant) 6 indekso.
Laukiamas rezultatas: [4, 5, 6]
*/
isrinktiSkaiciai = () => {
    let naujiSkaiciai = skaiciai2.slice(3, 6); //indeksas 3 itraukiamas, indeksas 6 neitraukiamas
    console.log(naujiSkaiciai);
}
isrinktiSkaiciai();

/*----------------------------
Užduotis 3: Sukurkite naują masyvą iš masyvo spalvos, naudodami neigiamą indeksą taip, 
kad naujame masyve būtų paskutinės dvi spalvos.
Laukiamas rezultatas: ['Juoda', 'Geltona']
*/
paskutines2Spalvos = () => {
    let naujosSpalvos = spalvos2.slice(-2).reverse();
    console.log(naujosSpalvos);
}
paskutines2Spalvos();


/*----------------------------
Užduotis 4: Naudodami .slice(), sukurkite masyvo vardai kopiją pridėkite prie jos vardą 'Antanas'.
Patikrinkite, ar originalus masyvas vardai nebuvo pakeistas.
Laukiamas rezultatas vardai: ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Rita', 'Mindaugas']
Laukiamas rezultatas vardai_kopija: ['Jonas', 'Asta', 'Petras', 'Inga', 'Tomas', 'Rita', 'Mindaugas', 'Antanas']
*/
kopijuotiVardai = () => {
    let vardai2_kopija = vardai2.slice();
    vardai2_kopija.push('Antanas');
    console.log(vardai2);
    console.log(vardai2_kopija);

    let vardai2_kopija2 = vardai2;
    vardai2_kopija2.push('Antanas');
    console.log(vardai2);
    console.log(vardai2_kopija2);
}
kopijuotiVardai();

/*----------------------------
Užduotis 5: Naudodami .slice(), sukurkite naują masyvą iš masyvo skaiciai, kuriame būtų visi elementai, išskyrus pirmąjį ir paskutinįjį.
Laukiamas rezultatas: [2, 3, 4, 5, 6, 7]
*/
isrinktiViduriniusSkaicius = () => {
    let viduriniaiSkaiciai = skaiciai2.slice(1, -1);
    console.log(viduriniaiSkaiciai);
}
isrinktiViduriniusSkaicius();


//Pradiniai duomenys:
let pirmasMasyvas = [1, 2, 3];
let antrasMasyvas = [4, 5, 6];
let vardai3 = ['Jonas', 'Petras'];
let vardai4 = ['Asta', 'Inga'];
let spalvos3 = ['Raudona', 'Zalia', 'Melyna'];

/*----------------------------
Užduotis 1: Naudodami .concat(), sujunkite masyvus pirmasMasyvas ir antrasMasyvas į vieną masyvą.
Laukiamas rezultatas: [1, 2, 3, 4, 5, 6]
*/
sujungtiMasyvus = () => {
    let sujungtasMasyvas = pirmasMasyvas.concat(antrasMasyvas);
    console.log(sujungtasMasyvas);
}
sujungtiMasyvus();

/*----------------------------
Užduotis 2: Sujunkite masyvus vardai1 ir vardai2, kad suformuotumėte naują masyvą su visais 
keturiais vardais. Pridėkite pavienius elementus 'Antanas' ir 'Rita'.
Laukiamas rezultatas: ['Jonas', 'Petras', 'Asta', 'Inga', 'Antanas', 'Rita']
*/
sujungtiVardus = () => {
    let sujungtiVardai = vardai3.concat(vardai4, 'Antanas', 'Rita');
    console.log(sujungtiVardai);
}
sujungtiVardus();

/*----------------------------
Užduotis 3: Naudodami .concat(), sukurkite kopiją iš masyvo spalvos, bet nemodifikuokite originalaus masyvo.
Pridėkite naujam masyvui elementą 'Geltona'.
Laukiamas rezultatas: Naujas masyvas su reikšmėmis: ['Raudona', 'Zalia', 'Melyna', 'Geltona']. 
Įsitikinkite, kad spalvos masyvas lieka nepakitęs.
*/

kopijuotiSpalvas = () => {
    let spalvos3_kopija = spalvos3.concat('Geltona');
    console.log(spalvos3);
    console.log(spalvos3_kopija);
}
kopijuotiSpalvas();


/*----------------------------
Užduotis 4: Naudodami .concat() sujunkite stringus 'Labas', 'Vakaras' į vieną stringą. 
Ne masyvus, o stringus. Atskiriama tarpu.
Laukiamas rezultatas: 'Labas Vakaras'
*/

sujungtiStringus = () => {
    let stringai = 'Labas'.concat(' ', 'Vakaras');
    console.log(stringai);
}
sujungtiStringus();