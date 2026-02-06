import backgoundPkmn from "@/assets/backgroundEmrld.png";

export default function Page() {
  return (
    <div className="bg-[url(@/assets/backgroundEmrld.webp)] min-h-screen w-screen flex flex-col items-center gap-20 justify-center">
      <div>
        <img
          className="w-180 h-60 "
          src="../assets/pokeventureTitle.webp"
          alt="PokeVenture"
        ></img>
      </div>
      <div className="flex gap-8 ">
        <a
          className="bg-green-300 from-green-300 to-green-100 to border-3 border-gray-600 hover:border-orange-500 p-5 rounded-xl "
          href="/signin"
        >
          Se connecter
        </a>
        <a
          className="bg-green-300 border-3 border-gray-600 hover:border-orange-500 p-5 rounded-xl"
          href="/signup"
        >
          S'inscrire
        </a>
      </div>
    </div>
  );
}
