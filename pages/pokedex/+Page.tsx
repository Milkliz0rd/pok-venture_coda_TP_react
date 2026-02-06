import { List } from "react-window";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";
import { usePokemonList } from "@/hooks/usePokemonList";
import { VirtualizedPokemonCard } from "@/components/PokemonVirtualList";

export default function Pokedex() {
  const { pokemons } = useData<Data>();
  const { filteredList, search, setSearch } = usePokemonList(pokemons);

  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center bg-[url(@/assets/pokedexMini.webp)]">
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

      {/* IMPORTANT : hauteur sur le parent */}
      <div className="relative h-[400px] w-3xl border-3 bg-blue-100 rounded-2xl">
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
