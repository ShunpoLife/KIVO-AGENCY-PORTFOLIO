import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/types";
import { yearOf } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-visual" aria-label={`Voir le projet ${project.title}`}>
        {project.coverImage ? <Image src={project.coverImage} alt={`Aperçu du projet ${project.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" /> : <div className="project-placeholder">{project.title.slice(0, 1)}</div>}
        <span className="project-open"><ArrowUpRight /></span>
      </Link>
      <div className="project-meta"><span>0{index + 1}</span><div><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.category} · {yearOf(project.completionDate)}</p></div></div>
    </article>
  );
}
