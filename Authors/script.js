const schemeAndAuthority = 'https://localhost:7120';

async function getAuthor() {
    const authorId = document.getElementById('authorId').value;
    const response = await fetch(`${schemeAndAuthority}/api/Authors/${authorId}`);
    const data = await response.json();
    console.log(data);
}

async function addAuthor() {
    const authorName = document.getElementById('authorName').value;
    const authorSurname = document.getElementById('authorSurname').value;
    const response = await fetch(`${schemeAndAuthority}/api/Authors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vardas: authorName, pavarde: authorSurname })
    });
    loadAuthors();
}

async function updateAuthor() {
    const authorId = document.getElementById('updateAuthorId').value;
    const authorName = document.getElementById('updateAuthorName').value;
    const authorSurname = document.getElementById('updateAuthorSurname').value;
    const response = await fetch(`${schemeAndAuthority}/api/Authors/${authorId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vardas: authorName, pavarde: authorSurname })
    });
    loadAuthors();
}


async function deleteAuthor() {
    const authorId = document.getElementById('deleteAuthorId').value;
    const response = await fetch(`${schemeAndAuthority}/api/authors/${authorId}`, {
        method: 'DELETE'
    });
    loadAuthors();
}

async function loadAuthors() {
    const response = await fetch(`${schemeAndAuthority}/api/authors`);
    const authors = await response.json();
    console.log(authors);
    const authorList = document.getElementById('authorList');
    authorList.innerHTML = '';
    authors.forEach(author => {
        const li = document.createElement('li');
        li.textContent = `${author.id}: ${author.vardas} ${author.pavarde}`;
        authorList.appendChild(li);
    });
}

// Load authors when the page loads
window.onload = loadAuthors();