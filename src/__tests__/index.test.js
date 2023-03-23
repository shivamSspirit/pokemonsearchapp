 import { getStaticProps } from "@/pages";
 import api from "@/pages/api/pokemon";
// import axios from 'axios';

jest.mock('../pages/api/pokemon')
 describe('getStaticProps', () => {
     it('should fetch data from the PokeAPI', async () => {
         const mockData = {
            count: 1281,
            next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
            previous: null,
            results: [
                {
                    name: "bulbasaur",
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    name: "ivysaur",
                    url: "https://pokeapi.co/api/v2/pokemon/2/"
                },
                {
                    name: "venusaur",
                    url: "https://pokeapi.co/api/v2/pokemon/3/"
                },
                {
                    name: "charmander",
                    url: "https://pokeapi.co/api/v2/pokemon/4/"
                },
                {
                    name: "charmeleon",
                    url: "https://pokeapi.co/api/v2/pokemon/5/"
                },
                {
                    name: "charizard",
                    url: "https://pokeapi.co/api/v2/pokemon/6/"
                },
                {
                    name: "squirtle",
                    url: "https://pokeapi.co/api/v2/pokemon/7/"
                },
                {
                    name: "wartortle",
                    url: "https://pokeapi.co/api/v2/pokemon/8/"
                },
                {
                    name: "blastoise",
                    url: "https://pokeapi.co/api/v2/pokemon/9/"
                },
                {
                    name: 'caterpie',
                    url: 'https://pokeapi.co/api/v2/pokemon/10/'
                }
            ]
        };

        api.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
        const props = await getStaticProps();

        expect(props).toEqual({
            props: {
                pokemons: mockData,
            },
        });
        expect(api.get).toHaveBeenCalledWith('/pokemon', { params: { limit: 10 } });
    });
});



  
