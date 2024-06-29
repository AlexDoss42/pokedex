import './App.css';
import React, { useState }  from 'react';
import { PokemonCard } from './components/PokemonCard';
import { ItsPikachu } from './components/ItsPikachu';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeData, setPokeData] = useState('')
  const [itsPikachu, setItsPikachu] = useState(false);

  const handleSearch = (pokemonName) => {
    setPokeData('')
    let pokemonNameLower = pokemonName.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameLower}`)
    .then((response) => response.json()
    .then((json) => {
      setPokeData(json);
    })).catch(() => {
      window.alert("Oops it looks like that isn't a pokemon")
      setItsPikachu(true);
    })
    setPokemonName("");
  }


  return (
    <div className="App">
        <p id="slogan">
          Gotta Catch Em All
        </p>
        <input 
          id="name" 
          placeholder="WHOSE THAT POKEMON!!!" 
          style={{  }} 
          type='text'  
          value={pokemonName} 
          onChange={e => setPokemonName(e.target.value)} 
        />
        <button 
          id="search-btn" 
          onClick={() => handleSearch(pokemonName)}
        >
          Search
        </button>
        {pokeData ? <PokemonCard rawData={pokeData} /> : <></> }
        {itsPikachu ? 
          <ItsPikachu />
        : 
        <></>
        }
    </div>
  );
}

export default App;
