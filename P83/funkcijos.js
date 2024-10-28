console.log("---Function Statements---");
function greet() {
    console.log('Hello there!');
}
//kviečiame funkciją
greet();


console.log("Function with 1 parameter");
function greet2(name) {
    console.log('Hello ' + name);
}
//kviečiame funkciją
greet2('John');

console.log("Function with 2 parameters");
function greet3(firstName, country) {
    console.log('Hello ' + firstName + ' from ' + country);
}
//kviečiame funkciją
greet3('John', 'USA');

console.log("Function with 2 parameters and return");
function greet4(firstName, country) {
    return 'Hello ' + firstName + ' from ' + country;
}
//kviečiame funkciją
let greeting = greet4('John', 'USA');
console.log(greeting);





console.log("---UZDUOTYS 1---");

let userName = "John";
function showMessage() {
    userName = "Bob";
    let message = 'Hello, ' + userName;
    console.log(message);
}
console.log(userName); // John
showMessage(); // Hello, Bob
console.log(userName); // Bob

console.log("---UZDUOTYS 2---");
//function based on age parameter to check if person is able to drink energy drink (over or equal 18). 
//If 18 and more returns alert, if less returns needed confirmation from parents
function canDrink(age) {
    if (age >= 18) {
        return alert("You can drink energy drink");
    } else {
        return alert("You need parents confirmation");
    }
}
canDrink(18);

console.log("---UZDUOTYS 3---");
//conditional ternary operator for the same function
function canDrinkTernary(age) {
    return age >= 18 ? alert("You can drink energy drink") : alert("You need parents confirmation");
};
canDrinkTernary(17);

console.log("---UZDUOTYS 4---");
let darbuotojai = ['Jonas', 'Petras', 'Asta', 'Rita', 'Tomas', 'Mindaugas', 'Dalia', 'Saulius', 'Inga'];

//function to display all workers with arrow function
const displayWorkers = () => {
    console.log(darbuotojai);
};
displayWorkers();

//function to add worker to the list using function expression
const addWorker = function (name) {
    darbuotojai.push(name);
};
addWorker('Ieva');
addWorker('Rasa');
addWorker('Vaida');

displayWorkers();

//function to return true or false if worker exists in the list by the name using for each loop

function workerExists(name) {
    let exists = false;
    darbuotojai.forEach(worker => {
        if (worker === name) {
            exists = true;
        }
    });
    return exists;
};

console.log(workerExists('Jonas'));

//function to accept 2 parameters: old and new name and change the name in the list.
//If old name does not exist - do nothing.
//If old name exists - change it to new name
//If old name exists, but new name not provided - change to "Anonimas"
function changeWorkerName(oldName, newName = 'Anonimas') {
    darbuotojai.forEach((worker, index) => {
        if (worker === oldName) {
            if (newName) {
                darbuotojai[index] = newName;
            }
    }});
};
changeWorkerName('Jonas');
changeWorkerName('Petras', 'Petras2');
changeWorkerName('Astra', 'Asta2');
displayWorkers();

