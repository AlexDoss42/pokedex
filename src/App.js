import './App.css';
import React, { useState }  from 'react';
import { PokemonCard } from './components/PokemonCard';


function App() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <div className="App" style={{ backgroundColor: "#ff0000", display: "flex", flexDirection: "column", alignContent: "center" }}>
        <p style={{ textAlign: "center", marginTop: "0px", paddingTop: "10px"}}>
          Gotta Catch Em All
        </p>
        <input style={{ width: "360px", margin: '10px auto' }} type='text' id="name" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
        <button style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "90px", fontSize: "20px", margin: "10px auto"}}>Search</button>
        <PokemonCard />
    </div>
  );
}

export default App;
