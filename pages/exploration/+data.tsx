import type { PageContextServer } from 'vike/types'

export type LocationArea = {
  pokemon_encounters: {
    pokemon: {
      name: string
      url: string
    }
  }[]
}

function pickRandom<T>(arr: T[], count: number): T[] {
  return [...arr]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}


function getPokemonIdFromUrl(url: string): number {
  return Number(url.split('/').at(-2))
}


export type Pokemon = {
  id: number
  name: string
  sprites: {
    front_default: string | null
  }
}

export type Data = {
  pokemons: Pokemon[]
}

export async function data(
  pageContext: PageContextServer
): Promise<Data> {
  const areaId = pageContext.urlParsed.search.id
  if (!areaId) return { pokemons: [] }

  //Fetch location area
  const areaRes = await fetch(
    `https://pokeapi.co/api/v2/location-area/${areaId}`
  )

  if (!areaRes.ok) {
    throw new Error('Failed to fetch location area')
  }

  const area: LocationArea = await areaRes.json()

  //Extract all Pokémon IDs
  const pokemonIds = area.pokemon_encounters
    .map((e) => getPokemonIdFromUrl(e.pokemon.url))
    .filter((id): id is number => !Number.isNaN(id))

  //Pick random Pokémon
  const selectedIds = pickRandom(pokemonIds, 3)

  //Fetch Pokémon data in parallel
  const pokemons = await Promise.all(
    selectedIds.map(async (id) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )
      if (!res.ok) {
        throw new Error(`Failed to fetch pokemon ${id}`)
      }
      return res.json() as Promise<Pokemon>
    })
  )

  return { pokemons }
}
