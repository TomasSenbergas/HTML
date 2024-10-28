/*Tomos Senbergo komentaras: URL deciau i kintamaji, kad butu lengviau keisti. 
Taip pat API kvietimą dečiau į atskirą funkciją*/
fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(response => response.json())
    .then(data => {
        displayJSONData(data);
    })
    //Tomos Senbergo komentaras: gerai, kad klaida bandoma sugaudyti
    .catch(error => {
        console.error('Error fetching data:', error);
    });
/*Tomos Senbergo komentaras: ištrauktus duomenis išsaugočiau į local storage, kad būtų galima pridėti
ar atimti herojų ar jų galias*/


 /*Tomo Senbergo komentaras: per daug masyvi funkcija, 
 skaidyciau i kelias atskiras funkcijas, kurios "uzkrautu" atskiras JSON dalis*/
    function displayJSONData(data) {
 
        const squadContainer = document.createElement('div');
        squadContainer.className = 'data-container';
   
        const squadInfo = document.createElement('div');
        squadInfo.className = 'squad-info';
   
        const squadName = document.createElement('h1');
        squadName.textContent = data.squadName;
        squadInfo.appendChild(squadName);
   
        const info = document.createElement('div');
        info.className = 'homeTown-formed';
       /*TS: kurčiau kaip viena elementa, kad būtų lengviau valdyti*/
        const hometownLabel = document.createTextNode('Hometown: ');
        const hometownValue = document.createTextNode(data.homeTown);
        const formedLabel = document.createTextNode('Formed: ');
        const formedValue = document.createTextNode(data.formed);
       
        info.appendChild(hometownLabel);
        info.appendChild(hometownValue);
        info.appendChild(document.createTextNode(' // '));
        info.appendChild(formedLabel);
        info.appendChild(formedValue);
       
        squadInfo.appendChild(info);
        squadContainer.appendChild(squadInfo);
           
        const membersList = document.createElement('div');
        membersList.className = 'members-container';
       
        data.members.forEach(member => {
            const memberItem = document.createElement('div');
            memberItem.className = 'member-item';
       
            const memberName = document.createElement('h4');
            memberName.textContent = member.name;
            memberItem.appendChild(memberName);
 
            const memberAge = document.createElement('p');
            memberAge.textContent = `Age: ${member.age}`;
            memberItem.appendChild(memberAge);
 
            const memberSecretIdentity = document.createElement('p');
            memberSecretIdentity.textContent = `Secret Identity: ${member.secretIdentity}`;
            memberItem.appendChild(memberSecretIdentity);
 
            const powersTitle = document.createElement('p');
            powersTitle.textContent = 'Powers:';
            memberItem.appendChild(powersTitle);
       
            const powersList = document.createElement('ul');
       
            member.powers.forEach(power => {
                const powerItem = document.createElement('li');
                powerItem.textContent = power;
                powersList.appendChild(powerItem);
            });
       
            memberItem.appendChild(powersList);
            membersList.appendChild(memberItem);
        });
       
        squadContainer.appendChild(membersList);
        document.body.appendChild(squadContainer);
    }