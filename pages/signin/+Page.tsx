import { Link } from "../../components/Link"

export default function login(){
  return(
    <div >
      <div className="flex flex-col">
        <h1>Login</h1>
        <label htmlFor="username">Identifiant :</label>
        <input type="text" id="username" className=" border-2 m-1" />
        <label htmlFor="password">Mot de passe :</label>
        <input type="text" id="username" className=" border-2 m-1" />
        <button type="submit" className="border-1 mt-2">Envoyer</button>
      </div>
      <div className="mt-4">
        <h3>Pas encore inscrit ?</h3>
        <Link href="/signup">Inscription</Link>
      </div>
    </div>
  )
}