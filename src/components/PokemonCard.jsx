import React, { useState } from 'react'
// import data from '../charizardData.json'


export const PokemonCard = (rawData) => {
  const [showShiny, setShowShiny] = useState(true);
  console.log(rawData.rawData)
  const handleShiny = () => {
    setShowShiny(!showShiny)
  }
  return (
    // {rawData.rawData ?
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <p>Name</p>
        <h2>{rawData.rawData.name}</h2>
        <div className='types'>
          <a href={rawData.rawData.types[0].type.url}>{rawData.rawData.types[0].type.name}</a>
          <a href={rawData.rawData.types[1].type.url}>{rawData.rawData.types[1].type.name}</a>
        </div>
        
        {showShiny ? 
        <div className='shinySprites'>
          <img src={rawData.rawData.sprites.back_shiny} alt="shiny back Charizard" />
          <img src={rawData.rawData.sprites.front_shiny} alt="shiny front Charizard" />
        </div> : 
        <div className='defaultSprites'>
          <img src={rawData.rawData.sprites.back_default} alt="Normal Back of Charizard" />
          <img src={rawData.rawData.sprites.front_default} alt="Normal Front of Charizard" />
        </div>}
        <button onClick={() => handleShiny()} style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "150px", fontSize: "20px"}}>Toggle Shiny</button>
    </div>
    //  : 
    // <></>
  // }
  )
}
