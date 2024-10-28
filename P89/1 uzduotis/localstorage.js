const textInput = document.getElementById('textInput');
const displayText = document.getElementById('displayText');
const form = document.getElementById('myForm');

// Keyup event to update h2 element
textInput.addEventListener('keyup', () => {
    displayText.textContent = textInput.value;
    });
    
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    let localStorageArray = JSON.parse(localStorage.getItem('savedText')) || [];
    localStorageArray.push(textInput.value);
    localStorage.setItem('savedText', JSON.stringify(localStorageArray));

    // Display a random entry from the array
    const randomIndex = Math.floor(Math.random() * localStorageArray.length);
    alert(`Text saved to LocalStorage! Random entry: ${localStorageArray[randomIndex]}`);
});