/*
1. Susikurkite inputa tekstui.
2. Susikurkite 4 mygtukus, visiems 4 metodams.
3. ivedus teksta ir paspaudus kazkuri is mygtuku, ivestas tekstas turetu atsirasti/dingti
''output'' paragrafe atitinkamoje vietoje priklausomai nuo paspausto metodo.
*/

const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
let textArray = [];

document.getElementById('addToEnd').addEventListener('click', () => {
    textArray.push(textInput.value);
    updateOutput();
});

document.getElementById('removeLast').addEventListener('click', () => {
    textArray.pop();
    updateOutput();
});

document.getElementById('addToFront').addEventListener('click', () => {
    textArray.unshift(textInput.value);
    updateOutput();
});
document.getElementById('removeFromFront').addEventListener('click', () => {
    textArray.shift(textInput.value);
    updateOutput();
});

document.getElementById('clearText').addEventListener('click', () => {
    textArray = [];
    updateOutput();
});

function updateOutput() {
    output.textContent = textArray.join(' ');
};
