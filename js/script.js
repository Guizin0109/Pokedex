const pokemonName = document.querySelector('.pokemon__name');

const pokemonNumber = document.querySelector('.pokemon__number');

const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');

const input = document.querySelector('.input__search');

const buttonprev = document.querySelector('.btn-prev');

const Tipo = document.querySelector('.tipo-id');

const buttonnext = document.querySelector('.btn-next');

let searchPokemon = 1 ;





const fetchPokemon = async (pokemon) => {
    
    const  APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` );

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
       
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    Tipo.innerHTML = data.types.map(entry => entry.type.name);
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']; 
        searchPokemon= data.id;
    input.value = '';
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found!';
    }
    
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderpokemon(input.value.toLowerCase())
});
buttonprev.addEventListener('click', () => {
   if (searchPokemon>1){
    searchPokemon -= 1;
    renderpokemon(searchPokemon);
   }
   else {

   }
    
});
buttonnext.addEventListener('click', () => {
    searchPokemon += 1;
    renderpokemon(searchPokemon);
    
});


renderpokemon(searchPokemon)
    
