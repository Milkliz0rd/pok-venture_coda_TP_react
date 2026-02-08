import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

type PokemonBase = {
  name: string;
  names: Array<{ name: string; language: { name: string } }>;
  id: string;
};

export function usePokemonList<T extends PokemonBase>(pokemons: T[]) {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 300);

  const filteredList = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    let result = pokemons;
    if (q) {
      result = pokemons.filter((p) => {
        const fr = p.names.find((n) => n.language.name === "fr")?.name ?? "";
        return p.name.toLowerCase().includes(q) || fr.toLowerCase().includes(q);
      });
    }

    return result.sort((a, b) => {
      const idA = Number(a.id);
      const idB = Number(b.id);
      return idA - idB;
    });
  }, [pokemons, debounced]);

  return { search, setSearch, filteredList };
}
