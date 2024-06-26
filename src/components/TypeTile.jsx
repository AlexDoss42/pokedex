import React, { useEffect, useState } from 'react'



export const TypeTile = ({typeData}) => {
    let { type } = typeData;
    const [typeStyles, setTypeStyles] = useState({})
    
    const getBackgroundColor = () =>{
        switch (type.name) {
          case 'fire':
            return {backgroundColor: 'red'}
          case 'water':
            return {backgroundColor: 'blue'}
            
          case 'grass':
           return { backgroundColor: 'green'}
           
          case 'electric':
            return {backgroundColor: 'yellow'}
            
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
