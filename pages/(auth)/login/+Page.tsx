import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const auth = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.login();
  };

  return (
    <div
      className=" 
    flex flex-col
    w-full min-h-full
    justify-center items-center
    "
    >
      <h1>Connexion</h1>

      <form
        className="flex flex-col
        border-2
      bg-amber-100
        p-5 rounded-xl
        "
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="border m-1 bg-gray-50"
          name="email"
          value={auth.email}
          onChange={(event) => auth.setEmail(event.target.value)}
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          className="border m-1 bg-gray-50"
          name="password"
          value={auth.password}
          onChange={(event) => auth.setPassword(event.target.value)}
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
          Connexion
        </button>
      </form>
    </div>
  );
}
