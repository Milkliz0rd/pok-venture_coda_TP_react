import { Pokemon, PokemonClient } from "pokenode-ts";

export const generatePokemons = (count: number): Pokemon[] => {
    const equipeIds = Array.from({ length: count }, (_, i) => {
        const optionsCount = Math.floor(Math.random() * 5) + 1;

        return i + 1;
    });

    const pokemons: Pokemon[] = []
    equipeIds.forEach((id) => {
        (async () => {
            const api = new PokemonClient();
            await api
                .getPokemonById(id)
                .then((data) => pokemons.push(data))
                .catch((error) => console.error(error));
        })();
    });
    return pokemons;
};