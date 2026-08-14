import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { updateProject } from "@/actions/projects";
import { prisma } from "@/lib/prisma";
import { AdminNav } from "@/components/admin/admin-nav";
import { ProjectForm } from "@/components/admin/project-form";
export const dynamic = "force-dynamic";
export default async function EditProjectPage({params}:{params:Promise<{id:string}>}) { if (!(await auth())) redirect("/admin/login"); const [project, members]=await Promise.all([prisma.project.findUnique({where:{id:(await params).id}}), prisma.teamMember.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }] })]); if(!project) notFound(); return <div className="admin-layout"><AdminNav /><div className="admin-main narrow"><header className="admin-heading"><div><p className="eyebrow">Portfolio</p><h1>Modifier le projet</h1></div></header><ProjectForm project={project} members={members} action={updateProject.bind(null,project.id)} /></div></div>; }
