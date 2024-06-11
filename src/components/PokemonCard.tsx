import React from 'react'
import data from './charizardData.json'

export const PokemonCard = () => {
  return (
    <div>
        <h1>Name</h1>
        <img alt="charizard sprite">The pokemon sprite</img>
        <p>{data}</p>
    </div>
  )
}
