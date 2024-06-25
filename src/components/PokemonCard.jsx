import React, { useState } from 'react'
import "./PokemonCard.css";
// import data from '../charizardData.json'


export const PokemonCard = (rawData) => {
  const rawData2 = rawData.rawData;
  const { types, sprites, name } = rawData2;
  const [showShiny, setShowShiny] = useState(true);

  const handleShiny = () => {
    setShowShiny(!showShiny)
  }
  return (
    <div className="pokemonContainer">
        <h2>Name: {name}</h2>
        <div className='types'>
          <a className="type" href={types[0].type.url}>{types[0].type.name}</a>
          {types[1] ? 
          <a className="type" href={types[1].type.url}>{types[1].type.name}</a>
          :
          <></>
          }
        </div>
        
        {showShiny ? 
          <div className='defaultSprites'>
            <img src={sprites.back_default} alt="Normal Back view" />
            <img src={sprites.front_default} alt="Normal Front view" />
          </div>
         : 
        <div className='shinySprites'>
          <img src={sprites.back_shiny} alt="shiny back view" />
          <img src={sprites.front_shiny} alt="shiny front view" />
        </div>}
        <button className="toggleBtn" onClick={() => handleShiny()}>Toggle Shiny</button>
    </div>
  )
}
