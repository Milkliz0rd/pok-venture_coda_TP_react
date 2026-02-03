import { lazy, Suspense } from "react";

//const Component = lazy(() => import(".///"))

export default function Pokedex() {
    return (
        <main>
            <h1>Pokédex</h1>

            <div className={"bg-orange-800"}>
                <Suspense fallback={<p>Chargement</p>}>
                    {/* <Component /> */}
                </Suspense>
            </div>
        </main>
    );
}