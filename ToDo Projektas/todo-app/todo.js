document.addEventListener('DOMContentLoaded', function() {
    const userDetails = document.getElementById('userDetails');
    const addButton = document.getElementById('addButton');
    const addForm = document.getElementById('addForm');
    const submitButton = document.getElementById('submitButton');
    const cancelButton = document.getElementById('cancelButton');
    const editCancelButton = document.getElementById('editCancelButton');
    const editSubmitButton = document.getElementById('editSubmitButton');
    const todoList = document.getElementById('todoList');
    const userName = sessionStorage.getItem('userName'); // Get user name from sessionStorage
    const userId = sessionStorage.getItem('userId'); // Get user id from sessionStorage
    const apiEndPoint = 'https://localhost:7171/api/ToDo/';

    //Get user details from sessionStorage and display
            userDetails.innerText = `Logged in as: ${userName}`;


// Fetch and display todo items in the table together with Edit and Delete buttons related to exact todo item
const getUserAllTodos = () => {
    fetch(apiEndPoint)
        .then(response => response.json())
        .then(data => {
            todoList.innerHTML = '';
            data.filter(item => item.userId === userId)
                .forEach(item => {
                    const todoItem = document.createElement('tr');
                    todoItem.setAttribute('data-rowId', item.id);
                    todoItem.innerHTML = `
                        <td class="todoId">${item.id}</td>
                        <td class="type">${item.type}</td>
                        <td class="content">${item.content}</td>
                        <td class="endDate">${new Date(item.endDate).toLocaleDateString()}</td>
                        <td class="actions">
                                <button id="editButton">Edit</button>
                                <button id="deleteButton">Delete</button>
                        </td>    
                    `;
                    todoItem.querySelector('#editButton').addEventListener('click', function() {
                        editTodoItem(item.id);
                    });
                    todoItem.querySelector('#deleteButton').addEventListener('click', function() {
                        if (confirm('Are you sure you want to delete this item?')) {
                            deleteTodoItem(item.id);
                        }
                    });
                    todoList.appendChild(todoItem);
                });
        })
        .catch(error => console.error('Error:', error));
};
getUserAllTodos();

    // Show add form function
    addButton.addEventListener('click', function() {
        addForm.classList.toggle('hidden');
    });
    
    // Function to clear the form fields
    const clearAddForm = () => {
        if (document.getElementById('type').value !== '') {
            document.getElementById('type').value = '';
        }
        if (document.getElementById('content').value !== '') {
            document.getElementById('content').value = '';
        }
        if (document.getElementById('endDate').value !== '') {
            document.getElementById('endDate').value = '';
        }
    };
    
    const clearEditForm = () => {
        if (document.getElementById('editType').value !== '') {
            document.getElementById('editType').value = '';
        }
        if (document.getElementById('editContent').value !== '') {
            document.getElementById('editContent').value = '';
        }
        if (document.getElementById('editEndDate').value !== '') {
            document.getElementById('editEndDate').value = '';
        }
    };

cancelButton.addEventListener('click', function() {
    clearAddForm();
    addForm.classList.toggle('hidden');
});

editCancelButton.addEventListener('click', function() {
    clearEditForm();
    editForm.classList.toggle('hidden');
});

// Add new todo item
    submitButton.addEventListener('click', function() {
        const type = document.getElementById('type').value;
        const content = document.getElementById('content').value;
        const endDate = document.getElementById('endDate').value;

    // Check if all fields are filled
    if (!type || !content || !endDate) {
        alert('All fields are required.');
        return;
    }

        fetch(apiEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId, type:type, content:content, endDate:endDate })
        })
        .then(response => {
            if (response.status === 201) {
                getUserAllTodos();
                addForm.classList.toggle('hidden');
                clearAddForm();
        }
        else {
            response.json().then(data => {
                let errorMessages = '';
                for (const field in data.errors) {
                    errorMessages += `<p><strong>${field}</strong>: ${data.errors[field].join(', ')}</p>`;
                }
                document.body.innerHTML = `
                <div class="error">
                <h1>${data.title}</h1>
                <div class="error-details">
                    ${errorMessages}
                </div>
                <button id="retry">Retry</button>
                </div>`;
                document.getElementById('retry').addEventListener('click', function() {window.location.href = '../todo-app/todo.html'})
            });
        }
        })
        .catch(error => console.error('Error:', error));
    });

// Function for editing a todo item
const editTodoItem = (id) => {
    editForm.classList.toggle('hidden');     // Show edit form function
    document.getElementById('editId').value = id;
    document.getElementById('editType').value = document.querySelector(`tr[data-rowId='${id}'] .type`).innerText;
    document.getElementById('editContent').value = document.querySelector(`tr[data-rowId='${id}'] .content`).innerText;
    document.getElementById('editEndDate').value = document.querySelector(`tr[data-rowId='${id}'] .endDate`).innerText;

    editSubmitButton.addEventListener('click', function() {
        const type = document.getElementById('editType').value;
        const content = document.getElementById('editContent').value;
        const endDate = document.getElementById('editEndDate').value;

            // Check if all fields are filled
    if (!type || !content || !endDate) {
        alert('All fields are required.');
        return;
    }

        fetch(`${apiEndPoint}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId, type:type, content:content, endDate:endDate, id:id })
        })
        .then(response => {
            if (response.status === 204) {
                getUserAllTodos();
                editForm.classList.toggle('hidden');   
                clearEditForm();            
        }
        else {
            response.json().then(data => {
                let errorMessages = '';
                for (const field in data.errors) {
                    errorMessages += `<p><strong>${field}</strong>: ${data.errors[field].join(', ')}</p>`;
                }
                document.body.innerHTML = `
                <div class="error">
                <h1>${data.title}</h1>
                <div class="error-details">
                    ${errorMessages}
                </div>
                <button id="retry">Retry</button>
                </div>`;
                document.getElementById('retry').addEventListener('click', function() {window.location.href = '../todo-app/todo.html'})
            });
        }
        })
        .catch(error => console.error('Error:', error));
    });
    };
    
    // Function to delete a todo item
    const deleteTodoItem = (id) => {
        fetch(`${apiEndPoint}${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.status === 204) {
                // Remove the item from the DOM
                const itemToRemove = document.querySelector(`tr[data-rowId='${id}']`);
                if (itemToRemove) {
                    itemToRemove.remove();
                }
            } else {
                console.error('Failed to delete the item');
            }
        })
        .catch(error => console.error('Error:', error));
    };
//Function for logout
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.clear();
        window.location.href = '../index.html';
    });


});