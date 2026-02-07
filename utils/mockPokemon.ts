import { Pokemon, PokemonClient } from "pokenode-ts";
import { useState } from "react";

export const generatePokemons = (count: number): (Pokemon | null)[] => {
    return Array.from({ length: count }, (_, i) => {
        const [pokemon, setPokemon] = useState<Pokemon | null>(null);
        const randomInt = Math.floor(Math.random() * 201) + 1;
        (async () => {
            const api = new PokemonClient();
            await api
                .getPokemonById(i + 1)
                .then((data) => setPokemon(data))
                .catch((error) => console.error(error));
        })();
        return pokemon;
    });
};