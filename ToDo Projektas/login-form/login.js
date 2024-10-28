document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');
    const authEndPoint = 'https://localhost:7171/api/Auth';

    fetch(`${authEndPoint}?username=${firstName}&password=${password}`, {
        method: 'GET'
    })
    .then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                sessionStorage.setItem('userId', data.id);
                sessionStorage.setItem('userName', data.userName);
            });
            window.location.href = '../todo-app/todo.html';
        } else {
            errorDiv.innerText = 'Wrong username or password';
            errorDiv.style.display = 'block';
        }
    });
});