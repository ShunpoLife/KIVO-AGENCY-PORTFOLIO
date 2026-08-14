import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { deleteTeamMember } from "@/actions/team";
import { prisma } from "@/lib/prisma";
import { AdminNav } from "@/components/admin/admin-nav";
import { DeleteButton } from "@/components/admin/delete-button";

export const dynamic = "force-dynamic";

export default async function AdminTeamPage() {
  if (!(await auth())) redirect("/admin/login");
  const members = await prisma.teamMember.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }] });
  return <div className="admin-layout"><AdminNav /><div className="admin-main"><header className="admin-heading"><div><p className="eyebrow">Équipe</p><h1>Profils membres</h1></div><Link href="/admin/team/new" className="admin-primary">+ Nouveau profil</Link></header><div className="admin-panel"><div className="admin-table-head"><span>Membre</span><span>Statut</span><span>Actions</span></div>{members.map((member) => <div className="admin-table-row" key={member.id}><div><strong>{member.name}</strong><span>{member.role}</span></div><span className={member.published ? "status published" : "status"}>{member.published ? "Publié" : "Brouillon"}</span><div className="admin-actions"><Link href={`/admin/team/${member.id}/edit`}>Modifier</Link><DeleteButton action={deleteTeamMember.bind(null, member.id)} /></div></div>)}{!members.length && <p className="admin-empty">Aucun profil pour le moment.</p>}</div></div></div>;
}
