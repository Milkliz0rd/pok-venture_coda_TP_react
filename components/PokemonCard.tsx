import type { RowComponentProps } from "react-window";
import { Pokemon } from 'pokenode-ts';

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
    pokemon: Pokemon;
}

export function PokemonCard({ pokemon, ...props }: PokemonCardProps) {
    return (
        <div {...props} className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs p-4 m-2">
            <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
                <a href="#">
                    <img className="rounded-t-base" src={pokemon?.sprites.front_default || "/docs/images/blog/image-1.jpg"} alt={pokemon?.name || "Pokémon"} />
                </a>
                <div className="p-6 text-center">
                    {pokemon?.types.map((typeInfo) => (
                        <span key={typeInfo.type.name} className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                            {typeInfo.type.name}
                        </span>
                    ))}

                    <a href="#">
                        <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{pokemon?.name}</h5>
                    </a>
                    <a href="#" className="inline-flex items-center bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        {pokemon ? `id: ${pokemon.id}` : "Loading..."}
                        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

interface VirtualizedPokemonCardProps {
    pokemons: Pokemon[];
}

export function VirtualizedPokemonCard({
    pokemons,
    index,
    style,
}: RowComponentProps<VirtualizedPokemonCardProps>) {
    const pokemon = pokemons[index];

    return <PokemonCard pokemon={pokemon} style={style} />;
}

// export default function Card({ id }: { id: number | null }) {
//     const [pokemon, setPokemon] = useState<Pokemon | null>(null);
//     const idToFetch = id ? id : 1;
//     (async () => {
//         const api = new PokemonClient();
//         await api
//             .getPokemonById(idToFetch)
//             .then((data) => setPokemon(data))
//             .catch((error) => console.error(error));
//     })();

//     return (
//         <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
//             <a href="#">
//                 <img className="rounded-t-base" src={pokemon?.sprites.front_default || "/docs/images/blog/image-1.jpg"} alt={pokemon?.name || "Pokémon"} />
//             </a>
//             <div className="p-6 text-center">
//                 {pokemon?.types.map((typeInfo) => (
//                     <span key={typeInfo.type.name} className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
//                         {typeInfo.type.name}
//                     </span>
//                 ))}

//                 <a href="#">
//                     <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{pokemon?.name}</h5>
//                 </a>
//                 <a href="#" className="inline-flex items-center bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
//                     {pokemon ? `id: ${pokemon.id}` : "Loading..."}
//                     <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
//                 </a>
//             </div>
//         </div>
//     );
// }
