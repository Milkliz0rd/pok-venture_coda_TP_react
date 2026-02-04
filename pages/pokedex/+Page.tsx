import { List } from "react-window";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { usePokemonList } from "@/hooks/usePokemonList";
import { VirtualizedPokemonCard } from "@/components/PokemonVirtualList";

export default function Pokedex() {
  const { pokemons } = useData<Data>();
  const { filteredList, search, setSearch } = usePokemonList(pokemons);

  return (
    <main>
      <h1>Pokédex</h1>

      <input
        className="border p-2 mb-4 w-full bg-gray-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* IMPORTANT : hauteur sur le parent */}
      <div className="relative h-[400px] w-full border-2">
        <List
          rowComponent={VirtualizedPokemonCard}
          rowCount={filteredList.length}
          rowHeight={60}
          rowProps={{ pokemons: filteredList }}
        />
      </div>
    </main>
  );
}
