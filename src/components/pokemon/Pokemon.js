import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { pokemonImgUrl } from '@/utils';


function Pokemon({ pokemon }) {
    return (
        <>
            <Link href={`/pokemon/${pokemon.name}`}>
                <div className='flex flex-row bg-light-red align-middle items-center p-3 rounded-md'>
                    <div className=''>
                        <Image width={50} height={50} src={`${pokemonImgUrl(pokemon.name)}`} alt={pokemon.name} />
                    </div>
                    <span className='ml-3'>
                        <p className='text-xl text-meduim-red font-semibold'>
                            {pokemon.name}
                        </p>
                    </span>
                </div>
            </Link>
        </>
    )
}

export default Pokemon
