import React from 'react'
import data from '../charizardData.json'

export const PokemonCard = () => {
  return (
    <div>
        <h1>Name</h1>
        <p>{data[0].forms[0].name}</p>
    </div>
  )
}
