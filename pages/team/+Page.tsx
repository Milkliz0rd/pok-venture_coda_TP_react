import { List } from "react-window";
import { VirtualizedPokemonCard } from "@/components/PokemonCard";
import { generatePokemons } from "@/utils/mockPokemon";

export default function Team() {
    const pokemons = generatePokemons(50);

    console.log(pokemons);

    return (
        <main>
            <h1>Team</h1>

            <div className="bg-blue-200 h-52">
                <List
                    rowComponent={VirtualizedPokemonCard}
                    rowCount={pokemons.length}
                    rowHeight={24}
                    rowProps={{ pokemons }}
                />
            </div>
        </main>
    );
}
