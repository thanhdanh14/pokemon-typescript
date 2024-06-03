import React from 'react'

interface Props {
    name : string,
    id : number,
    image : string
}

const PokemonList = (props : Props) => {
    const {id,name,image} = props
  return (
    <div className=''>
      <section className='pokemon-list-container'>
        <p className="pokemon-name">{name}</p>
        <img src={image} alt='pokemon'/>
      </section>
    </div>
  )
}

export default PokemonList
