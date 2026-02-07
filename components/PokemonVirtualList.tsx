import type React from "react";
import type { RowComponentProps } from "react-window";
import type { PokemonWithSprite as Pokemon } from "@/pages/pokedex/+data";
// ⚠️ ajuste le chemin si besoin (mais l’idée: importer le type depuis +data)

export function PokemonCard(
  props: RowComponentProps<{ pokemon: Pokemon }> &
    React.HTMLAttributes<HTMLDivElement>,
) {
  const { pokemon, style, ariaAttributes, ...rest } = props;

  const frName =
    pokemon.names.find((n) => n.language.name === "fr")?.name ?? pokemon.name;

  const pokemonId = pokemon.id.toString().padStart(3, "0");

  return (
    <article
      {...ariaAttributes}
      {...rest}
      style={style}
      className={`px-2 flex items-center gap-10 justify-center border-t border-2 ${rest.className ?? ""}`}
    >
      {pokemon.sprite ? (
        <img src={pokemon.sprite} alt={pokemon.name} loading="lazy" />
      ) : (
        <div style={{ width: 40, height: 40 }} />
      )}
      <h1 className="text-xl font-bold">#{pokemonId}</h1>
      <h1 className="text-xl font-bold">{frName}</h1>
    </article>
  );
}

export function VirtualizedPokemonCard(
  props: RowComponentProps<{ pokemons: Pokemon[] }>,
) {
  const { pokemons, index, style, ariaAttributes } = props;
  const pokemon = pokemons[index];

  return (
    <PokemonCard
      pokemon={pokemon}
      index={index}
      style={style}
      ariaAttributes={ariaAttributes}
    />
  );
}
