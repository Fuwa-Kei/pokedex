import './App.css';
import {useState} from 'react'
import Axios from 'axios'

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [chosen, setChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    pokedex: "",
    img: "",
    hp: "",
    type: "",
    defense: "",
    attack: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: response.data.name,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          id: response.data.id,
          type: response.data.types[0].type.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
        });
        setChosen(true);
      });
    }

  return (
    <div className="App">
      <div className="title">
        <h1>Pokedex</h1>
        <input type="text" 
          onChange={(e) => {setPokemonName(e.target.value)}} 
        />
        <button onClick={searchPokemon}>Search</button>
      </div>
      <div className="pokemonInfo">
        {!chosen ? (<h2>please choose a pokemon</h2>)
         : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} />
            <p>Pokedex no. {pokemon.id}</p>
            <p>Species: {pokemon.species}</p>
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
         </>
         )}
      </div>
    </div>
  );
}

export default App;
