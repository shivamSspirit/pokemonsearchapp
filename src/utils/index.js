import { Pokemons_species } from "@/pokemondata/pokemondata";

// poke image url

const POKEMON_IMAGES_URL = 'https://img.pokemondb.net/artwork/large';

// generate pokeimage url

export const pokemonImgUrl = (name) => `${POKEMON_IMAGES_URL}/${name}.jpg`;

// find pokesuggestion

export const findPokemonWithQuery = (query) => {
  return new Promise((resolve) => {
    const matchingPokemons = Pokemons_species.filter(({ name }) =>
      name.includes(query.toLowerCase())
    ).map(({ name }) => name);
    setTimeout(() => {
      resolve(matchingPokemons);
    }, 200);
  });
};

