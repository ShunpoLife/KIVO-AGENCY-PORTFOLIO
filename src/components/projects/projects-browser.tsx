"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import type { PortfolioProject } from "@/lib/types";

export function ProjectsBrowser({ projects }: { projects: PortfolioProject[] }) {
  const [filter, setFilter] = useState("Tous");
  const filters = ["Tous", ...Array.from(new Set(projects.map((project) => project.category)))];
  const visible = useMemo(() => filter === "Tous" ? projects : projects.filter((project) => project.category === filter), [filter, projects]);
  return <><div className="filter-bar" aria-label="Filtrer les projets">{filters.map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div><div className="projects-grid projects-all">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></>;
}
