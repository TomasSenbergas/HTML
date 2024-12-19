document.addEventListener('DOMContentLoaded', function() {
    const userName = sessionStorage.getItem('userName'); // Get user name from sessionStorage
    const userId = sessionStorage.getItem('userId'); // Get user id from sessionStorage
    const token = sessionStorage.getItem('token'); // Get JWT token from sessionStorage
    const baseURL = 'https://localhost:50232/api';


//Get user details from sessionStorage and display
userDetails.innerText = `Logged in as: ${userName}`;

// Fetch data from the endpoint
async function fetchHumanData() {
    try {
        const response = await fetch(`${baseURL}/HumanData/${userId}/humanDataByUserId`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}` // Bearer token in header
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.id) {
            sessionStorage.setItem('humanId', data.id); // Save humanId (GUID) to sessionStorage
            populateTable(data);
            fetchAddressData(); // Fetch address data if human data exists
            fetchPicture(); // Fetch picture if human data exists
        } else {
            displayHumanDataForm(); // Display form if no human data
        }

    } catch (error) {
        console.error('Error fetching human data:', error);
        displayHumanDataForm(); // Display form if error occurs
    }
}

// Display form to enter human data
function displayHumanDataForm() {
    const formHtml = `
        <h2>Enter Human Data</h2>
        <form id="human-data-form">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required><br>
            <label for="personalCode">Personal Code:</label>
            <input type="text" id="personalCode" name="personalCode" required><br>
            <label for="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <button type="submit">Submit</button>
        </form>
    `;
    document.body.innerHTML = formHtml;

    document.getElementById('human-data-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const humanData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            personalCode: formData.get('personalCode'),
            phoneNumber: formData.get('phoneNumber'),
            email: formData.get('email'),
            userId: userId
        };

        try {
            const humanResponse = await fetch(`${baseURL}/HumanData`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(humanData)
            });

            if (!humanResponse.ok) {
                const errorData = await humanResponse.json();
                throw new Error(`Error: ${humanResponse.status} - ${errorData.title}`);
            }

            alert('Human data created successfully.');
            location.reload(); // Reload the page to fetch and display the new data
        } catch (error) {
            console.error('Error creating human data:', error);
            alert(`Error creating human data: ${error.message}`);
        }
    });
}

// Populate table with data
function populateTable(data) {
    const tableBody = document.getElementById('human-data-table').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    for (const [key, value] of Object.entries(data)) {
        if (key.toLowerCase() === 'id' || key.toLowerCase() === 'userid') {
            continue; // Skip the id and userId properties
        }

        const row = document.createElement('tr');

        const propertyCell = document.createElement('td');
        propertyCell.textContent = key;
        row.appendChild(propertyCell);

        const valueCell = document.createElement('td');
        valueCell.textContent = value ?? 'null';
        row.appendChild(valueCell);

        const actionCell = document.createElement('td');
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => updateProperty(key, value));
        actionCell.appendChild(updateButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    }
}

// Update property function
async function updateProperty(property, currentValue) {
    const humanId = sessionStorage.getItem('humanId'); // Get humanId from sessionStorage
    const newValue = prompt(`Update value for ${property}:`, currentValue);
    if (newValue === null || newValue === currentValue) {
        return; // Do nothing if the user cancels or enters the same value
    }

    let endpoint;
    switch (property) {
        case 'firstName':
            endpoint = `${baseURL}/HumanData/${humanId}/updateFirstName`;
            break;
        case 'lastName':
            endpoint = `${baseURL}/HumanData/${humanId}/updateLastName`;
            break;
        case 'personalCode':
            endpoint = `${baseURL}/HumanData/${humanId}/updatePersonalCode`;
            break;
        case 'phoneNumber':
            endpoint = `${baseURL}/HumanData/${humanId}/updatePhoneNumber`;
            break;
        case 'email':
            endpoint = `${baseURL}/HumanData/${humanId}/updateEmail`;
            break;
        default:
            console.error('Unknown property:', property);
            return;
    }

    try {
        const formData = new FormData();
        formData.append(property, newValue);

        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}` // Include the Bearer token
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${errorData.message}`);
        }

        alert(`${property} updated successfully.`);
        fetchHumanData(); // Refresh the table
    } catch (error) {
        console.error('Error updating property:', error);
        alert(`Error updating property: ${error.message}`);
    }
}

async function fetchAddressData() {
    try {
        const humanId = sessionStorage.getItem('humanId'); // Get humanId from sessionStorage
        const response = await fetch(`${baseURL}/Address/${humanId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}` // Bearer token in header
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.id) {
            populateAddressTable(data);
        } else {
            displayAddressDataForm(); // Display form if no address data
        }

    } catch (error) {
        console.error('Error fetching address data:', error);
        displayAddressDataForm(); // Display form if error occurs
    }
}

// Display form to enter address data
function displayAddressDataForm() {
    const formHtml = `
        <h2>Enter Address Data</h2>
        <form id="address-data-form">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required><br>
            <label for="street">Street:</label>
            <input type="text" id="street" name="street" required><br>
            <label for="houseNumber">House Number:</label>
            <input type="text" id="houseNumber" name="houseNumber" required><br>
            <label for="apartmentNumber">Apartment Number:</label>
            <input type="text" id="apartmentNumber" name="apartmentNumber" required><br>
            <button type="submit">Submit</button>
        </form>
    `;
    document.body.innerHTML += formHtml;

    document.getElementById('address-data-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const addressData = {
            city: formData.get('city'),
            street: formData.get('street'),
            houseNumber: formData.get('houseNumber'),
            apartmentNumber: formData.get('apartmentNumber'),
            humanId: sessionStorage.getItem('humanId')
        };

        try {
            const response = await fetch(`${baseURL}/Address`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(addressData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${response.status} - ${errorData.title}`);
            }

            alert('Address data created successfully.');
            location.reload(); // Reload the page to fetch and display the new data
        } catch (error) {
            console.error('Error creating address data:', error);
            alert(`Error creating address data: ${error.message}`);
        }
    });
}

// Populate table with data
function populateAddressTable(data) {
    const tableBody = document.getElementById('address-data-table').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    for (const [key, value] of Object.entries(data)) {
        if (key.toLowerCase() === 'humanid'|| key.toLowerCase() === 'id') {
            continue; // Skip the humanId property
        }

        const row = document.createElement('tr');

        const propertyCell = document.createElement('td');
        propertyCell.textContent = key;
        row.appendChild(propertyCell);

        const valueCell = document.createElement('td');
        valueCell.textContent = value ?? 'null';
        row.appendChild(valueCell);
        
        if (key.toLowerCase() !== 'id') { 
            const actionCell = document.createElement('td');
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click', () => updateAddressProperty(key, value));
            actionCell.appendChild(updateButton);
            row.appendChild(actionCell);
        }
        tableBody.appendChild(row);
    }
}

// Update property function
async function updateAddressProperty(property, currentValue) {
    const humanId = sessionStorage.getItem('humanId'); // Get humanId from sessionStorage
    const newValue = prompt(`Update value for ${property}:`, currentValue);
    if (newValue === null || newValue === currentValue) {
        return; // Do nothing if the user cancels or enters the same value
    }

    let endpoint;
    switch (property) {
        case 'city':
            endpoint = `${baseURL}/Address/${humanId}/updateCity`;
            break;
        case 'street':
            endpoint = `${baseURL}/Address/${humanId}/updateStreet`;
            break;
        case 'houseNumber':
            endpoint = `${baseURL}/Address/${humanId}/updateHouseNumber`;
            break;
        case 'apartmentNumber':
            endpoint = `${baseURL}/Address/${humanId}/updateApartmentNumber`;
            break;
        default:
            console.error('Unknown property:', property);
            return;
    }

    try {
        const formData = new FormData();
        formData.append(property, newValue);

        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}` // Include the Bearer token
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${errorData.message}`);
        }

        alert(`${property} updated successfully.`);
        fetchAddressData(); // Refresh the table
    } catch (error) {
        console.error('Error updating property:', error);
        alert(`Error updating property: ${error.message}`);
    }
}

// Fetch picture from the endpoint
async function fetchPicture() {
    try {
        const humanId = sessionStorage.getItem('humanId'); // Get humanId from sessionStorage
        const response = await fetch(`${baseURL}/Picture/${humanId}`, {
            method: 'GET',
            headers: {
                'Accept': 'image/jpeg', // Set Accept header to image/jpeg
                'Authorization': `Bearer ${token}` // Bearer token in header
            }
        });

        if (!response.ok) {
            if (response.status === 404) {
                document.getElementById('human-picture').alt = 'Picture not provided';
                return;
            }
            throw new Error(`Error: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
        const imgURL = URL.createObjectURL(blob);
        document.getElementById('human-picture').src = imgURL; // Set the image source

    } catch (error) {
        console.error('Error fetching picture:', error);
        document.getElementById('human-picture').alt = 'Picture not provided';
    }
}

document.getElementById('upload-picture-button').addEventListener('click', function() {
    document.getElementById('upload-picture-input').click();
});

document.getElementById('upload-picture-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        uploadPicture(file);
    }
});

document.getElementById('delete-picture-button').addEventListener('click', function() {
    deletePicture();
});

function uploadPicture(file) {
    const humanId = sessionStorage.getItem('humanId'); // Get the appropriate HumanId
    const formData = new FormData();
    formData.append('HumanId', humanId); // Set the HumanId
    formData.append('Image', file);

    fetch(`${baseURL}/Picture`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(`Error: ${response.status} - ${errorData.title}`);
            });
        }
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log('Picture uploaded successfully:', data);
        // Update the picture on the page
        document.getElementById('human-picture').src = URL.createObjectURL(file);
    })
    .catch(error => {
        console.error('Error uploading picture:', error);
        alert(`Error uploading picture: ${error.message}`);
    });
}

function deletePicture() {
    const humanId = sessionStorage.getItem('humanId');
    fetch(`${baseURL}/Picture/${humanId}`, {
        method: 'DELETE',
        headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.ok) {
            // Handle success
            console.log('Picture deleted successfully');
            // Remove the picture from the page
            document.getElementById('human-picture').src = '';
        } else {
            throw new Error('Error deleting picture');
        }
    })
    .catch(error => {
        console.error('Error deleting picture:', error);
    });
}

document.getElementById('logout-button').addEventListener('click', function() {
    sessionStorage.clear(); // Clear all session storage
    window.location.href = '../login-form/login.html'; // Redirect to login page
});

// Initial fetch to display data
fetchHumanData();
fetchPicture(); // Fetch and display picture
});