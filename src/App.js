import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import Pokemon from './Pokemon'
import header from './pokemon.png'

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
    speed: "",
    special: "",
    ability1:"",
    ability2:""
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: response.data.name,
          species: response.data.species.name,
          ability1: response.data.abilities[0].ability.name,
          ability2: response.data.abilities[1].ability.name,
          img: response.data.sprites.front_default,
          id: response.data.id,
          type: response.data.types[0].type.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          special: response.data.stats[3].base_stat,
          speed: response.data.stats[5].base_stat,
        });
        setChosen(true);
        console.log(response)
      });
    }

  return (
    <div className="App">
      <div className="title">
        <img src={header} alt="pokemon game logo" />
        <input type="text" 
          onChange={(e) => {setPokemonName(e.target.value)}} 
        />
        <button onClick={searchPokemon}>Get Pokemon Stats</button>
      </div>
         <div className="pokemon">
         {!chosen ? (<hr />)
         : (
            <Pokemon 
            img={pokemon.img}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            special={pokemon.special}
            type={pokemon.type}
            ability1={pokemon.ability1}
            ability2={pokemon.ability2}
            hp={pokemon.hp}
            name={pokemon.name}
             />)}
         </div>
      </div>
    
  );
}

export default App;
