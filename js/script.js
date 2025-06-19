const fetchPokemon = async (pokemon) => {

    const  APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` );
    const Data = await APIResponse.json();
    console.log(APIResponse)
}
fetchPokemon(25)