import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { pokemonImgUrl } from '@/utils';
import api from '../api/pokemon';

function SinglePokemon({ singlepokemon }) {
    const [currentpokemon, setCurrentPokemon] = useState(singlepokemon)

    useEffect(() => {
        setCurrentPokemon(currentpokemon)
    }, [singlepokemon])

    return (
        <>
            <div className='w-screen  md:h-screen h-full bg-light-red mt-0 flex flex-col'>
                <div className='ml-8 pt-3'>
                    <span className='flex items-center'>
                        <Link href={'/'}><Image width={20} height={20} className='icon' src={'/back.png'} alt={'left-arrow'} /></Link>
                        <p className='ml-2 text-xl'>pokedex</p>
                    </span>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 justify-center mt-2 flex-1'>

                    <div className='flex flex-shrink-0 w-full lg:w-1/2'>
                        <div className='w-full flex flex-col items-center'>
                            <div className='flex flex-col w-full pl-9'>
                                <div className=''>
                                    <span className='text-2xl font-semibold'>{currentpokemon?.name}</span>
                                </div>
                                <span className='px-4 py-1 bg-meduim-red rounded-3xl w-20 text-center mt-2'>
                                    {currentpokemon?.types[0]?.type?.name}
                                </span>
                            </div>
                            <div className='mt-3'>
                                <Image style={{width:500, height:500}} className='rounded-md' width={500} height={500} src={`${pokemonImgUrl(currentpokemon?.name)}`} alt={currentpokemon.name} />
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 p-5 md:p-0'>

                        <span className='text-base font-semibold'>
                            About <span className='ml-2 text-xl text-meduim-red font-semibold'>{currentpokemon?.name}</span>
                        </span>

                        <div className='mt-2 md:flex-col md:justify-between flex flex-col gap-2 md:gap-3 sm:justify-center sm:w-full'>
                            <span className='text-base font-semibold'>
                                Abilities
                            </span>
                            <span className='flex flex-row gap-2 md:gap-2'>
                                {currentpokemon?.abilities?.map((ability, idx) => (
                                    <span key={idx} className='md:px-4 py-1 bg-meduim-red rounded-3xl w-auto text-center px-3'>
                                        {ability?.ability?.name}
                                    </span>
                                ))}
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span className='text-base font-semibold'>
                                Types
                            </span>
                            <span className='flex flex-row gap-2 mt-2'>
                                {currentpokemon?.types?.map((type, idx) => (
                                    <span key={idx} className='px-4 py-1 bg-meduim-red rounded-3xl sm:w-24 text-center'>{type?.type?.name}</span>
                                ))}
                            </span>
                        </div>

                        <div className='mt-3'>
                            <span className='text-base font-semibold'>
                                Species
                            </span>
                            <span className='flex flex-row gap-2 mt-2'>
                                <span className='px-4 py-1 bg-meduim-red rounded-3xl sm:w-auto text-center'>{currentpokemon?.species?.name}</span>
                            </span>
                        </div>

                        {currentpokemon?.base_experience && (
                            <div className='mt-3'>
                                <span className='text-base font-semibold'>
                                    Base experience
                                </span>
                                <span className='flex flex-row gap-2 mt-2'>
                                    <span className='px-4 py-1 bg-meduim-red rounded-3xl sm:w-24 text-center'>{currentpokemon?.base_experience}</span>
                                </span>
                            </div>
                        )}



                        <div className='flex flex-row flex-wrap w-full gap-2 mt-5'>
                            <span className='w-1/2 sm:w-20 h-20 bg-meduim-red rounded-md flex flex-col justify-center items-center'>
                                <span className='font-sans font-semibold'>
                                    Height
                                </span>
                                <span className='text-base'>{currentpokemon?.height}m</span>
                            </span>
                            <span className='w-1/2 sm:w-20 h-20 bg-meduim-red rounded-md flex flex-col justify-center items-center'>
                                <span className='font-sans font-semibold'>
                                    Weight
                                </span>
                                <span className='text-base'>{currentpokemon?.weight}lbs</span>
                            </span>
                        </div>

                        <div className='mt-5'>
                            <span className='text-base font-semibold'>Stats</span>
                            {currentpokemon?.stats?.map((stat, idx) => (
                                <div key={idx} className='flex flex-row gap-4 items-center justify-between'>
                                    <span className='text-light-gray capitalize'>
                                        {stat?.stat?.name}
                                    </span>

                                    <div className='w-2/3 flex flex-row gap-2 align-middle items-center justify-center mr-6'>
                                        <span className='font-semibold mr-4'>
                                            {stat?.base_stat}
                                        </span>
                                        <div className='h-1 bg-light-gray rounded w-1/2'>
                                            <div style={{ width: `${stat?.base_stat>100?100:stat?.base_stat}%` }} className={`float-left ${stat?.base_stat > 50 ? 'bg-green' : 'bg-red'}  rounded h-full`}>
                                            </div>
                                            <div className='w-full h-full'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePokemon

export async function getServerSideProps(context) {
    const response = await api.get(`/pokemon/${context.query.name}`);
    const singlepokemon = await response.data
    return {
        props: {
            singlepokemon
        }
    }
}
