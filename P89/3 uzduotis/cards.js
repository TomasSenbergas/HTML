document.getElementById('saveCard').addEventListener('click', function() {
    const frontText = document.getElementById('frontText').value;
    const backText = document.getElementById('backText').value;

    if (frontText && backText) {
        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push({ front: frontText, back: backText });
        localStorage.setItem('cards', JSON.stringify(cards));
        alert('Card saved!');
    } else {
        alert('Please fill in both fields.');
    }
});

document.getElementById('viewCards').addEventListener('click', function() {
    window.location.href = 'view.html';
});