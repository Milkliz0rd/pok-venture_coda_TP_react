import { List } from "react-window";
import { VirtualizedPokemonCard } from "../components/PokemonCard";
import { generatePokemons } from "../utils/mockPokemon";

export function Equipe() {
  const pokemons = generatePokemons(50);

  console.log(pokemons);

  return (
    <main>
      <h1>Team</h1>

      <div className="bg-blue-100 h-520">
        <List
          rowComponent={VirtualizedPokemonCard}
          rowCount={pokemons.length}
          rowHeight={245}
          rowProps={{ pokemons }}
        />
      </div>
    </main>
  );

}