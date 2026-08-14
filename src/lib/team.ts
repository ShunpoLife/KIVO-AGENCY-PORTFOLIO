import { prisma } from "@/lib/prisma";
import { demoProjects, demoTeamMembers } from "@/lib/demo-data";
import type { PortfolioProject, TeamMember } from "@/lib/types";

export async function getPublishedTeamMembers(): Promise<TeamMember[]> {
  if (!process.env.DATABASE_URL) return demoTeamMembers;
  try {
    return await prisma.teamMember.findMany({ where: { published: true }, orderBy: [{ sortOrder: "asc" }, { name: "asc" }] });
  } catch {
    return demoTeamMembers;
  }
}

export async function getTeamMember(slug: string): Promise<(TeamMember & { projects: PortfolioProject[] }) | null> {
  if (!process.env.DATABASE_URL) {
    const member = demoTeamMembers.find((item) => item.slug === slug);
    if (!member) return null;
    return { ...member, projects: demoProjects.slice(0, 3) };
  }
  try {
    return await prisma.teamMember.findFirst({
      where: { slug, published: true },
      include: { projects: { where: { published: true }, orderBy: [{ featured: "desc" }, { completionDate: "desc" }] } },
    });
  } catch {
    const member = demoTeamMembers.find((item) => item.slug === slug);
    return member ? { ...member, projects: demoProjects.slice(0, 3) } : null;
  }
}
