import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

type PokemonBase = {
  name: string;
  names: Array<{ name: string; language: { name: string } }>;
};

export function usePokemonList<T extends PokemonBase>(pokemons: T[]) {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 300);

  const filteredList = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    if (!q) return pokemons;

    return pokemons.filter((p) => {
      const fr = p.names.find((n) => n.language.name === "fr")?.name ?? "";
      return p.name.toLowerCase().includes(q) || fr.toLowerCase().includes(q);
    });
  }, [pokemons, debounced]);

  return { search, setSearch, filteredList };
}
