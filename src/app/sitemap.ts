import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/lib/projects";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; const projects = await getPublishedProjects(); return [{ url: base, lastModified: new Date(), priority: 1 }, { url: `${base}/projects`, lastModified: new Date(), priority: .8 }, ...projects.map(p => ({ url: `${base}/projects/${p.slug}`, lastModified: p.updatedAt, priority: .7 }))]; }
