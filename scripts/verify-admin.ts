import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

async function main() {
  const [email, password] = process.argv.slice(2);
  if (!email || !password) throw new Error("Identifiants de test manquants");
  const prisma = new PrismaClient();
  try {
    const admin = await prisma.admin.findUnique({ where: { email: email.toLowerCase() } });
    if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
      throw new Error("Échec de vérification des identifiants");
    }
    console.log("Identifiants administrateur vérifiés");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Erreur inconnue");
  process.exitCode = 1;
});
