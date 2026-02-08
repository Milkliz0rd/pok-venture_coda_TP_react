import { useAuth } from "@/hooks/useAuth";

export default function Signup() {
  const auth = useAuth();

  return (
    <div
      className=" 
    flex flex-col
    w-full min-h-full
    justify-center items-center
    "
    >
      <h1>Inscription</h1>

      <form
        className="flex flex-col
        border-2
      bg-amber-100
        p-5 rounded-xl
        "
        onSubmit={(e) => {
          e.preventDefault();
          auth.register();
        }}
      >
        <label htmlFor="username">Identifiant :</label>
        <input
          id="username"
          type="text"
          className="border m-1 bg-gray-50"
          value={auth.username}
          onChange={(e) => auth.setUsername(e.target.value)}
        />

        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          className="border m-1 bg-gray-50"
          value={auth.email}
          onChange={(e) => auth.setEmail(e.target.value)}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          className="border m-1 bg-gray-50"
          value={auth.password}
          onChange={(e) => auth.setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="
           border mt-2 
           p-2 rounded-xl
           shadow-current
          bg-gray-200 hover:bg-gray-300 
          hover:outline-2 hover:outline-gray-800
        "
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
