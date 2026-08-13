import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

async function main() {
  const [email, password] = process.argv.slice(2);
  if (!email || !password || password.length < 12) {
    console.error("Usage: npm run admin:create -- email@example.com 'mot-de-passe-12-caracteres-minimum'");
    process.exitCode = 1;
    return;
  }

  const prisma = new PrismaClient();
  try {
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.admin.upsert({
      where: { email: email.toLowerCase() },
      update: { passwordHash },
      create: { email: email.toLowerCase(), passwordHash },
    });
    console.log(`Admin créé : ${email.toLowerCase()}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Erreur inconnue");
  process.exitCode = 1;
});
