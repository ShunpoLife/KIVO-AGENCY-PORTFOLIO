import { PrismaClient } from "@prisma/client";
import { demoProjects, demoTeamMembers } from "../src/lib/demo-data";
import { staticOffers } from "../src/lib/offers";
const prisma = new PrismaClient();
async function main(){
  const members = await Promise.all(demoTeamMembers.map((member) => {
    const data = { ...member };
    delete (data as Partial<typeof data>).id;
    return prisma.teamMember.upsert({ where: { slug: data.slug }, update: data, create: data });
  }));
  for(const [index, project] of demoProjects.entries()){
    const data={
      title: project.title,
      slug: project.slug,
      shortDescription: project.shortDescription,
      description: project.description,
      client: project.client,
      category: project.category,
      technologies: project.technologies,
      coverImage: project.coverImage,
      gallery: project.gallery,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      challenges: project.challenges,
      contribution: project.contribution,
      completionDate: project.completionDate,
      featured: project.featured,
      published: project.published,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      memberId: members[index % 3]?.id || null,
    };
    await prisma.project.upsert({where:{slug:data.slug},update:data,create:data});
  }
  for (const offer of staticOffers) {
    await prisma.offer.upsert({
      where: { slug: offer.slug },
      update: {
        name: offer.name, eyebrow: offer.eyebrow, summary: offer.summary, description: offer.description,
        idealFor: offer.idealFor, useCase: offer.useCase, outcome: offer.outcome, timeline: offer.timeline,
        startingPrice: offer.startingPrice || null,
        cta: offer.cta, deliverables: offer.deliverables, process: offer.process, notIncluded: offer.notIncluded,
        tags: offer.tags, published: offer.published ?? true, sortOrder: offer.sortOrder ?? 0,
      },
      create: {
        name: offer.name, slug: offer.slug, eyebrow: offer.eyebrow, summary: offer.summary, description: offer.description,
        idealFor: offer.idealFor, useCase: offer.useCase, outcome: offer.outcome, timeline: offer.timeline,
        startingPrice: offer.startingPrice || null,
        cta: offer.cta, deliverables: offer.deliverables, process: offer.process, notIncluded: offer.notIncluded,
        tags: offer.tags, published: offer.published ?? true, sortOrder: offer.sortOrder ?? 0,
      },
    });
  }
}
main().finally(()=>prisma.$disconnect());
