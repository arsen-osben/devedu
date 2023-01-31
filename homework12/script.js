document.addEventListener('DOMContentLoaded', function () {
   const btnLoad = document.querySelector('.btn-load');
   const personContainer = document.querySelector('#person-container');
   const inputEpizod = document.getElementById('inputEpizod');
   
   btnLoad.addEventListener('click', function () {
       personContainer.innerHTML = '';
       let inputValue = parseInt(inputEpizod.value);
       if ((inputValue <= 1) || (inputValue >= 6) ) {
           inputValue = 2;
       }
       if (!Number.isInteger(inputValue)) {
           alert('Bad value epizod')
           return false;
       }
       
       fetch('https://swapi.dev/api/films/' + inputValue + '/')
           .then((response) => {
               return response.json();
           })
           .then((data) => {
                   for (let i = 0; i < data.characters.length; i++) {
                       fetch(data.characters[i])
                           .then((resp) => {
                           return resp.json();
                       })
                           .then((personage) => {
                                                              
                               let divCard = document.createElement('div');
                               let namePersonage = document.createElement('h3');
                               let divBD = document.createElement('div');
                               let divGender = document.createElement('div');
                               
                               divCard.classList.add('card-item');
                               divBD.classList.add('birth-day');
                               divGender.classList.add('gender');
                               
                               namePersonage.textContent = personage.name;
                               divBD.textContent = 'BirthDay: ' + personage.birth_year;
                               if (personage.gender == 'male') {
                                   divGender.classList.add('male');
                               } else if (personage.gender == 'female') {
                                   divGender.classList.add('female');
                               } else {
                                   divGender.textContent = 'unknown';
                               }
                               
                               divCard.append(namePersonage);
                               divCard.append(divBD);
                               divCard.append(divGender);
                               personContainer.append(divCard)
                           })
                   }
               }
           );
       
   });
});

let planetsURL = 'https://swapi.dev/api/planets/?page=1';
let planetsContainer = document.getElementById('planets-container');
let btnPrev = document.getElementById('btn-planet-prev');
let btnNext = document.getElementById('btn-planet-next');
let nextPlanet;
let prevPlanet;
async function getPlanet() {

    let results = await fetch(planetsURL);
    const data = await results.json();
    let planets = data.results;


    let planetsList = '';
    for (let i = 0; i < planets.length; i++) {
        planetsList += `<div class="planet__item">${planets[i].name}</div>`
    }
    planetsContainer.innerHTML = planetsList;

    nextPlanet = data.next;
    prevPlanet = data.previous;
    
}

function nextPlanets() {
    if(nextPlanet !== null) {
        planetsURL = new URL(nextPlanet);
    }
    getPlanet()
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        });
}

function prevPlanets() {
    if (prevPlanet !== null) {
        planetsURL = new URL(prevPlanet);
    }
    getPlanet()
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        });
}
    

getPlanet();
btnPrev.addEventListener('click', function () {
    prevPlanets();
});
btnNext.addEventListener('click', function () {
    nextPlanets();
});
