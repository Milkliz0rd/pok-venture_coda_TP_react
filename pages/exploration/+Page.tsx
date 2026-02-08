// import { useMousePosition } from "@/hooks/useMousePosition";
// // import { usePageContext } from "vike-react/usePageContext";

// export default function Exploration() {
//     // const pageContext = usePageContext()
//     // const id: string | undefined = pageContext.urlParsed.search.id
//     // console.log(
//     //     id
//     // );

//     //Debug : function displaying the x & y of the mouse for setting areas
//     function App() {
//         const mousePosition = useMousePosition();
//         return (
//             <p>
//             Your cursor position:
//             <br />
//             {JSON.stringify(mousePosition)}
//             </p>
//         );
//     }

//     //todo? = in case of moving map -> add function map top-left position to area coords
//     //or a fixed size so areas are always precise
//     return (
//         <main>
//             {/* <h1>Exploration</h1> */}
//             <img useMap="#gamemap" src="/assets/EmrldMap.webp" alt="PokemonEmeraldMap" className="w-2xl"></img>
//             <map name="gamemap">

//                 <area alt="Route101" shape="rect" coords="110,290,135,270" href="?id=449"/>
//                 <area alt="Route102" shape="rect" coords="65,275,110,240" href="?id=450"/>
//                 <area alt="Route103" shape="rect" coords="110,250,200,225" href="?id=451"/>

//                 <area alt="Route111" shape="rect" coords="200,45,230,175" href="?id=459"/>
//                 <area alt="Route110" shape="rect" coords="200,205,230,270" href="?id=458"/>
//                 <area alt="Route109" shape="rect" coords="200,315,230,390" href="?id=457"/>
//                 <area alt="Route108" shape="rect" coords="155,355,200,390" href="?id=456"/>
//                 <area alt="Route107" shape="rect" coords="90,355,155,390" href="?id=455"/>

//                 <area alt="Route106" shape="rect" coords="20,335,90,360" href="?id=454"/>
//                 <area alt="Route105" shape="rect" coords="20,250,45,335" href="?id=453"/>
//                 <area alt="Route104" shape="rect" coords="20,200,45,250" href="?id=452"/>
//                 <area alt="Route115" shape="rect" coords="20,90,45,160" href="?id=463"/>

//                 <area alt="Route114" shape="rect" coords="45,45,70,110" href="?id=462"/>

//                 <area alt="Route114" shape="rect" coords="70,45,90,70" href="?id=462"/>
//                 <area alt="Route113" shape="rect" coords="110,45,200,70" href="?id=461"/>

//                 <area alt="Route112" shape="rect" coords="155,110,200,135" href="?id=460"/>

//                 <area alt="Route116" shape="rect" coords="45,155,135,180" href="?id=464"/>
//                 <area alt="Route117" shape="rect" coords="130,175,200,205" href="?id=465"/>
//                 <area alt="Route118" shape="rect" coords="290,165,245,210" href="?id=466"/>
//                 <area alt="Route123" shape="rect" coords="290,165,405,210" href="?id=471"/>
//                 <area alt="Route119" shape="rect" coords="265,40,290,164" href="?id=467"/>

//                 <area alt="Route120" shape="rect" coords="313,40,335,135" href="?id=468"/>
//                 <area alt="Route121" shape="rect" coords="335,135,425,100" href="?id=469"/>

//                 <area alt="Route125" shape="rect" coords="555,105,605,156" href="?id=473"/>
//                 <area alt="Route126" shape="rect" coords="469,180,555,248" href="?id=474"/>
//                 <area alt="Route127" shape="rect" coords="605,180,555,248" href="?id=475"/>

//                 <area alt="Route128" shape="rect" coords="530,248,605,272" href="?id=476"/>
//                 <area alt="victoryroad" shape="rect" coords="605,248,625,272" href="?id=444"/>

//                 <area alt="Route129" shape="rect" coords="605,295,530,270" href="?id=477"/>
//                 <area alt="Route130" shape="rect" coords="469,295,530,270" href="?id=478"/>
//                 <area alt="Route131" shape="rect" coords="430,295,469,270" href="?id=479"/>

//                 <area alt="Route132" shape="rect" coords="360,295,400,270" href="?id=480"/>
//                 <area alt="Route133" shape="rect" coords="290,295,360,270" href="?id=481"/>
//                 <area alt="Route134" shape="rect" coords="225,295,290,270" href="?id=482"/>
//                 <area alt="Route124" shape="rect" coords="469,105,555,180" href="?id=472"/>
//             </map>
//             <div>
//                 <App/>
//             </div>
//         </main>
//     );
// }

import { navigate } from 'vike/client/router'
import { useData } from 'vike-react/useData'
import type { Data } from './+data'

export default function Exploration() {
  const { pokemons } = useData<Data>()

  function goToArea(id: number) {
    navigate(`/exploration?id=${id}`)
  }

  return (
    <main>
      {/* Map, do not move with css */}
      <img
        src="/assets/EmrldMap.webp"
        alt="Pokemon Emerald Map"
        useMap="#gamemap"
        className="w-2xl"
      />

      <map name="gamemap">
        <area
          alt="Route 101"
          shape="rect"
          coords="110,290,135,270"
          href="/exploration?id=449"
          onClick={(e) => {
            e.preventDefault()
            goToArea(449)
          }}
        />

        <area
          alt="Route 102"
          shape="rect"
          coords="65,275,110,240"
          href="/exploration?id=450"
          onClick={(e) => {
            e.preventDefault()
            goToArea(450)
          }}
        />

        <area
          alt="Victory Road"
          shape="rect"
          coords="605,248,625,272"
          href="/exploration?id=444"
          onClick={(e) => {
            e.preventDefault()
            goToArea(444)
          }}
        />
        {/* this is a chunk for test*/}
        {/* there is too many areas >:(*/}
      </map>

      {/* Pokémon results */}
      <section className="mt-6">
        {pokemons.length === 0 ? (
          <p>Select an area to encounter Pokémon</p>
        ) : (
          <ul className="grid grid-cols-2 gap-4">
            {pokemons.map((pokemon) => (
              <li key={pokemon.id} className="text-center">
                {pokemon.sprites.front_default && (
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="mx-auto"
                  />
                )}
                <div className="capitalize">{pokemon.name}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
