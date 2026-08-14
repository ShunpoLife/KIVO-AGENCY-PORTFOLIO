import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AdminNav } from "@/components/admin/admin-nav";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteProject, togglePublished } from "@/actions/projects";
export const dynamic = "force-dynamic";
export default async function AdminProjectsPage() { if (!(await auth())) redirect("/admin/login"); const projects = await prisma.project.findMany({include:{member:true},orderBy:{updatedAt:"desc"}}); return <div className="admin-layout"><AdminNav /><div className="admin-main"><header className="admin-heading"><div><p className="eyebrow">Contenu</p><h1>Projets</h1></div><Link href="/admin/projects/new" className="admin-primary">+ Nouveau projet</Link></header><div className="admin-panel"><div className="admin-table-head"><span>Projet</span><span>Statut</span><span>Actions</span></div>{projects.map(project=><div className="admin-table-row" key={project.id}><div><strong>{project.title}</strong><span>{project.category} · {project.member?.name || "Non assigné"} · {project.featured ? "À la une" : "Standard"}</span></div><form action={togglePublished.bind(null,project.id,project.published)}><button className={project.published ? "status published" : "status"}>{project.published ? "Publié" : "Brouillon"}</button></form><div className="admin-actions"><Link href={`/admin/projects/${project.id}/edit`}>Modifier</Link><DeleteButton action={deleteProject.bind(null,project.id)} /></div></div>)}{!projects.length && <p className="admin-empty">Aucun projet pour le moment.</p>}</div></div></div>; }
