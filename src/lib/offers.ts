import { prisma } from "@/lib/prisma";

export type Offer = {
  id?: string;
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  process: string[];
  outcome: string;
  timeline: string;
  startingPrice?: string | null;
  recommended?: boolean;
  useCase: string;
  cta: string;
  notIncluded: string[];
  tags: string[];
  published?: boolean;
  sortOrder?: number;
};

export const maintenanceAddOn = {
  name: "Option maintenance",
  summary: "Ajoutez un suivi technique après la livraison pour garder votre site stable, à jour et prêt à évoluer.",
  deliverables: ["Mises à jour techniques", "Petites modifications mensuelles", "Sauvegardes", "Corrections bugs", "Support prioritaire"],
};

export const staticOffers: Offer[] = [
  {
    slug: "presence",
    name: "Pack Présence",
    eyebrow: "Site vitrine essentiel",
    summary: "Pour lancer une présence professionnelle rapidement avec un site clair, responsive et facile à contacter.",
    description: "Le Pack Présence pose les bases d’une image sérieuse en ligne. Il convient aux indépendants, petites entreprises et nouvelles marques qui veulent un site propre sans complexité inutile.",
    idealFor: "Lancer une activité, présenter vos services, rassurer vos prospects et recevoir des demandes de contact.",
    deliverables: ["Site vitrine 1 à 5 pages", "Design responsive", "Formulaire de contact", "Optimisation SEO de base", "Intégration WhatsApp ou e-mail", "Mise en ligne"],
    process: ["Cadrage rapide du besoin", "Structure des pages", "Design et intégration", "Tests mobile et desktop", "Mise en ligne"],
    outcome: "Une présence digitale propre, rapide à publier et suffisamment claire pour transformer une visite en demande.",
    timeline: "1 à 2 semaines",
    startingPrice: null,
    useCase: "Choisissez cette offre si vous lancez votre activité et avez besoin d’un site professionnel rapidement.",
    cta: "Choisir le Pack Présence",
    notIncluded: ["Le domaine .dz est inclus si les documents nécessaires sont fournis", "Les domaines .com, .fr ou autres extensions sont ajoutés au budget selon leur prix réel", "La maintenance après livraison reste une option à ajouter"],
    tags: [],
    published: true,
    sortOrder: 1,
  },
  {
    slug: "business",
    name: "Pack Business",
    eyebrow: "Site complet pour entreprise",
    summary: "Pour une entreprise qui veut un site plus complet, plus structuré et mieux préparé pour le SEO local.",
    description: "Le Pack Business développe une présence digitale plus solide avec des pages clés, un discours mieux organisé et une structure pensée pour inspirer confiance.",
    idealFor: "Entreprises établies, agences, commerces et prestataires qui veulent un site plus riche qu’une simple vitrine.",
    deliverables: ["Site vitrine 5 à 10 pages", "Direction artistique légère", "Sections services, équipe, projets et contact", "SEO local Algérie", "Tracking analytics", "Optimisation vitesse", "Accompagnement contenu"],
    process: ["Audit de vos contenus existants", "Architecture des pages", "Design des sections principales", "Développement et optimisation", "Configuration analytics", "Mise en ligne"],
    outcome: "Un site plus complet, crédible et pensé pour accompagner la croissance commerciale.",
    timeline: "2 à 4 semaines",
    startingPrice: null,
    recommended: true,
    useCase: "Choisissez cette offre si votre entreprise a besoin d’un site structuré, crédible et prêt à recevoir des prospects.",
    cta: "Choisir le Pack Business",
    notIncluded: ["Le domaine .dz est inclus si les documents nécessaires sont fournis", "Les domaines .com, .fr ou autres extensions sont ajoutés au budget selon leur prix réel", "La maintenance après livraison reste une option à ajouter", "Les fonctionnalités très spécifiques sont chiffrées séparément"],
    tags: ["Recommandé"],
    published: true,
    sortOrder: 2,
  },
  {
    slug: "landing-page",
    name: "Pack Landing Page",
    eyebrow: "Page orientée conversion",
    summary: "Pour vendre une offre précise, lancer une campagne ou générer des leads depuis une seule page efficace.",
    description: "Le Pack Landing Page concentre le message autour d’un objectif unique : prise de contact, demande de devis, inscription ou lancement d’offre.",
    idealFor: "Campagnes publicitaires, lancements, offres limitées, nouveaux services ou tests de marché.",
    deliverables: ["Page unique orientée conversion", "Structure persuasive", "Formulaire de lead", "CTA WhatsApp ou e-mail", "Version mobile optimisée", "SEO et tracking campagne"],
    process: ["Définition de l’objectif", "Structure persuasive", "Design de la page", "Intégration du formulaire", "Tests de conversion", "Publication"],
    outcome: "Une page claire qui pousse vers une action précise et mesure les résultats.",
    timeline: "5 à 10 jours",
    startingPrice: null,
    useCase: "Choisissez cette offre si vous voulez promouvoir une seule offre, tester une idée ou lancer une campagne rapidement.",
    cta: "Choisir la Landing Page",
    notIncluded: ["Le domaine .dz est inclus si les documents nécessaires sont fournis", "Les domaines .com, .fr ou autres extensions sont ajoutés au budget selon leur prix réel", "La maintenance après livraison reste une option à ajouter"],
    tags: [],
    published: true,
    sortOrder: 3,
  },
  {
    slug: "identite-digitale",
    name: "Pack Identité Digitale",
    eyebrow: "Branding et image de marque",
    summary: "Pour poser une image de marque propre, cohérente et prête à être utilisée sur le web et les réseaux.",
    description: "Le Pack Identité Digitale donne une base visuelle claire à votre marque : logo, couleurs, typographies et supports essentiels.",
    idealFor: "Nouvelles marques, refontes légères, projets qui manquent de cohérence visuelle ou lancements social media.",
    deliverables: ["Logo ou refresh logo", "Palette couleurs", "Typographies", "Mini charte graphique", "Templates social media", "Bannière, avatar et visuels de base"],
    process: ["Brief marque", "Exploration visuelle", "Création des pistes", "Ajustements", "Préparation des fichiers", "Kit de livraison"],
    outcome: "Une identité plus nette, plus cohérente et plus facile à décliner.",
    timeline: "1 à 3 semaines",
    startingPrice: null,
    useCase: "Choisissez cette offre si votre marque manque de cohérence visuelle ou si vous préparez un lancement.",
    cta: "Choisir l’Identité Digitale",
    notIncluded: ["Le dépôt légal ou administratif de la marque n’est pas inclus", "Les supports imprimés complexes sont chiffrés séparément", "Les déclinaisons supplémentaires non prévues sont ajoutées selon le besoin"],
    tags: [],
    published: true,
    sortOrder: 4,
  },
  {
    slug: "social-media",
    name: "Pack Social Media",
    eyebrow: "Présence sociale structurée",
    summary: "Pour construire une présence Instagram ou LinkedIn plus cohérente, reconnaissable et régulière.",
    description: "Le Pack Social Media structure votre image et vos contenus pour que chaque publication serve une direction claire.",
    idealFor: "Marques, commerces, restaurants, coachs, créateurs de services et entreprises qui veulent professionnaliser leurs réseaux.",
    deliverables: ["Direction artistique social media", "Templates réutilisables", "Calendrier éditorial", "Création de posts", "Optimisation bio et profil", "Ligne éditoriale"],
    process: ["Analyse du positionnement", "Définition des piliers de contenu", "Création des templates", "Calendrier éditorial", "Préparation des posts", "Conseils de publication"],
    outcome: "Un feed plus cohérent, plus simple à alimenter et plus reconnaissable.",
    timeline: "2 à 4 semaines",
    startingPrice: null,
    useCase: "Choisissez cette offre si vos réseaux existent déjà mais manquent de cohérence, de structure ou de régularité.",
    cta: "Choisir le Pack Social Media",
    notIncluded: ["La gestion des publicités sponsorisées n’est pas incluse", "La publication quotidienne peut être ajoutée selon le besoin", "Les contenus vidéo complexes sont chiffrés séparément"],
    tags: [],
    published: true,
    sortOrder: 5,
  },
  {
    slug: "full-launch",
    name: "Pack Full Launch",
    eyebrow: "Lancement complet",
    summary: "Pour lancer une marque ou une activité avec site web, identité visuelle et supports social media.",
    description: "Le Pack Full Launch réunit les fondations principales d’un lancement digital : image de marque, site, contenus et configuration technique.",
    idealFor: "Nouvelles marques, startups, indépendants ambitieux ou entreprises qui veulent repartir sur de bonnes bases.",
    deliverables: ["Site web complet", "Identité visuelle", "Templates social media", "SEO de base", "Configuration domaine et hébergement", "Formulaire de contact", "Accompagnement au lancement"],
    process: ["Atelier de cadrage", "Direction artistique", "Création du site", "Création des supports", "Optimisation SEO", "Mise en ligne", "Accompagnement de lancement"],
    outcome: "Un lancement cohérent, professionnel et prêt à être communiqué.",
    timeline: "4 à 8 semaines",
    startingPrice: null,
    useCase: "Choisissez cette offre si vous voulez lancer une marque complète avec site, identité et supports digitaux cohérents.",
    cta: "Choisir le Full Launch",
    notIncluded: ["Le domaine .dz est inclus si les documents nécessaires sont fournis", "Les domaines .com, .fr ou autres extensions sont ajoutés au budget selon leur prix réel", "Les fonctionnalités avancées sur mesure sont chiffrées séparément", "La maintenance après livraison reste une option à ajouter"],
    tags: [],
    published: true,
    sortOrder: 6,
  },
];

export const offers = staticOffers;

export const comparisonRows = [
  { label: "Objectif", presence: "Présence rapide", business: "Site complet", landing: "Conversion", identity: "Image de marque", social: "Réseaux sociaux", launch: "Lancement global" },
  { label: "Pages web", presence: "1 à 5", business: "5 à 10", landing: "1", identity: "Non inclus", social: "Non inclus", launch: "Complet" },
  { label: "Branding", presence: "Léger", business: "Léger", landing: "Adapté", identity: "Inclus", social: "Direction sociale", launch: "Inclus" },
  { label: "SEO de base", presence: "Inclus", business: "SEO local", landing: "Inclus", identity: "Non inclus", social: "Non inclus", launch: "Inclus" },
  { label: "Social media", presence: "Non inclus", business: "Non inclus", landing: "Non inclus", identity: "Templates", social: "Inclus", launch: "Templates" },
  { label: "Maintenance", presence: "Option", business: "Option", landing: "Option", identity: "Non concerné", social: "Non concerné", launch: "Option" },
  { label: "Délai", presence: "1 à 2 sem.", business: "2 à 4 sem.", landing: "5 à 10 j.", identity: "1 à 3 sem.", social: "2 à 4 sem.", launch: "4 à 8 sem." },
];

export const offerFaq = [
  { question: "Est-ce que le domaine est inclus ?", answer: "Le domaine .dz est inclus lorsque les documents nécessaires sont fournis. Les autres extensions comme .com ou .fr sont ajoutées au budget selon leur prix réel." },
  { question: "L’hébergement annuel est-il inclus ?", answer: "Oui, l’hébergement annuel est inclus dans les offres web concernées. Les besoins techniques spécifiques peuvent être discutés avant validation." },
  { question: "La maintenance est-elle obligatoire ?", answer: "Non. La maintenance est une option que vous pouvez ajouter à votre demande si vous souhaitez un suivi après livraison." },
  { question: "Peut-on adapter une offre ?", answer: "Oui. Les packs servent de base claire, puis le périmètre final est ajusté avec vous selon votre projet." },
  { question: "Quand le prix final est-il fixé ?", answer: "Le prix final est validé après discussion du besoin, du contenu, des délais et des options choisies." },
];

function normalizeOffer(offer: Offer): Offer {
  return { ...offer, recommended: offer.recommended || offer.tags.some((tag) => tag.toLowerCase() === "recommandé") };
}

export async function getOffers(includeDrafts = false): Promise<Offer[]> {
  if (!process.env.DATABASE_URL) return staticOffers.map(normalizeOffer);
  try {
    const rows = await prisma.offer.findMany({
      where: includeDrafts ? undefined : { published: true },
      orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
    });
    return rows.map(normalizeOffer);
  } catch {
    return staticOffers.map(normalizeOffer);
  }
}

export async function getOffer(slug: string): Promise<Offer | null> {
  if (!process.env.DATABASE_URL) return staticOffers.map(normalizeOffer).find((offer) => offer.slug === slug) ?? null;
  try {
    const offer = await prisma.offer.findFirst({ where: { slug, published: true } });
    return offer ? normalizeOffer(offer) : null;
  } catch {
    return staticOffers.map(normalizeOffer).find((offer) => offer.slug === slug) ?? null;
  }
}
