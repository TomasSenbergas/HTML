/*------------------------------------
Projektas 1:
Turite darbuotojų duomenų sąrašą HTML table elementuose (vardas, pavarde, amzius, pareigos).
 
Parašykite JavaScript funkciją, kuri, paspaudus mygtuką „Generuoti CSV“, surinks visus duomenis iš lentelės 
#darbuotojai ir suformuos CSV formato eilutę. Lentelėje yra ir antraštės (<thead>), 
ir duomenų eilutės (<tbody>).
 
Užduotis 1:. Sujunkite antraštes ir eilutes į CSV formato tekstą, naudodami kablelius kaip skyriklį 
tarp duomenų.
Naudokite .join() metodą.
Pridėkite funkcionalumą, kad CSV turinys būtų rodomas naudotojui kaip tekstinė eilutė arba 
atsidarytų pranešimo lange (alert), kai CSV yra suformuotas
 
Laukiamas rezultatas:
Vardas,Pavardė,Amžius,Pareigos
Jonas,Jonaitis,30,Programuotojas
Asta,Astaitė,25,Projektų vadovė
Petras,Petraitis,35,Analitikas
Inga,Ingaitytė,28,Testuotoja
 
Užduotis 2:  Padarykite kad csv būtu galima atsisiųsti kaip failą.
 
Užduotis 3: Pridėkite funkcionalumą, kad naudotojas galėtu pasirinkti  CSV formato skyriklį , arba ;
*/

document.getElementById('generateCSVButton').addEventListener('click', generateCSV);

function generateCSV() {
    const delimiter = document.getElementById('delimiterSelect').value;
    const table = document.getElementById('darbuotojai');
    const headers = getHeaders(table);
    const rows = getRows(table);

    let csvContent = headers.join(delimiter) + '\n';
    for (let i = 0; i < rows.length; i++) {
        csvContent += rows[i].join(delimiter) + '\n';
    }

    alert(csvContent);

    // Create a downloadable CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'darbuotojai.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getHeaders(table) {
    const headers = [];
    const thElements = table.querySelectorAll('thead th');
    for (let i = 0; i < thElements.length; i++) {
        headers.push(thElements[i].innerText);
    }
    return headers;
}

function getRows(table) {
    const rows = [];
    const trElements = table.querySelectorAll('tbody tr');
    for (let i = 0; i < trElements.length; i++) {
        const row = [];
        const tdElements = trElements[i].querySelectorAll('td');
        for (let j = 0; j < tdElements.length; j++) {
            row.push(tdElements[j].innerText);
        }
        rows.push(row);
    }
    return rows;
}