// types/pokemon.ts
export type NamedAPIResource = {
  name: string;
  url: string;
};

export type PokemonSpeciesDetails = {
  name: string;
  names: Array<{
    name: string;
    language: { name: string };
  }>;
};
