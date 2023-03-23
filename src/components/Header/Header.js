import React from 'react'
import { pokemonImgUrl } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'

function Header({ searchquery, setSearchQuery, suggestedPokemons }) {

    const onQueryChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='bg-meduim-red w-full'>
            <div className='flex flex-row p-4'>
                <p className='text-2xl subpixel-antialiased text-black font-sans'>
                    Pokemons
                </p>
                <div className='mx-3'>
                    <input className='outline-none h-9 p-2 rounded-sm md:w-80 w-auto relative' type={'text'} placeholder='Enter pokemon name...' value={searchquery} onChange={onQueryChange} />
                    <div className='search-result'>
                    <div className={`md:h-80 md:w-80 h-80 w-auto ${searchquery?'block':'hidden'} overflow-scroll z-10 absolute`}>
                        {searchquery && suggestedPokemons?.map((pokemon, id) => (
                            <div className='mt-1'>
                            <Link key={id} href={`/pokemon/${pokemon}`}>
                                    <div className='flex flex-row bg-meduim-red align-middle items-center p-1 rounded-md'>
                                        <div className=''>
                                            <Image width={20} height={20} src={`${pokemonImgUrl(pokemon)}`} alt={pokemon} />
                                        </div>
                                        <span className='ml-3'>
                                            <p className='text-lg antialiased font-sans'>
                                                {pokemon}
                                            </p>
                                        </span>
                                    </div>
                                </Link>
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
