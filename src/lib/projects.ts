import { prisma } from "@/lib/prisma";
import { demoProjects, demoTeamMembers } from "@/lib/demo-data";
import type { PortfolioProject } from "@/lib/types";

export async function getPublishedProjects(featuredOnly = false): Promise<PortfolioProject[]> {
  const fallback = demoProjects.map((project, index) => ({ ...project, member: demoTeamMembers[index % 3], memberId: demoTeamMembers[index % 3].id }));
  if (!process.env.DATABASE_URL) return fallback.filter((project) => !featuredOnly || project.featured);
  try {
    return await prisma.project.findMany({
      where: { published: true, ...(featuredOnly ? { featured: true } : {}) },
      include: { member: true },
      orderBy: [{ featured: "desc" }, { completionDate: "desc" }],
    });
  } catch {
    return fallback.filter((project) => !featuredOnly || project.featured);
  }
}

export async function getProject(slug: string): Promise<PortfolioProject | null> {
  const fallback = demoProjects.map((project, index) => ({ ...project, member: demoTeamMembers[index % 3], memberId: demoTeamMembers[index % 3].id }));
  if (!process.env.DATABASE_URL) return fallback.find((project) => project.slug === slug) ?? null;
  try {
    return await prisma.project.findFirst({ where: { slug, published: true }, include: { member: true } });
  } catch {
    return fallback.find((project) => project.slug === slug) ?? null;
  }
}
