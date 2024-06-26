import React from 'react'

export const TypeTile = ({typeData}) => {
    let { type } = typeData;
  return (
    <a className="type" href={type.url}>{type.name}</a>
  )
}
