import React from 'react'
import data from '../charizardData.json'

export const PokemonCard = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1>Name</h1>
        <p>{data[0].name}</p>
        <img src={data[0].sprites.front_shiny} alt="shiny Charizard" />
    </div>
  )
}
