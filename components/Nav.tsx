export function Nav() {
  return (
    <nav className="flex justify-between p-5 bg-amber-100 w-full">
      <div className="flex gap-5">
        <a href="/">Accueil</a>
        <a href="/pokedex">Pokedex</a>
        <a href="/team">Equipe</a>
        <a href="/combat">Combat</a>
        <a href="/leaderboard">Classement</a>
      </div>
      <div className="flex gap-5">
        <a href="/signup">Inscription</a>
        <a href="/signin">Connexion</a>
      </div>
    </nav>
  );
}
