import { PrismaClient } from "@prisma/client";
import { demoProjects } from "../src/lib/demo-data";
const prisma = new PrismaClient();
async function main(){ for(const project of demoProjects){ const data={...project}; delete (data as Partial<typeof data>).id; await prisma.project.upsert({where:{slug:data.slug},update:data,create:data}); } }
main().finally(()=>prisma.$disconnect());
