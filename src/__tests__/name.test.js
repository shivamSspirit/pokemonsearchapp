import { getServerSideProps } from "@/pages/pokemon/[name]";
import api from "@/pages/api/pokemon";

jest.mock('../pages/api/pokemon')

describe('getServerSideProps', () => {
  it('should return singlepokemon props', async () => {
    const context = { query: { name: 'pikachu' } }
    const responseData = { name: 'pikachu', type: 'electric' }
    const response = { data: responseData }
    api?.get.mockResolvedValue(response)
    const { props } = await getServerSideProps(context)
    expect(props.singlepokemon).toEqual(responseData)
  })
})
