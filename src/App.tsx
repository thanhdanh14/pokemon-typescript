import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import { Pokemon } from './interface';
import PokemonCollection from './components/PokemonCollection';

interface Pokemons {
  name : string,
  url : string,
}

const App: React.FC = () => {

  const [pokemons ,setPokemons] = useState<Pokemon[]>([])
  const [nextLoad, setNextLoad] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const getPokemon = async() => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
      setNextLoad(res.data.next)
      res.data.results.forEach(async(pokemon : Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons((p) => [...p,poke.data])
      })
    }
    setLoading(false)
    getPokemon()
  }, []) 
   
   const nextPage = async () => {
    setLoading(true)
    const res = await axios.get(nextLoad)
    setNextLoad(res.data.next)
    res.data.results.forEach(async(pokemon : Pokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      setPokemons((p) => [...p,poke.data])
    })
    setLoading(false)
   }
  return (
    <div className="App">
     <div className="contaier">
      <header className="pokemon-header">POKEMON</header>
      <PokemonCollection pokemons={pokemons} />
       <div className='btn'>
       <button onClick={nextPage}>{!loading ? 'Load more' : 'Loading...'}</button>
       </div>
     </div>
    </div>
  );
}

export default App;
