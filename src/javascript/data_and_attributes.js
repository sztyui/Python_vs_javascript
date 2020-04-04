// fetch API
// returns a promise

const myDiv = document.getElementById("planet");
const planetInfo = document.getElementById("planetInfo");
const myButton = document.getElementById("button");
const mySecondButton = document.getElementById("otherButton");
const filterBox = document.getElementById("filterBox");
const highlighter = document.getElementById("highlighter");
const selector = document.getElementById("selector");

let querriedPlanets = []

function determinePopulationLevel(population){
    if(population > 0 && population <= 1000000){
        return "low";
    }
    else if (population > 1000000 && population <= 1000000000){
        return "medium";
    }
    else if (population > 1000000000){
        return "high";
    }
    else {
        return "unknown";
    }
}

function populatePlanet(planet, index){
    const {name, climate, terrain, population, orbital_period} = planet;
    let pop = determinePopulationLevel(population);
    const planetDiv = `
        <div class="planet" data-planetId=${index} data-population=${pop}>
            <h1>${name}</h1>
            <p>
                ${name} has a climate that is ${climate}. The terrain is
                ${terrain}, with pop of ${population === "unknown" ? pop = population : pop = parseInt(population).toLocaleString()}. The 
                orbital period is ${orbital_period} days.
            </p>
        </div>
    `
    myDiv.insertAdjacentHTML("beforeend", planetDiv);
}

function getPlanet(){
    const randomNum = Math.floor(Math.random() * 20) + 1;
    fetch(`https://swapi.co/api/planets/${randomNum}`)
        .then(data => data.json())
        .then(planets => {
            populatePlanet(planets)
        })
        .catch(error => console.log(error.message));
}

function processPlanets(planetsArray){
    for(const [index, prop] of planetsArray.entries()){
        populatePlanet(prop, index);
    }
}

function getPlanets(){
    fetch(`https://swapi.co/api/planets`)
        .then(data => data.json())
        .then(planets => processPlanets(planets.results));
}

const allPlanetDivs = document.getElementsByClassName("planet");

function showUnpopulated(){
    for(const prop of allPlanetDivs){
        if(prop.dataset.population === "unknown"){
            prop.classList.toggle("highlight");
            setTimeout(() => {
                prop.classList.toggle("highlight")
            }, 2000)
        }
    }
}

function highlight(e){
    const { value } = e.target;
    for(const prop of allPlanetDivs){
        prop.dataset.population == value ? prop.classList.add("teal") : prop.classList.remove("teal");
    }
}

myButton.addEventListener("click", getPlanet);
mySecondButton.addEventListener("click", getPlanets);
highlighter.addEventListener("click", showUnpopulated);
selector.addEventListener("change", highlight);