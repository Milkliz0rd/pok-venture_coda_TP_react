import { useData } from "vike-react/useData";
import { List } from "react-window";
import type { Data } from "./+data";
import { usePokemonList } from "@/hooks/usePokemonList";
import bgPokedex from "@/assets/pokedexMini.webp";
import { VirtualizedPokemonCard } from "@/components/PokemonVirtualList";

export default function Pokedex() {
  const { pokemons } = useData<Data>();
  const { filteredList, search, setSearch } = usePokemonList(pokemons);

  return (
    <main
      className="
    flex flex-col 
    items-center justify-center
    w-full min-h-full "
      style={{ backgroundImage: `url(${bgPokedex})` }}
    >
      <div>
        <img
          className="w-90 h-30 m-5"
          src="../assets/pokedexTitle.webp"
          alt="PokeVenture"
        ></img>
      </div>

      <input
        className="border-4 p-2 mb-4 bg-blue-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="relative h-100 w-3xl border-3 bg-blue-100 rounded-2xl">
        <List
          rowComponent={VirtualizedPokemonCard}
          rowCount={filteredList.length}
          rowHeight={120}
          rowProps={{ pokemons: filteredList }}
        />
      </div>
    </main>
  );
}
