import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/projects/projects-browser";
import { getPublishedProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projets", description: "Découvrez une sélection de projets web et social media réalisés par KIVO." };
export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();
  return <div className="page-shell"><header className="page-hero"><p className="eyebrow">Portfolio · 2024—{new Date().getFullYear()}</p><h1>Des projets qui<br /><span>font la différence.</span></h1><p>Sites web, expériences digitales et identités sociales conçus avec intention.</p></header><ProjectsBrowser projects={projects} /></div>;
}
