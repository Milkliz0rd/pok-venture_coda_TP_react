// pages/pokedex/+data.ts
import { pokemonService } from "@/service/pokemon.service";
import type { NamedAPIResource, PokemonSpeciesDetails } from "@/type/pokemon";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data() {
  const pokemons = await pokemonService.getPokemons();

  return { pokemons };
}
