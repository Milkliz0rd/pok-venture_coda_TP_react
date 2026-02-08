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
          href="/exploration?id=393"
          onClick={(e) => {
            e.preventDefault()
            goToArea(393)
          }}
        />

        <area
          alt="Route 102"
          shape="rect"
          coords="65,275,110,240"
          href="/exploration?id=394"
          onClick={(e) => {
            e.preventDefault()
            goToArea(394)
          }}
        />

        <area
          alt="Route 103"
          shape="rect"
          coords="110,250,200,225"
          href="/exploration?id=395"
          onClick={(e) => {
            e.preventDefault()
            goToArea(395)
          }}
        />

        <area
          alt="Route 111"
          shape="rect"
          coords="200,45,230,175"
          href="/exploration?id=403"
          onClick={(e) => {
            e.preventDefault()
            goToArea(403)
          }}
        />

        <area
          alt="Route 110"
          shape="rect"
          coords="200,205,230,270"
          href="/exploration?id=402"
          onClick={(e) => {
            e.preventDefault()
            goToArea(402)
          }}
        />

        <area
          alt="Route 109"
          shape="rect"
          coords="200,315,230,390"
          href="/exploration?id=401"
          onClick={(e) => {
            e.preventDefault()
            goToArea(401)
          }}
        />

        <area
          alt="Route 108"
          shape="rect"
          coords="155,355,200,390"
          href="/exploration?id=400"
          onClick={(e) => {
            e.preventDefault()
            goToArea(400)
          }}
        />

        <area
          alt="Route 107"
          shape="rect"
          coords="90,355,155,390"
          href="/exploration?id=399"
          onClick={(e) => {
            e.preventDefault()
            goToArea(399)
          }}
        />

        <area
          alt="Route 106"
          shape="rect"
          coords="20,335,90,360"
          href="/exploration?id=398"
          onClick={(e) => {
            e.preventDefault()
            goToArea(398)
          }}
        />

        <area
          alt="Route 105"
          shape="rect"
          coords="20,250,45,335"
          href="/exploration?id=397"
          onClick={(e) => {
            e.preventDefault()
            goToArea(397)
          }}
        />

        <area
          alt="Route 104"
          shape="rect"
          coords="20,200,45,250"
          href="/exploration?id=396"
          onClick={(e) => {
            e.preventDefault()
            goToArea(396)
          }}
        />

        <area
          alt="Route 115"
          shape="rect"
          coords="20,90,45,160"
          href="/exploration?id=407"
          onClick={(e) => {
            e.preventDefault()
            goToArea(407)
          }}
        />

        <area
          alt="Route 114"
          shape="rect"
          coords="45,45,70,110"
          href="/exploration?id=406"
          onClick={(e) => {
            e.preventDefault()
            goToArea(406)
          }}
        />

        <area
          alt="Route 114"
          shape="rect"
          coords="70,45,90,70"
          href="/exploration?id=406"
          onClick={(e) => {
            e.preventDefault()
            goToArea(406)
          }}
        />

        <area
          alt="Route 113"
          shape="rect"
          coords="110,45,200,70"
          href="/exploration?id=405"
          onClick={(e) => {
            e.preventDefault()
            goToArea(405)
          }}
        />

        <area
          alt="Route 112"
          shape="rect"
          coords="155,110,200,135"
          href="/exploration?id=404"
          onClick={(e) => {
            e.preventDefault()
            goToArea(404)
          }}
        />

        <area
          alt="Route 116"
          shape="rect"
          coords="45,155,135,180"
          href="/exploration?id=408"
          onClick={(e) => {
            e.preventDefault()
            goToArea(408)
          }}
        />

        <area
          alt="Route 117"
          shape="rect"
          coords="130,175,200,205"
          href="/exploration?id=409"
          onClick={(e) => {
            e.preventDefault()
            goToArea(409)
          }}
        />

        <area
          alt="Route 118"
          shape="rect"
          coords="290,165,245,210"
          href="/exploration?id=410"
          onClick={(e) => {
            e.preventDefault()
            goToArea(410)
          }}
        />

        <area
          alt="Route 123"
          shape="rect"
          coords="290,165,405,210"
          href="/exploration?id=415"
          onClick={(e) => {
            e.preventDefault()
            goToArea(415)
          }}
        />

        <area
          alt="Route 119"
          shape="rect"
          coords="265,40,290,164"
          href="/exploration?id=411"
          onClick={(e) => {
            e.preventDefault()
            goToArea(411)
          }}
        />

        <area
          alt="Route 120"
          shape="rect"
          coords="313,40,335,135"
          href="/exploration?id=412"
          onClick={(e) => {
            e.preventDefault()
            goToArea(412)
          }}
        />

        <area
          alt="Route 121"
          shape="rect"
          coords="335,135,425,100"
          href="/exploration?id=413"
          onClick={(e) => {
            e.preventDefault()
            goToArea(413)
          }}
        />

        <area
          alt="Route 125"
          shape="rect"
          coords="555,105,605,156"
          href="/exploration?id=418"
          onClick={(e) => {
            e.preventDefault()
            goToArea(418)
          }}
        />

        <area
          alt="Route 126"
          shape="rect"
          coords="469,180,555,248"
          href="/exploration?id=419"
          onClick={(e) => {
            e.preventDefault()
            goToArea(419)
          }}
        />

        <area
          alt="Route 127"
          shape="rect"
          coords="605,180,555,248"
          href="/exploration?id=421"
          onClick={(e) => {
            e.preventDefault()
            goToArea(421)
          }}
        />

        <area
          alt="Route 128"
          shape="rect"
          coords="530,248,605,272"
          href="/exploration?id=422"
          onClick={(e) => {
            e.preventDefault()
            goToArea(422)
          }}
        />

        <area
          alt="Victory Road"
          shape="rect"
          coords="605,248,625,272"
          href="/exploration?id=383"
          onClick={(e) => {
            e.preventDefault()
            goToArea(383)
          }}
        />

        <area
          alt="Route 129"
          shape="rect"
          coords="605,295,530,270"
          href="/exploration?id=423"
          onClick={(e) => {
            e.preventDefault()
            goToArea(423)
          }}
        />

        <area
          alt="Route 130"
          shape="rect"
          coords="469,295,530,270"
          href="/exploration?id=424"
          onClick={(e) => {
            e.preventDefault()
            goToArea(424)
          }}
        />

        <area
          alt="Route 131"
          shape="rect"
          coords="430,295,469,270"
          href="/exploration?id=425"
          onClick={(e) => {
            e.preventDefault()
            goToArea(425)
          }}
        />

        <area
          alt="Route 132"
          shape="rect"
          coords="360,295,400,270"
          href="/exploration?id=426"
          onClick={(e) => {
            e.preventDefault()
            goToArea(426)
          }}
        />

        <area
          alt="Route 133"
          shape="rect"
          coords="290,295,360,270"
          href="/exploration?id=427"
          onClick={(e) => {
            e.preventDefault()
            goToArea(427)
          }}
        />

        <area
          alt="Route 134"
          shape="rect"
          coords="225,295,290,270"
          href="/exploration?id=428"
          onClick={(e) => {
            e.preventDefault()
            goToArea(428)
          }}
        />

        <area
          alt="Route 124"
          shape="rect"
          coords="469,105,555,180"
          href="/exploration?id=416"
          onClick={(e) => {
            e.preventDefault()
            goToArea(416)
          }}
        />
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
