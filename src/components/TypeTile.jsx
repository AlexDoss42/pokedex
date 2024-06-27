import React, { useEffect, useState } from 'react'
import "./TypeTile.css"


export const TypeTile = ({typeData}) => {
    let { type } = typeData;
    const [typeStyles, setTypeStyles] = useState({})
    
    const getBackgroundColor = () =>{
        switch (type.name) {
          case 'normal':
            return {backgroundColor: '#AAAA99'}
          case 'fire':
            return {backgroundColor: '#EE4523'}
          case 'water':
            return {backgroundColor: '#4F99FF'}
          case 'grass':
           return { backgroundColor: '#77CC54'}
          case 'electric':
            return {backgroundColor: '#F5CC34'}
          case 'fighting':
            return {backgroundColor: '#B95443'}
          case 'ice':
            return {backgroundColor: '#66CBFF'}
          case 'poison':
           return { backgroundColor: '#AA5599'}
          case 'ground':
            return {backgroundColor: '#DDBB54'}
          case 'flying':
            return {backgroundColor: '#8899FF'}
          case 'pyschic':
            return {backgroundColor: '#F05599'}
          case 'bug':
            return {backgroundColor: '#AABB23'}
          case 'rock':
           return { backgroundColor: '#BBAA66'}
          case 'ghost':
            return {backgroundColor: '#6666BB'}
          case 'dragon':
            return {backgroundColor: '#7766EE'}
          case 'dark':
            return {backgroundColor: '#775544'}
          case 'steel':
           return { backgroundColor: '#AAAABB'}
          case 'fairy':
            return {backgroundColor: '#EE98EE'}
        default: 
            return {backgroundColor: 'grey'}
        
      }
}

useEffect(() => {
    setTypeStyles(() => getBackgroundColor())
}, [type.name])

  return (
    <a className="type" style={typeStyles} href={type.url}>{type.name}</a>
  )
}
