import { useAuth } from "../../../../hooks/useAuth";

export default function Signup() {
  const auth = useAuth();

  return (
    <div>
      <h1>Inscription</h1>

      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          auth.register();
        }}
      >
        <label htmlFor="username">Identifiant :</label>
        <input
          id="username"
          type="text"
          className="border-2 m-1"
          value={auth.username}
          onChange={(e) => auth.setUsername(e.target.value)}
        />

        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          className="border-2 m-1"
          value={auth.email}
          onChange={(e) => auth.setEmail(e.target.value)}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          className="border-2 m-1"
          value={auth.password}
          onChange={(e) => auth.setPassword(e.target.value)}
        />

        <button type="submit" className="border-2 mt-2">
          Envoyer
        </button>
      </form>
    </div>
  );
}
