import { getServerSideProps } from "@/pages/pokemon/[name]";
import api from "@/pages/api/pokemon";

jest.mock('../pages/api/pokemon')

describe('getServerSideProps', () => {
  it('should return singlepokemon props', async () => {
    const context = { query: { name: 'pikachu' } }
    const responseData = {
      name: 'pikachu',
      order: 35,
      weight: 60,
      height: 4,
       types: [
        {
          slot: 1, type: {
            name: "electric",
            url: "https://pokeapi.co/api/v2/type/13/"
          }
        }
      ]
    }
    const response = { data: responseData }
    api?.get.mockResolvedValue(response)
    const { props } = await getServerSideProps(context)
    expect(props.singlepokemon).toEqual(responseData)
  })
})


