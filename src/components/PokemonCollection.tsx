import React from 'react'
import { Pokemon } from '../interface'
import PokemonList from './PokemonList'
import './pokemon.css'
interface Props {
    pokemons : Pokemon[]
}

const PokemonCollection = (props : Props) => {
    const {pokemons} = props
   const handleClick = (id : number) => {
       console.log(id)
   }

  return (
    <div>
       <section className="collection-container">
       {pokemons.map((poke) =>{
        return(
            <div onClick={() => handleClick(poke.id)}>
            <PokemonList 
              key={poke.id}
              name={poke.name}
              id={poke.id}
              image={poke.sprites.front_default}
            />
            </div>
        )
       })}
       </section>
    </div>
  )
}

export default PokemonCollection
