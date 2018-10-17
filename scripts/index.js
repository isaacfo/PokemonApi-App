// // DOM selection
// const triggerElement = document.querySelector('[ data-trigger]');
// const outputElement = document.querySelector('[ data-output]');

// // function that gets a chuck norris joke
// function getTypes() {
//     fetch('https://swapi.co/api/people/1/')
//         .then(convertToJson)
//         .then(extractTypesText)
//         .then(drawTypes)
// }

// function convertToJson(r) {
//     r = r.json()
//     return r;
// }

// function extractTypesText(nameObj) {
//     return [nameObj.name, nameObj.eye_color];
// }

// // function that draws joke to DOM
// function drawTypes(TypeText) {
//     const newType = document.createElement('li');
//     newType.textContent = TypeText;

//     // not returning, just appending
//     outputElement.appendChild(newType);
// }


// // main function that attaches button listener
// function main() {
//     triggerElement.addEventListener('click', getTypes);
// }
// main();


// DOM selection
const triggerElement = document.querySelector('[ data-trigger]');
const outputElement = document.querySelector('[ data-output]');

// function that gets a chuck norris joke
function getPokemon() {
    let pokemonNum = randomPokemon();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`)
        .then(convertToJson)
        .then(extractPokemonText)
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
//  returns pokemon name and type 
function extractPokemonText(nameObj) {
    return [nameObj.name, nameObj.types[0].type.name];
}

// function that draws joke to DOM
function drawPokemon(pokemonText) {
    const newPokemon = document.createElement('li');
    newPokemon.textContent = pokemonText;

    // not returning, just appending
    outputElement.appendChild(newPokemon);
        
}


// main function that attaches button listener
function main() {
    triggerElement.addEventListener('click', getPokemon);
}
main();
