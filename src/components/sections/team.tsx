import { ArrowUpRight } from "lucide-react";

const members = [
  { initials: "SK", name: "Salim K.", role: "Co-fondateur · Développeur web", bio: "Obsédé par les interfaces rapides, les détails propres et les idées qui fonctionnent vraiment." },
  { initials: "KV", name: "L’équipe créative", role: "Design · Social media", bio: "Une direction artistique claire et une culture du contenu pensée pour rendre chaque marque reconnaissable." },
];

export function Team() {
  return (
    <section id="equipe" className="section team-section">
      <div className="section-index"><span>04</span><span>L’équipe</span></div>
      <div className="team-layout"><h2>Les humains<br />derrière <span>KIVO.</span></h2><div className="team-list">
        {members.map((member) => <article className="team-member" key={member.name}><div className="avatar">{member.initials}</div><div><p className="eyebrow">{member.role}</p><h3>{member.name}</h3><p>{member.bio}</p></div><a href="mailto:contact@kivo.agency" aria-label={`Contacter ${member.name}`}><ArrowUpRight /></a></article>)}
      </div></div>
    </section>
  );
}
