import * as utilsFunctions from '../utils'

describe('findPokemonWithQuery', () => {
    test('returns matching pokemons for valid query', async () => {
      const query = 'pika';
      const expected = ['pikachu',"pikachu-gmax"];
      const result = await utilsFunctions.findPokemonWithQuery(query);
      expect(result).toEqual(expected);
    });
  
    test('returns empty array for non-matching query', async () => {
      const query = 'xyz';
      const expected = [];
      const result = await utilsFunctions.findPokemonWithQuery(query);
      expect(result).toEqual(expected);
    });
  });


  describe('pokemonImgUrl', () => {
    it('returns the correct URL', () => {
      const expectedUrl = 'https://img.pokemondb.net/artwork/large/pikachu.jpg';
      const name = 'pikachu';
      const actualUrl = utilsFunctions.pokemonImgUrl(name);
      expect(actualUrl).toBe(expectedUrl);
    });
  });


  