import { Abort } from "telefunc";
import { authService } from "@/service/auth.service";
import { getContext } from "@/utils/telefunc";

export async function onLogin(email: string, password: string) {
  const { express } = getContext();

  const jwt = await authService.login(email, password);

  express.res.cookie("auth_token", jwt, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 2, // 2h
  });

  return { success: true };
}

export async function onRegister(
  username: string,
  email: string,
  password: string,
) {
  const errors: string[] = [];

  if (username.trim().length < 2) {
    errors.push("L'identifiant doit faire au moins 2 caractères");
  }

  if (!email.includes("@")) {
    errors.push("Format d'email invalide");
  }

  if (password.trim().length < 12) {
    errors.push("Le mot de passe doit faire au moins 12 caractères");
  }

  if (await authService.getUserByEmail(email)) {
    errors.push("L'adresse email est déjà utilisée");
  }

  if (errors.length > 0) {
    throw Abort({ errorMessage: "Inscription non effectuée", errors });
  }

  await authService.register(username, email, password);

  return { success: true };
}
