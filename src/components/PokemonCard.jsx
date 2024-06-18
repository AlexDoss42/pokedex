import React, { useState } from 'react'
import data from '../charizardData.json'
console.log(data[0])
export const PokemonCard = () => {
  const [showShiny, setShowShiny] = useState(true);

  const handleShiny = () => {
    setShowShiny(!showShiny)
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1>Name</h1>
        <p>{data[0].name}</p>
        <div className='types'>
          <a href={data[0].types[0].type.url}>{data[0].types[0].type.name}</a>
          <a href={data[0].types[1].type.url}>{data[0].types[1].type.name}</a>
        </div>
        
        {showShiny ? 
        <div className='shinySprites'>
          <img src={data[0].sprites.back_shiny} alt="shiny back Charizard" />
          <img src={data[0].sprites.front_shiny} alt="shiny front Charizard" />
        </div> : 
        <div className='defaultSprites'>
          <img src={data[0].sprites.back_default} alt="Normal Back of Charizard" />
          <img src={data[0].sprites.front_default} alt="Normal Front of Charizard" />
        </div>}
        <button onClick={() => handleShiny()} style={{ backgroundColor: "#1A58CA", border: "none", borderRadius: '5px', color: "#fff", height: "30px", width: "150px", fontSize: "20px"}}>Toggle Shiny</button>
    </div>
  )
}
