import { Pokemon } from "@/types/pokemon";

export interface User {
    id: number;
    username: string;
    email: string;
    dresseur: Dresseur;
}

export interface Dresseur {
    name: string;
    equipe: Pokemon[];
    stockagePokemon: number[];
    pokedex: number[];
    pokeballs: number;
    pokeDollars: number;
}