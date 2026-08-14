import { ArrowLink } from "@/components/ui/arrow-link";
import { ProjectCard } from "@/components/projects/project-card";
import type { PortfolioProject } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: PortfolioProject[] }) {
  return (
    <section id="projets" className="section projects-section">
      <div className="section-index"><span>04</span><span>Projets sélectionnés</span></div>
      <div className="projects-heading"><h2>Ce qu’on aime<br /><span>construire.</span></h2><ArrowLink href="/projects" variant="ghost">Tous les projets</ArrowLink></div>
      <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    </section>
  );
}
