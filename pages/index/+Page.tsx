import backgroundPkmn from "@/assets/backgroundEmrld.webp";

export default function Page() {
  return (
    <main
      className="w-full min-h-full flex flex-col items-center justify-center gap-8 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundPkmn})` }}
    >
      <img
        className="max-w-3xl h-auto"
        src="../assets/pokeventureTitle.webp"
        alt="PokeVenture"
      />

      <div className="flex gap-8">
        <a
          className="bg-green-300 border-2 border-gray-600 hover:border-orange-500 p-5 rounded-xl"
          href="/signin"
        >
          Se connecter
        </a>
        <a
          className="bg-green-300 border-2 border-gray-600 hover:border-orange-500 p-5 rounded-xl"
          href="/signup"
        >
          S'inscrire
        </a>
      </div>
    </main>
  );
}
