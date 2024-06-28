import React, { useState } from 'react'
import "./PokemonCard.css";
import { TypeTile } from './TypeTile';
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
        <h2 className="name-header">Name: {name}</h2>
        <div className='types'>
          <TypeTile typeData={types[0]}/>
          {types[1] ? 
            <TypeTile typeData={types[1]}/>
          :
          <></>
          }
        </div>
        
        {showShiny ? 
          <div className='defaultSprites'>
            <img className='sprite' src={sprites.back_default} alt="Normal Back view" />
            <img className='sprite' src={sprites.front_default} alt="Normal Front view" />
          </div>
         : 
        <div className='shinySprites'>
          <img className='sprite' src={sprites.back_shiny} alt="shiny back view" />
          <img className='sprite' src={sprites.front_shiny} alt="shiny front view" />
        </div>}
        <button className="toggleBtn" onClick={() => handleShiny()}>Toggle Shiny</button>
    </div>
  )
}
