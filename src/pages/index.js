import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import PokemonDetails from '@/components/pokemon/PokemonDetails'
import api from './api/pokemon'
import { findPokemonWithQuery } from '@/utils'

const HomePage = ({ pokemons }) => {
  const [searchquery, setSearchQuery] = useState('')
  const [pokemon, setPokemons] = useState(pokemons)
  const [offset, setOffset] = useState(0)
  const [suggestedPokemons, setSuggestedPokemons] = useState([])

  useEffect(() => {
    const suggesteddata = findPokemonWithQuery(searchquery)
    suggesteddata.then((data) => {
      setSuggestedPokemons(data)
    })
  }, [searchquery])


  const fetchmorepokemon = async (url, next) => {
    const response = await api.get(url)
    const nextpokes = await response.data
    setOffset(next ? offset + 10 : offset - 10);
    setPokemons(nextpokes)
  }

  return (
    <>
      <div>
        <Header suggestedPokemons={suggestedPokemons} searchquery={searchquery} setSearchQuery={setSearchQuery} />
      </div>

      <div className='flex flex-col gap-1 mt-2 p-3'>
        {(pokemon?.results)?.map((pokemon, id) => (
          <PokemonDetails key={id} pokemon={pokemon} />
        ))}
      </div>

      <div className='flex flex-row justify-center mt-3 gap-5'>
        <button disabled={!pokemon?.previous} onClick={() => fetchmorepokemon(pokemon.previous, false)} className={`p-3 rounded-md bg-meduim-red ${!pokemon?.previous && 'bg-red'}`}>Prev</button>
        <button disabled={!pokemon?.next} onClick={() => fetchmorepokemon(pokemon.next, true)} className={`p-3 rounded-md bg-meduim-red ${!pokemon?.next && 'bg-red'}`}>Next</button>
      </div>
    </>
  )
}

export default HomePage

export async function getStaticProps(context) {
  const response = await api.get(`/pokemon`, { params: { limit: 10 } })
  const pokemons = await response.data;

  return {
    props: {
      pokemons
    }
  }
}

