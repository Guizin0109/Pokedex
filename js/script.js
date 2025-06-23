const pokemonName = document.querySelector('.pokemon__name');

const pokemonNumber = document.querySelector('.pokemon__number');


const fetchPokemon = async (pokemon) => {

    const  APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` );
    const Data = await APIResponse.json();
    
    return Data;
}

const renderpokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    console.log(data)
    
    
}
    renderpokemon('3')
