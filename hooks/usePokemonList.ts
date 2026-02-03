import { useEffect, useState } from "react";
import type { Pokemon } from "@/utils/pokemon.type";

export function usePokemonList() {
  const [pokemonFound, setPokemonFound] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonCount, setPokemonCount] = useState(0);

  useEffect(() => {
    async function fetchPokemon() {
      if (isLoading) return;
      setIsLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
      );
      const data = await response.json();
      setPokemonCount(data.count);
      setPokemonFound((prev) => [...prev, ...data.results]);
      setIsLoading(false);
    }
    fetchPokemon();
  }, [offset, isLoading]);

  function loadNextPage() {
    setOffset(offset + 20);
  }
  return { pokemonFound, pokemonCount, loadNextPage };
}
