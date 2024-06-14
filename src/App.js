import './App.css';
import React from 'react';
import { PokemonCard } from './components/PokemonCard';


function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ff0000" }}>
        <p style={{ textAlign: "center", marginTop: "0px", paddingTop: "10px"}}>
          Gotta Catch Em All
        </p>
        <input />
        <button style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "90px", fontSize: "20px"}}>Search</button>
        <PokemonCard />
    </div>
  );
}

export default App;
