import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import type { PokemonSpeciesDetails } from "@/type/pokemon";

export function usePokemonList(pokemons: PokemonSpeciesDetails[]) {
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
