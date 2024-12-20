document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');
    const authEndPoint = 'https://localhost:50232/api/User/login';

    fetch(authEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: firstName, password: password })
    })
    .then(response => {
        if (response.status === 200) {
            response.text().then(token => {  // Use response.text() for string response
                console.log('Token:', token); // Debug log
                console.log('Username:', firstName); // Debug log
                
                // Decode the JWT and extract the nameId (or userId or whichever field you need)
                const decodedToken = parseJwt(token);
                const nameId = decodedToken.nameid;  // Adjust this if the field name is different
                
                console.log('Decoded Payload:', decodedToken); // Debug log to check the decoded payload
                
                if (nameId) {
                    // Save the token, username, and nameId to sessionStorage
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('userName', firstName);
                    sessionStorage.setItem('userId', nameId); // Save nameId to sessionStorage

                    // Log to verify
                    console.log('Name ID:', nameId);
                } else {
                    console.error('nameId not found in decoded token.');
                }
            });
            window.location.href = '../human-app/human.html';
        } else {
            errorDiv.innerText = 'Wrong username or password';
            errorDiv.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error); // Debug log for fetch errors
    });
});

// Function to parse the JWT and extract the nameId (or any other field)
function parseJwt(token) {
    const base64Url = token.split('.')[1];  // Payload is the second part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');  // URL-safe base64 to standard base64

    // Decode the base64 part to JSON
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const decodedPayload = JSON.parse(jsonPayload);
    return decodedPayload;  // Return the decoded JWT payload object
}
