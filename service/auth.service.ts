import argon2 from "argon2";
import * as jose from "jose";
import { getPrisma } from "@/utils/getPrisma";

const secret = jose.base64url.decode(
  "secret_zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02a",
);

export const authService = {
  async register(username: string, email: string, password: string) {
    const prisma = getPrisma();
    const hashedPassword = await argon2.hash(password);
    await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });
    prisma.$disconnect();
  },

  async login(email: string, password: string) {
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found");
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) throw new Error("Invalid password");
    prisma.$disconnect();
    return this.generateJWT(user.id.toString());
  },

  async generateJWT(userId: string) {
    return new jose.EncryptJWT({ id: userId })
      .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
      .encrypt(secret);
  },

  async verifyJWT(token: string) {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload as { id: string };
  },
};
