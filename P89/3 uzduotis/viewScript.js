let currentCardIndex = 0;
const cards = JSON.parse(localStorage.getItem('cards')) || [];

function displayCard(index) {
    const card = cards[index] || { front: '', back: '' };
    document.querySelector('#card .front').textContent = card.front;
    document.querySelector('#card .back').textContent = card.back;
}

document.getElementById('flipCard').addEventListener('click', function() {
    document.getElementById('card').classList.toggle('flipped');
});

document.getElementById('nextCard').addEventListener('click', function() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    displayCard(currentCardIndex);
});

document.getElementById('prevCard').addEventListener('click', function() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    displayCard(currentCardIndex);
});

document.getElementById('backToForm').addEventListener('click', function() {
    window.location.href = 'index.html';
});

displayCard(currentCardIndex);