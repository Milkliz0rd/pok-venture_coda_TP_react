export function Nav() {
  return (
    <nav className="flex justify-between p-5">
      <div className="flex gap-5">
        <a href="/home">Accueil</a>
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
