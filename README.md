# KIVO — Portfolio Agency

Site portfolio et espace d’administration de KIVO, construit avec Next.js, TypeScript, Tailwind CSS, Prisma/PostgreSQL et Auth.js.

## Installation

```bash
npm install
copy .env.example .env
npx prisma migrate dev --name init
npm run db:seed
npm run admin:create -- admin@kivo.agency "un-mot-de-passe-tres-solide"
npm run dev
```

Le site est disponible sur `http://localhost:3000`. L’administration se trouve sur `/admin/login`.

Sans `DATABASE_URL`, le site public utilise automatiquement trois projets de démonstration. L’administration nécessite PostgreSQL.

## Variables d’environnement

- `DATABASE_URL` : connexion PostgreSQL.
- `AUTH_SECRET` : secret Auth.js long et aléatoire (`npx auth secret`).
- `NEXT_PUBLIC_SITE_URL` : URL canonique du site.
- `CONTACT_EMAIL` : destinataire prévu pour le formulaire.

Le formulaire de contact valide et limite les requêtes. Branchez le fournisseur e-mail de votre choix dans `src/app/api/contact/route.ts` avant la mise en production.

## Images

L’admin accepte JPG, PNG et WebP jusqu’à 5 Mo. En développement, les fichiers sont enregistrés dans `public/uploads`. Pour un hébergement serverless, remplacez `src/lib/storage.ts` par Cloudinary, Vercel Blob ou Supabase Storage ; le reste du code ne change pas.

## Production

```bash
npm run lint
npm run build
npm start
```

Avant le déploiement, renseignez les variables d’environnement, exécutez les migrations (`npx prisma migrate deploy`) et configurez un stockage persistant ainsi qu’un fournisseur d’e-mail.

## Sécurité et HTTPS

Les fichiers `.env*`, clés privées, certificats et fichiers locaux ne sont jamais versionnés. Configurez les valeurs de `.env.example` directement dans les variables sécurisées de votre hébergeur.

L’application émet HSTS et plusieurs en-têtes de sécurité. Le certificat TLS et la redirection HTTP vers HTTPS doivent être activés chez l’hébergeur. Vercel fournit automatiquement HTTPS et redirige le trafic HTTP une fois le domaine connecté.
