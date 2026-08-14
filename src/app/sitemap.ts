import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/lib/projects";
import { getOffers } from "@/lib/offers";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; const [projects, offers] = await Promise.all([getPublishedProjects(), getOffers()]); return [{ url: base, lastModified: new Date(), priority: 1 }, { url: `${base}/offres`, lastModified: new Date(), priority: .85 }, ...offers.map(offer => ({ url: `${base}/offres/${offer.slug}`, lastModified: new Date(), priority: .75 })), { url: `${base}/projects`, lastModified: new Date(), priority: .8 }, ...projects.map(p => ({ url: `${base}/projects/${p.slug}`, lastModified: p.updatedAt, priority: .7 }))]; }
