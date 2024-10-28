document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const authEndPoint = 'https://localhost:7171/api/Auth/';
    

    fetch(authEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: firstName, password: password, email: email })
    })
    .then(response => {
        if (response.status === 200) {
            sessionStorage.setItem('userName', firstName);
            document.body.innerHTML =`
             <div class="success">
             <h1>User registered successfully</h1>
             <button id="continue">Continue</button></div>`;
            document.getElementById('continue').addEventListener('click', function(){window.location.href = '../login-form/login.html'})
        } else {
            response.json().then(data => {
                document.body.innerHTML =`
                <div class="error">
                <h1>${data.error}</h1>
                <button id="retry">Retry</button></div>`;
                document.getElementById('retry').addEventListener('click', function(){window.location.href = 'registration.html'})
            })}})
    .catch(error => alert('Please check credentials and try again', error));
});