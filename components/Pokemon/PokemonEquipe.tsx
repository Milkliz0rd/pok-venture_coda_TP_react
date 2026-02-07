import { List } from "react-window";
import { VirtualizedPokemonCard } from "./PokemonCard";
import { generatePokemons } from "../utils/mockPokemon";

export function Equipe() {
  const pokemons = generatePokemons(1000);

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