import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { OffersSection } from "@/components/sections/offers-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";
import { getPublishedProjects } from "@/lib/projects";

export const revalidate = 60;

export default async function Home() {
  const projects = await getPublishedProjects(true);
  return <><Hero /><About /><Services /><OffersSection /><ProjectsSection projects={projects} /><Team /><Contact /></>;
}
