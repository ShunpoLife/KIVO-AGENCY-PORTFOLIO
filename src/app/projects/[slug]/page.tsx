import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import { yearOf } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return project ? { title: project.title, description: project.shortDescription, openGraph: { images: project.coverImage ? [project.coverImage] : [] } } : { title: "Projet introuvable" };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProject((await params).slug); if (!project) notFound();
  return <article className="project-page"><Link href="/projects" className="back-link"><ArrowLeft size={16} /> Tous les projets</Link><header className="project-hero"><p className="eyebrow">{project.category} · {yearOf(project.completionDate)}</p><h1>{project.title}</h1><p>{project.shortDescription}</p></header><div className="project-cover">{project.coverImage && <Image src={project.coverImage} alt={`Aperçu de ${project.title}`} fill priority sizes="100vw" />}</div><div className="project-body"><aside><div><span>Client</span><strong>{project.client || "Confidentiel"}</strong></div><div><span>Année</span><strong>{yearOf(project.completionDate)}</strong></div>{project.member && <div><span>Réalisé par</span><strong><Link href={`/team/${project.member.slug}`}>{project.member.name}</Link></strong></div>}<div><span>Technologies</span><strong>{project.technologies.join(", ")}</strong></div>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Voir le site <ArrowUpRight size={16} /></a>}</aside><div className="project-story"><h2>Le projet</h2><p>{project.description}</p>{project.challenges && <><h3>Le défi</h3><p>{project.challenges}</p></>}{project.member && <><h3>Membre responsable</h3><p>{project.member.name} a réalisé ce projet côté KIVO.</p></>}</div></div></article>;
}
