import type { PortfolioProject, TeamMember } from "@/lib/types";

const now = new Date("2025-01-01");

export const demoProjects: PortfolioProject[] = [
  {
    id: "demo-orbit", title: "Orbit Finance", slug: "orbit-finance",
    shortDescription: "Une plateforme financière claire, rapide et rassurante.",
    description: "Refonte complète de l’expérience web d’une fintech en croissance. Nous avons simplifié le discours, structuré le parcours de conversion et développé une interface rapide sur tous les écrans.",
    client: "Orbit", category: "Site web", technologies: ["Next.js", "TypeScript", "Design system"],
    coverImage: "/projects/orbit.svg", gallery: [], liveUrl: null, githubUrl: null,
    challenges: "Rendre un produit financier complexe immédiatement compréhensible.",
    contribution: "Stratégie, direction artistique, UX/UI et développement.",
    completionDate: new Date("2025-02-01"), featured: true, published: true, createdAt: now, updatedAt: now,
  },
  {
    id: "demo-nova", title: "Nova Studio", slug: "nova-studio",
    shortDescription: "Un portfolio immersif pour un studio d’architecture indépendant.",
    description: "Une présence digitale éditoriale où chaque projet respire. La grille, la typographie et les transitions mettent le travail du studio au premier plan.",
    client: "Nova Studio", category: "Portfolio", technologies: ["Next.js", "Motion", "CMS"],
    coverImage: "/projects/nova.svg", gallery: [], liveUrl: null, githubUrl: null,
    challenges: "Présenter beaucoup de matière sans alourdir la navigation.",
    contribution: "UX, identité digitale et développement front-end.",
    completionDate: new Date("2024-10-01"), featured: true, published: true, createdAt: now, updatedAt: now,
  },
  {
    id: "demo-alma", title: "Alma Social", slug: "alma-social",
    shortDescription: "Une identité sociale cohérente, pensée pour créer du lien.",
    description: "Création d’un langage visuel flexible et d’un système de contenus pour accélérer la production sans perdre la personnalité de la marque.",
    client: "Alma", category: "Social media", technologies: ["Direction artistique", "Templates", "Stratégie"],
    coverImage: "/projects/alma.svg", gallery: [], liveUrl: null, githubUrl: null,
    challenges: "Créer une signature reconnaissable dans un flux très concurrentiel.",
    contribution: "Stratégie éditoriale, design social et accompagnement.",
    completionDate: new Date("2025-05-01"), featured: true, published: true, createdAt: now, updatedAt: now,
  },
];

export const demoTeamMembers: TeamMember[] = [
  {
    id: "demo-chakib", initials: "CA", name: "Chakib A.", slug: "chakib-a",
    role: "Co-fondateur · Développeur web",
    bio: "Des interfaces rapides, des bases solides et une attention constante aux détails qui comptent.",
    skills: ["Next.js", "Interfaces web", "Performance", "Intégration"],
    contact: "kicoagency@siteprofree.email", location: "Algérie", availability: "Disponible pour nouveaux projets",
    highlight: "Transforme les idées en produits web clairs, rapides et maintenables.",
    published: true, sortOrder: 1, createdAt: now, updatedAt: now,
  },
  {
    id: "demo-aymen", initials: "AB", name: "Aymen B.", slug: "aymen-b",
    role: "Co-fondateur · Développeur web",
    bio: "Un profil technique orienté performance, expérience utilisateur et livraison propre.",
    skills: ["Développement front-end", "UX technique", "Optimisation", "Maintenance"],
    contact: "kicoagency@siteprofree.email", location: "Algérie", availability: "Disponible pour nouveaux projets",
    highlight: "Construit des expériences digitales sobres, utiles et efficaces.",
    published: true, sortOrder: 2, createdAt: now, updatedAt: now,
  },
  {
    id: "demo-salim", initials: "SG", name: "Salim G.", slug: "salim-g",
    role: "Co-fondateur · Développeur web",
    bio: "Des interfaces rapides, des détails propres et des idées qui fonctionnent vraiment.",
    skills: ["Design system", "Développement web", "Qualité front-end", "Responsive"],
    contact: "kicoagency@siteprofree.email", location: "Algérie", availability: "Disponible pour nouveaux projets",
    highlight: "Soigne les détails d’interface et la cohérence de chaque parcours.",
    published: true, sortOrder: 3, createdAt: now, updatedAt: now,
  },
  {
    id: "demo-creative", initials: "KV", name: "L’équipe créative", slug: "equipe-creative",
    role: "Design · Social media",
    bio: "Une direction artistique claire et une culture du contenu pensée pour rendre chaque marque reconnaissable.",
    skills: ["Direction artistique", "Branding", "Social media", "Templates"],
    contact: "kicoagency@siteprofree.email", location: "Algérie", availability: "Sur demande",
    highlight: "Crée des systèmes visuels cohérents pour donner une vraie présence aux marques.",
    published: true, sortOrder: 4, createdAt: now, updatedAt: now,
  },
];
