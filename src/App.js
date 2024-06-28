import './App.css';
import React, { useState }  from 'react';
import { PokemonCard } from './components/PokemonCard';
// import { response } from 'express';
// import axios from 'axios';


function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeData, setPokeData] = useState("")
  const [itsPikachu, setItsPikachu] = useState(false);

  const handleSearch = (pokemonName) => {
    let pokemonNameLower = pokemonName.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameLower}`)
    .then((response) => response.json()
    .then((json) => {
      setPokeData(json);
    })).catch((error) => window.alert("Oops it looks like that isn't a pokemon"))
  }


  return (
    <div className="App" style={{ backgroundColor: "#ff0000", display: "flex", flexDirection: "column", alignContent: "center" }}>
        <p style={{ textAlign: "center", marginTop: "0px", paddingTop: "10px"}}>
          Gotta Catch Em All
        </p>
        <input placeholder="WHOSE THAT POKEMON!!!" style={{ width: "360px", margin: '10px auto' }} type='text' id="name" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
        <button onClick={() => handleSearch(pokemonName)} style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "90px", fontSize: "20px", margin: "10px auto"}}>Search</button>
        {pokeData ? <PokemonCard rawData={pokeData} /> : <></> }
        {itsPikachu ? 
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/WSGV_n6H1n0?si=FMFf0xmAbDc_JyeY" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        >
        </iframe>
        : 
        <></>
        }
    </div>
  );
}

export default App;
