import { useMousePosition } from "@/hooks/useMousePosition";

export default function Exploration() {
    
    //Debug : function displaying the x & y of the mouse for areas
    function App() {
        const mousePosition = useMousePosition();
        return (
            <p>
            Your cursor position:
            <br />
            {JSON.stringify(mousePosition)}
            </p>
        );
    }

    return (
        <main>
            {/* <h1>Exploration</h1> */}
            <img useMap="#gamemap" src="../assets/EmrldMap.webp" alt="PokemonEmeraldMap" className="w-2xl"></img>
            <map name="gamemap">

                <area alt="Route101" shape="rect" coords="110,290,135,270" href="#route101"/>
                <area alt="Route102" shape="rect" coords="65,275,110,240" href="#route102"/>
                <area alt="Route103" shape="rect" coords="110,250,200,225" href="#route103"/>

                <area alt="Route111" shape="rect" coords="200,45,230,175" href="#route111"/>
                <area alt="Route110" shape="rect" coords="200,205,230,270" href="#route110"/>
                <area alt="Route109" shape="rect" coords="200,315,230,390" href="#route109"/>
                <area alt="Route108" shape="rect" coords="155,355,200,390" href="#route108"/>
                <area alt="Route107" shape="rect" coords="90,355,155,390" href="#route107"/>

                <area alt="Route107" shape="rect" coords="20,335,90,360" href="#route107"/>
                <area alt="Route106" shape="rect" coords="20,250,45,335" href="#route106"/>
                <area alt="Route104" shape="rect" coords="20,200,45,250" href="#route104"/>
                <area alt="Route115" shape="rect" coords="20,90,45,160" href="#route115"/>

                <area alt="Route114" shape="rect" coords="45,45,70,110" href="#route114"/>

                <area alt="Route114" shape="rect" coords="70,45,90,70" href="#route114"/>
                <area alt="Route113" shape="rect" coords="110,45,200,70" href="#route113"/>

                <area alt="Route112" shape="rect" coords="155,110,200,135" href="#route112"/>

                <area alt="Route116" shape="rect" coords="45,155,135,180" href="#route116"/>
                <area alt="Route117" shape="rect" coords="130,175,200,205" href="#route117"/>
                <area alt="Route118" shape="rect" coords="290,165,245,210" href="#route118"/>
                <area alt="Route123" shape="rect" coords="290,165,405,210" href="#route123"/>
                <area alt="Route119" shape="rect" coords="265,40,290,164" href="#route119"/>

                <area alt="Route120" shape="rect" coords="313,40,335,135" href="#route120"/>
                <area alt="Route121" shape="rect" coords="335,135,425,100" href="#route121"/>

                <area alt="Route125" shape="rect" coords="555,105,605,156" href="#route125"/>
                <area alt="Route126" shape="rect" coords="469,180,555,248" href="#route126"/>
                <area alt="Route127" shape="rect" coords="605,180,555,248" href="#route127"/>

                <area alt="Route128" shape="rect" coords="530,248,605,272" href="#route128"/>
                <area alt="victoryroad" shape="rect" coords="605,248,625,272" href="#victoryroad"/>

                <area alt="Route129" shape="rect" coords="605,295,530,270" href="#route129"/>
                <area alt="Route130" shape="rect" coords="469,295,530,270" href="#route130"/>
                <area alt="Route131" shape="rect" coords="430,295,469,270" href="#route131"/>

                <area alt="Route132" shape="rect" coords="360,295,400,270" href="#route132"/>
                <area alt="Route133" shape="rect" coords="290,295,360,270" href="#route133"/>
                <area alt="Route134" shape="rect" coords="225,295,290,270" href="#route134"/>
                <area alt="Route135" shape="rect" coords="469,105,555,180" href="#route135"/>
            </map>
            <div>
                <App/>
            </div>
        </main>
    );
}