import { useState } from "react";
import { navigate, reload } from "vike/client/router";
import { onLogin, onRegister } from "./useAuth.telefunc";

export function useAuth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const login = async () => {
    await onLogin(email, password);
    reload();
  };

  const register = async () => {
    await onRegister(username, email, password);
    navigate("/login");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    login,
    register,
  };
}
