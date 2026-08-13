import { prisma } from "@/lib/prisma";
import { demoProjects } from "@/lib/demo-data";
import type { PortfolioProject } from "@/lib/types";

export async function getPublishedProjects(featuredOnly = false): Promise<PortfolioProject[]> {
  if (!process.env.DATABASE_URL) return demoProjects.filter((project) => !featuredOnly || project.featured);
  try {
    return await prisma.project.findMany({
      where: { published: true, ...(featuredOnly ? { featured: true } : {}) },
      orderBy: [{ featured: "desc" }, { completionDate: "desc" }],
    });
  } catch {
    return demoProjects.filter((project) => !featuredOnly || project.featured);
  }
}

export async function getProject(slug: string): Promise<PortfolioProject | null> {
  if (!process.env.DATABASE_URL) return demoProjects.find((project) => project.slug === slug) ?? null;
  try {
    return await prisma.project.findFirst({ where: { slug, published: true } });
  } catch {
    return demoProjects.find((project) => project.slug === slug) ?? null;
  }
}
