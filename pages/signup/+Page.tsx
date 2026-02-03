export default function signUP() {
  return (
    <div >
      <div className="flex flex-col">
        <h1>Inscription</h1>
        <label htmlFor="username">Veuillez choisi un Identifiant :</label>
        <input type="text" id="username" className=" border-2 m-1" />
        <label htmlFor="password">Veuillez choisir un mot de passe :</label>
        <input type="text" id="username" className=" border-2 m-1" />
        <label htmlFor="password">Veuillez confirmer le mot de passe :</label>
        <input type="text" id="username" className=" border-2 m-1" />
        <button type="submit" className="border-2 mt-2">Envoyer</button>
      </div>
    </div>
  )
}