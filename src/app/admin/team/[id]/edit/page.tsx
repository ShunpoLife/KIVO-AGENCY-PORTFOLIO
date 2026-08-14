import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { updateTeamMember } from "@/actions/team";
import { prisma } from "@/lib/prisma";
import { AdminNav } from "@/components/admin/admin-nav";
import { TeamMemberForm } from "@/components/admin/team-member-form";

export const dynamic = "force-dynamic";

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await auth())) redirect("/admin/login");
  const member = await prisma.teamMember.findUnique({ where: { id: (await params).id } });
  if (!member) notFound();
  return <div className="admin-layout"><AdminNav /><div className="admin-main narrow"><header className="admin-heading"><div><p className="eyebrow">Équipe</p><h1>Modifier le profil</h1></div></header><TeamMemberForm member={member} action={updateTeamMember.bind(null, member.id)} /></div></div>;
}
