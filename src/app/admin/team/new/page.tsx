import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { createTeamMember } from "@/actions/team";
import { AdminNav } from "@/components/admin/admin-nav";
import { TeamMemberForm } from "@/components/admin/team-member-form";

export const dynamic = "force-dynamic";

export default async function NewTeamMemberPage() {
  if (!(await auth())) redirect("/admin/login");
  return <div className="admin-layout"><AdminNav /><div className="admin-main narrow"><header className="admin-heading"><div><p className="eyebrow">Équipe</p><h1>Nouveau profil</h1></div></header><TeamMemberForm action={createTeamMember} /></div></div>;
}
