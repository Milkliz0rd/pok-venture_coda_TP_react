import type { NamedAPIResource, PokemonSpeciesDetails } from "@/type/pokemon";

export type PokemonWithSprite = PokemonSpeciesDetails & {
  sprite: string | null;
  id: string;
};

const API_BASE = "https://pokeapi.co/api/v2";

function getIdFromUrl(url: string) {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

export const pokemonService = {
  async getGeneration(genNumber: number) {
    const res = await fetch(`${API_BASE}/generation/${genNumber}`);
    if (!res.ok) throw new Error("Failed to fetch generation data");
    return await res.json();
  },

  async getPokemonSpecies(url: string) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch species");
    return (await res.json()) as PokemonSpeciesDetails;
  },

  async getPokemonSprite(id: string) {
    const res = await fetch(`${API_BASE}/pokemon/${id}`);
    if (!res.ok) throw new Error("Failed to fetch pokemon");
    const data = await res.json();
    return data?.sprites?.front_default ?? null;
  },

  async getPokemonsWithSprites(
    speciesList: NamedAPIResource[],
  ): Promise<PokemonWithSprite[]> {
    return await Promise.all(
      speciesList.map(async (pkmn) => {
        const species = await this.getPokemonSpecies(pkmn.url);
        const id = getIdFromUrl(pkmn.url);
        const sprite = await this.getPokemonSprite(id);

        return {
          ...species,
          sprite,
          id,
        };
      }),
    );
  },
};
