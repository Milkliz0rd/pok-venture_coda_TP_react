import { List } from "react-window";
import { VirtualizedPokemonCard, Card, PokemonCard } from "../components/PokemonCard";
import { generatePokemons } from "../utils/mockPokemon";

export function Equipe() {
  const pokemons = generatePokemons(5);

  
  return (
    <main>
      <h1>Team</h1>
      <div>
        {pokemons.map((pokemon) =>
          <Card key={pokemon?.id} pokemon={pokemon} />
        )}

      </div>
    </main>
  );

}