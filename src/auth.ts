import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  pages: { signIn: "/admin/login" },
  providers: [Credentials({
    credentials: { email: { label: "E-mail", type: "email" }, password: { label: "Mot de passe", type: "password" } },
    authorize: async (credentials) => {
      const parsed = z.object({ email: z.string().email(), password: z.string().min(8) }).safeParse(credentials);
      if (!parsed.success || !process.env.DATABASE_URL) return null;
      const admin = await prisma.admin.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
      if (!admin || !(await bcrypt.compare(parsed.data.password, admin.passwordHash))) return null;
      return { id: admin.id, email: admin.email, name: "KIVO Admin" };
    },
  })],
  callbacks: { authorized: async ({ auth: session }) => Boolean(session) },
});
