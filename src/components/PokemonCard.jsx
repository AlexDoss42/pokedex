import React, { useState } from 'react'
// import data from '../charizardData.json'


export const PokemonCard = (rawData) => {
  const rawData2 = rawData.rawData;
  console.log(rawData2)
  const { types, sprites, name } = rawData2;
  const [showShiny, setShowShiny] = useState(true);

  const handleShiny = () => {
    setShowShiny(!showShiny)
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <p>Name</p>
        <h2>{name}</h2>
        <div className='types'>
          <a href={types[0].type.url}>{types[0].type.name}</a>
          <a href={types[1].type.url}>{types[1].type.name}</a>
        </div>
        
        {showShiny ? 
        <div className='shinySprites'>
          <img src={sprites.back_shiny} alt="shiny back Charizard" />
          <img src={sprites.front_shiny} alt="shiny front Charizard" />
        </div> : 
        <div className='defaultSprites'>
          <img src={sprites.back_default} alt="Normal Back of Charizard" />
          <img src={sprites.front_default} alt="Normal Front of Charizard" />
        </div>}
        <button onClick={() => handleShiny()} style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "150px", fontSize: "20px"}}>Toggle Shiny</button>
    </div>
  )
}
