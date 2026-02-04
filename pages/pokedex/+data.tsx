import type { NamedAPIResource, PokemonSpeciesDetails } from "@/type/pokemon";

export type PokemonWithSprite = PokemonSpeciesDetails & {
  sprite: string | null;
};

export type Data = Awaited<ReturnType<typeof data>>;

function getIdFromUrl(url: string) {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1]; // ex: "252"
}

export async function data() {
  const res = await fetch("https://pokeapi.co/api/v2/generation/3");
  if (!res.ok) throw new Error("Failed to fetch generation data");
  const gen = await res.json();

  const speciesList: NamedAPIResource[] = gen.pokemon_species;

  const pokemons: PokemonWithSprite[] = await Promise.all(
    speciesList.map(async (pkmn) => {
      // 1) species details (names FR etc.)
      const speciesRes = await fetch(pkmn.url);
      if (!speciesRes.ok) throw new Error(`Failed species: ${pkmn.name}`);
      const species = (await speciesRes.json()) as PokemonSpeciesDetails;

      // 2) pokemon details (sprites)
      const id = getIdFromUrl(pkmn.url);
      const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!pokemonRes.ok) throw new Error(`Failed pokemon: ${pkmn.name}`);
      const pokemonData = await pokemonRes.json();

      return {
        ...species,
        sprite: pokemonData?.sprites?.front_default ?? null, // ✅ sprite (singulier)
      };
    }),
  );

  return { pokemons };
}
