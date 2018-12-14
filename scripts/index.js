


// DOM selection
const triggerElement = document.querySelector('[ data-trigger]');
const outputElement = document.querySelector('[ data-output]');


// Global pokemon cache
// let cachedPokemon = 'charmander';
// let pokemonPromise;


// function that gets a pokemon based on thier pokedex #
function getPokemon() {
    let pokemonNum = randomPokemon();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`)
        .then(convertToJson)
        .then(cachePokemon)
        .then(extractPokemonText)
        .catch(showCachedPokemon)
        .then(drawPokemon)
}
// function that creates random number for Api fucntion to fetch
function randomPokemon() {
    return Math.round(Math.random() * 802);
}


function convertToJson(r) {
    r = r.json()
    return r;
}


function cachePokemon(pokemonObj) {
    // save pokemonJson
    // 1. global variable
    // cachedPokemon = pokemonObj.name || cachedPokemon; // keep what's in cachedPokemon if pokemonObj.name is falsey
    // return pokemonObj;
    // 2. localStorage.
    // Letting JS figure out if .pokemon exists.
    // That is - do we have a string, or do we have undefined?
    if (pokemonObj.name) { //opting in to "coercion"
        console.log('Caching pokemon to localStorage');
        localStorage.setItem('pokemon', JSON.stringify(pokemonObj));
    }
    return pokemonObj;
}






function showCachedPokemon(err) {
    console.log(err);
     // drawPokemon(cachedPokemon);
    return JSON.parse(localStorage.getItem('pokemon'));
}



//  returns pokemon name and type 
function extractPokemonText(pokemonObj) {
    //debugger;
    //console.log(pokemonObj);
    // if(pokemonObj.sprites){
    //     console.log(pokemonObj.sprites)
        return [pokemonObj.name, pokemonObj.sprites.front_default, pokemonObj.types[0].type.name]};
    //return 'charmander'






// function that draws joke to DOM
function drawPokemon(pokemonInfo) {
    const newPokemon = document.createElement('li');
    newPokemon.textContent = pokemonInfo[0];
    const newSprite = document.createElement('img');
    newSprite.setAttribute('src', pokemonInfo[1]);

    // not returning, just appending
    outputElement.appendChild(newPokemon);
    newPokemon.appendChild(newSprite);
        
}


// main function that attaches button listener
function main() {
    triggerElement.addEventListener('click', getPokemon);
}
main();
