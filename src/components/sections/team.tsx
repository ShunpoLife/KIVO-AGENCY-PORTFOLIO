import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPublishedTeamMembers } from "@/lib/team";

export async function Team() {
  const members = await getPublishedTeamMembers();
  return (
    <section id="equipe" className="section team-section">
      <div className="section-index"><span>05</span><span>L’équipe</span></div>
      <div className="team-layout"><h2>Les humains<br />derrière <span>KIVO.</span></h2><div className="team-list">
        {members.map((member) => <article className="team-member" key={member.name}><div className="avatar">{member.initials}</div><div><p className="eyebrow">{member.role}</p><h3>{member.name}</h3><p>{member.bio}</p></div><Link href={`/team/${member.slug}`} aria-label={`Voir le profil de ${member.name}`}><ArrowUpRight /></Link></article>)}
      </div></div>
    </section>
  );
}
