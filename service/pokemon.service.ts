// pages/pokedex/+data.ts
import type { NamedAPIResource, PokemonSpeciesDetails } from "@/type/pokemon";

export const pokemonService = {

    async getPokemons(): Promise<PokemonSpeciesDetails[]> {
        const res = await fetch("https://pokeapi.co/api/v2/generation/3");
        if (!res.ok) throw new Error("Failed to fetch generation data");
        const gen = await res.json();

        const speciesList: NamedAPIResource[] = gen.pokemon_species;

        const pokemons: PokemonSpeciesDetails[] = await Promise.all(
            speciesList.map(async (pkmn) => {
                const r = await fetch(pkmn.url);
                if (!r.ok) throw new Error(`Failed species: ${pkmn.name}`);
                return (await r.json()) as PokemonSpeciesDetails;
            }),
        );
        
        return pokemons;
    },
};