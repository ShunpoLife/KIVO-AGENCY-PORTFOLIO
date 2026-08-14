import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { createProject } from "@/actions/projects";
import { AdminNav } from "@/components/admin/admin-nav";
import { ProjectForm } from "@/components/admin/project-form";
import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";
export default async function NewProjectPage() { if (!(await auth())) redirect("/admin/login"); const members = await prisma.teamMember.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }] }); return <div className="admin-layout"><AdminNav /><div className="admin-main narrow"><header className="admin-heading"><div><p className="eyebrow">Portfolio</p><h1>Nouveau projet</h1></div></header><ProjectForm members={members} action={createProject} /></div></div>; }
