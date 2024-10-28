/*
Užduotis:
 
- Parašykite funkciją, kuri naudodama `for` ciklą ir `switch`, apskaičiuotų turimų monetų bendrą svorį gramais.
- Naudodami EventListener, sukurkite 16 mygtukų, kuriuos paspaudus būti pridedama arba sumažinama monetų kiekis rankoje.
- Po kiekvieno paspaudimo svoris turi būti automatiškai perskaičiuojamas ir išvedamas į konslolę.
- Monetų kiekiai turi būti saugomi masyve su 8 elementais.
 
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
*/

// Initial coin quantities
let coinQuantities = [3, 1, 10, 5, 0, 2, 7, 4];

// Coin weights in grams
let coinWeights = [2.3, 3.06, 3.92, 4.10, 5.74, 7.80, 7.50, 8.50];

function calculateTotalWeight() {
    let totalWeight = 0;
    for (let i = 0; i < coinQuantities.length; i++) {
        switch (i) {
            case 0:
                totalWeight += coinQuantities[i] * coinWeights[0];
                break;
            case 1:
                totalWeight += coinQuantities[i] * coinWeights[1];
                break;
            case 2:
                totalWeight += coinQuantities[i] * coinWeights[2];
                break;
            case 3:
                totalWeight += coinQuantities[i] * coinWeights[3];
                break;
            case 4:
                totalWeight += coinQuantities[i] * coinWeights[4];
                break;
            case 5:
                totalWeight += coinQuantities[i] * coinWeights[5];
                break;
            case 6:
                totalWeight += coinQuantities[i] * coinWeights[6];
                break;
            case 7:
                totalWeight += coinQuantities[i] * coinWeights[7];
                break;
        }
    }
    return totalWeight.toFixed(2);
}

// Function to update coin quantities and recalculate weight
function updateCoinQuantity(index, increment) {
    if (increment) {
        coinQuantities[index]++;
    } else {
        coinQuantities[index] = Math.max(0, coinQuantities[index] - 1);
    }
    console.log(`Total weight: ${calculateTotalWeight()} grams`);
}

// Create buttons and add event listeners

const container = document.getElementById('buttonContainer')

for (let i = 0; i < 8; i++) {
    let addButton = document.createElement('button');
    addButton.innerText = `Add ${i + 1}`;
    addButton.style.marginRight = '5px'
    addButton.addEventListener('click', () => updateCoinQuantity(i, true));
    container.appendChild(addButton);

    let removeButton = document.createElement('button');
    removeButton.innerText = `Remove ${i + 1}`;
    removeButton.style.marginRight = '5px'
    removeButton.addEventListener('click', () => updateCoinQuantity(i, false));
    container.appendChild(removeButton);
}

// Initial weight calculation
console.log(`Initial total weight: ${calculateTotalWeight()} grams`);
