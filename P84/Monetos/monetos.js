/*-----------------------------------
Užduotis:

- Parašykite funkciją, kuri naudodama `for` ciklą ir `switch`, apskaičiuotų turimų monetų bendrą svorį gramais.
- Naudodami EventListener, sukurkite 16 mygtukų, kuriuos paspaudus būti pridedama arba sumažinama monetų kiekis rankoje.
- Po kiekvieno paspaudimo svoris turi būti automatiškai perskaičiuojamas ir išvedamas į konslolę.
- Monetų kiekiai turi būti saugomi masyve su 8 elementais.
- Neigiemas monetų kiekis negalimas

Svoris suapvalinamas iki dviejų skaičių po kablelio.
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

Pavyzdinio monetų rinkinio svoris turi būti 171.76 g
*/


/*
Modifikuokite monetų svorio skaičiuoklės kodą taip, kad jis atvaizduotų:
- Kiekvieno nominalo monetų turimą kiekį
- Kiekvieno nominalo monetų turimą svorį
- Padarykite, kad Nominalo svoris būtu neįhardkodintas, o paimtas iš masyvo
*/

const monetos_rankoje = [3, 1, 10, 5, 0, 2, 7, 4];
const svoriai = [2.3, 3.06, 3.92, 4.10, 5.74, 7.80, 7.50, 8.50];
const monetu_pavadinimai = ["1 ct", "2 ct", "5 ct", "10 ct", "20 ct", "50 ct", "1 €", "2 €"];
let bendras_svoris = 0;

const getBendrasSvoris = () => {
    bendras_svoris = 0;
    for (let i = 0; i < monetos_rankoje.length; i++) {
        bendras_svoris += monetos_rankoje[i] * svoriai[i];
    }
    return bendras_svoris.toFixed(2);
}
const suskaiciuotiNominaluSvori =(indexCoin, indexWeight) => {
    return monetos_rankoje[indexCoin] * svoriai[indexWeight];
};

const perskaiciuotiNominaluKiekius = () => {
    for(let i = 0; i < monetos_rankoje.length; i++){
        document.getElementsByClassName("monetu-kiekis-rankoje")[i].innerHTML = monetos_rankoje[i];
    }};

const parodytiNominaloSvori=() => {
    for(let i = 0; i < svoriai.length; i++){
        document.getElementsByClassName("nominalo-svoris")[i].innerHTML = `${monetu_pavadinimai[i]} = ${svoriai[i].toFixed(2)} g`;
    }};
    
const perskaiciuotiNominaluSvorius = () => {
    for(let i = 0; i < monetos_rankoje.length; i++){
        document.getElementsByClassName("turimas-svoris")[i].innerHTML = suskaiciuotiNominaluSvori(i, i).toFixed(2);
}};

perskaiciuotiNominaluKiekius();
perskaiciuotiNominaluSvorius();
parodytiNominaloSvori();

const pridetiMoneta = (index, ammount) => {
    if (monetos_rankoje[index] + ammount >= 0)
        monetos_rankoje[index] += ammount;
    perskaiciuotiNominaluKiekius();
    perskaiciuotiNominaluSvorius();
    console.log("---------------------------------")
    console.log("Monetos rankoje", monetos_rankoje);
    console.log("Turimas svoris", getBendrasSvoris());
}


remove_1ct.onclick = () => pridetiMoneta(0, -1);
add_1ct.onclick = () => pridetiMoneta(0, +1);

remove_2ct.onclick = () => pridetiMoneta(1, -1);
add_2ct.onclick = () => pridetiMoneta(1, +1);

remove_5ct.onclick = () => pridetiMoneta(2, -1);
add_5ct.onclick = () => pridetiMoneta(2, +1);

remove_10ct.onclick = () => pridetiMoneta(3, -1);
add_10ct.onclick = () => pridetiMoneta(3, +1);

remove_20ct.onclick = () => pridetiMoneta(4, -1);
add_20ct.onclick = () => pridetiMoneta(4, +1);

remove_50ct.onclick = () => pridetiMoneta(5, -1);
add_50ct.onclick = () => pridetiMoneta(5, +1);

remove_1e.onclick = () => pridetiMoneta(6, -1);
add_1e.onclick = () => pridetiMoneta(6, +1);

remove_2e.onclick = () => pridetiMoneta(7, -1);
add_2e.onclick = () => pridetiMoneta(7, +1);

console.log(getBendrasSvoris());