// pages/pokedex/index.page.tsx (exemple)
import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { usePokemonList } from "@/hooks/usePokemonList";

export default function PokemonsPage() {
  const { pokemons } = useData<Data>();
  const { filteredList, search, setSearch } = usePokemonList(pokemons);

  return (
    <main>
      <h1>Pokédex</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un Pokémon..."
      />

      {filteredList.map((pokemon) => {
        const frName =
          pokemon.names.find((n) => n.language.name === "fr")?.name ??
          pokemon.name;

        return (
          <div key={pokemon.name}>
            <h2>{frName}</h2>
          </div>
        );
      })}
    </main>
  );
}
