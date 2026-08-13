import type { PortfolioProject } from "@/lib/types";

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
