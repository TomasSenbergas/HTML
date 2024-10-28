
//pagrindine fukcija, kuri atlieka duomenų gavimą iš API ir iškviečia kitas funkcijas duomenų atvaizdavimui
//duomenų gavimui naudojama fetch funkcija

async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

        fetch(requestURL)
        .then((response) => response.json())
        .then((superHeroes) => {
            populateHeader(superHeroes);
            populateHeroes(superHeroes);
  })}


  //funkcija, kuri dinamiškai sukuria headeri bei vieną paragrafą (p) ir parodo squadName, homeTown, formed
  function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }
  
  //funkcija, kuri dinamiškai sukuria hero blokus, kuriuose yra antras headeris, bei 3 paragrafai, kurie kiekvienas
  //turi nerikiuotą sąrašą su superpoweriais
  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  //pagrindines funkcijos iškvietimas
populate();  
 
  