import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { notFound } from "next/navigation";
import { getTeamMember } from "@/lib/team";
import { ProjectCard } from "@/components/projects/project-card";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = await getTeamMember((await params).slug);
  return member ? { title: member.name, description: member.highlight || member.bio } : { title: "Profil introuvable" };
}

export default async function TeamMemberPage({ params }: Props) {
  const member = await getTeamMember((await params).slug);
  if (!member) notFound();
  return <article className="member-page"><Link href="/#equipe" className="back-link"><ArrowLeft size={16} /> Retour à l’équipe</Link><header className="member-hero"><div className="avatar member-avatar">{member.initials}</div><div><p className="eyebrow">{member.role}</p><h1>{member.name}</h1><p>{member.highlight || member.bio}</p></div></header><div className="member-body"><aside><div><span>Contact</span>{member.contact ? <a href={`mailto:${member.contact}`}><Mail size={16} /> {member.contact}</a> : <strong>Sur demande</strong>}</div>{member.location && <div><span>Localisation</span><strong>{member.location}</strong></div>}{member.availability && <div><span>Disponibilité</span><strong>{member.availability}</strong></div>}</aside><section className="member-content"><h2>Profil</h2><p>{member.bio}</p><h2>Compétences</h2><ul className="skills-list">{member.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><div className="member-projects-heading"><h2>Projets réalisés</h2><Link href="/projects">Tous les projets <ArrowUpRight size={16} /></Link></div>{member.projects.length ? <div className="projects-grid member-projects">{member.projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div> : <p className="admin-empty">Aucun projet publié pour ce membre.</p>}</section></div></article>;
}
