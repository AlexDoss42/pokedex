import React, { useState } from 'react'
// import data from '../charizardData.json'


export const PokemonCard = (pokeData) => {
  const [showShiny, setShowShiny] = useState(true);
  console.log(pokeData[0])
  const handleShiny = () => {
    setShowShiny(!showShiny)
  }
  return (
    // {pokeData ?
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <p>Name</p>
        <h2>{pokeData[0].name}</h2>
        <div className='types'>
          <a href={pokeData[0].types[0].type.url}>{pokeData[0].types[0].type.name}</a>
          <a href={pokeData[0].types[1].type.url}>{pokeData[0].types[1].type.name}</a>
        </div>
        
        {showShiny ? 
        <div className='shinySprites'>
          <img src={pokeData[0].sprites.back_shiny} alt="shiny back Charizard" />
          <img src={pokeData[0].sprites.front_shiny} alt="shiny front Charizard" />
        </div> : 
        <div className='defaultSprites'>
          <img src={pokeData[0].sprites.back_default} alt="Normal Back of Charizard" />
          <img src={pokeData[0].sprites.front_default} alt="Normal Front of Charizard" />
        </div>}
        <button onClick={() => handleShiny()} style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "150px", fontSize: "20px"}}>Toggle Shiny</button>
    </div>
    //  : 
    // <></>
  // }
  )
}
