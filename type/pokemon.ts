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

export interface Pokemon {
    id: number;
    nameFr: string;
    types: string[];
    sprite: string;
    level: number;
    currentHp: number;
    maxHp: number;
    dateOfCapture: Date;
}