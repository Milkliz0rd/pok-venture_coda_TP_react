import { List } from "react-window";
import { VirtualizedPokemonCard, Card } from "@/components/PokemonCard";
import { generatePokemons } from "@/utils/mockPokemon";

export default function Team() {
    const pokemons = generatePokemons(1000);

    return (
        <main>
            <h1>Team</h1>
            <List
                rowComponent={VirtualizedPokemonCard}
                rowCount={pokemons.length}
                rowHeight={400}
                rowProps={{ pokemons }}
            />

        </main>
    );
}
