// 1. Susikurti kintamuosius pasiekti input elementui bei formos elementui;
const inputElement = document.getElementById('number');
const formElement = document.querySelector('form');

// 2. Input elementui pridėti event Listener‘į su blur event‘u ir arrow function (viskas žemiau pavaizduota bus šitoje arrow function);
inputElement.addEventListener('blur', () => {
    // 3. Susikurti kintamąjį gauti įvestai reikšmei į input‘ą;
    const inputValue = inputElement.value;

    // 4. Susikurti if‘ą (be else) kuris tikrins kad jeigu p egzistuoja jį reikia ištrinti prieš pridedant naują;
    let existingP = document.querySelector('form p');
    if (existingP) {
        existingP.remove();
    }

    // 5. Susikurti kintamąjį kuris sukurs naują elementą – p;
    const pElement = document.createElement('p');

    // 6. p elementui uždėti minimalų padding; pridėjau styles.css faile.


    /* 7. Susikurti if, else. If dalis tikrins ar skaičius yra ne skaičius, ar mažesnis už nulį ar didesnis už 99, jei taip, tuomet pakeis prieš tai
sukurto p elemento background spalvą, teksto spalvą ir pridės žinutę kuri sakys kad įvesta yra neteisinga reikšmė ir parodys kas
buvo įvesta. Else netikrins nieko, tačiau pakeis prieš tai sukurto p elemento background spalvą, teksto spalvą ir pridės žinutę kuri
patvirtin jog tai yra skaičius tarp 0 ir 99.*/
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 99) {
        // If NaN, <99 ar > 99
        pElement.style.backgroundColor = 'red';
        pElement.style.color = 'white';
        pElement.textContent = `Tai yra ne skaičius ARBA jis <0 ARBA >99. Jūsų įvesta reikšmė: ${inputValue}`;
        formElement.append(pElement);
    } else {
        // If number between 0-99
        pElement.style.backgroundColor = 'green';
        pElement.style.color = 'white';
        pElement.textContent = `Tai yra skaičius tarp 0 ir 99. Jūsų reikšmė: ${inputValue}`;
        formElement.prepend(pElement);
    }
});
