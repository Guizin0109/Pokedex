const pokemonName = document.querySelector('.pokemon__name');

const pokemonNumber = document.querySelector('.pokemon__number');

const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');

const input = document.querySelector('.input__search');




const fetchPokemon = async (pokemon) => {
    
    const  APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}` );

    if(APIResponse.status == 200) {
    const Data = await APIResponse.json();
    return Data;
    }
}

const renderpokemon = async (pokemon) => {

        pokemonName.innerHTML = 'Loading...';
        pokemonNumber.innerHTML = '';
            const data = await fetchPokemon(pokemon);
    if(data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']; 

    input.value = '';
    } else {
        pokemonName.innerHTML = 'Not Found!';
    }
    
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderpokemon(input.value)
});

renderpokemon('1')
    
