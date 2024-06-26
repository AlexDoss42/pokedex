import React, { useEffect, useState } from 'react'



export const TypeTile = ({typeData}) => {
    let { type } = typeData;
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

const [typeStyles, setTypeStyles] = useState({})

useEffect(() => {
    setTypeStyles(() => getBackgroundColor())
}, [type.name])

    

console.log(getBackgroundColor());

  return (
    <a className="type" style={typeStyles} href={type.url}>{type.name}</a>
  )
}
