import { pokemonService } from "@/service/pokemon.service";
export type Data = Awaited<ReturnType<typeof data>>;
export type { PokemonWithSprite } from "@/service/pokemon.service";

export async function data() {
  const gen = await pokemonService.getGeneration(3);
  const pokemons = await pokemonService.getPokemonsWithSprites(
    gen.pokemon_species,
  );

  return { pokemons };
}
