import { Code2, PenTool, ArrowUpRight } from "lucide-react";

const services = [
  { number: "01", icon: Code2, title: "Web development", intro: "Des sites qui chargent vite, racontent juste et convertissent mieux.", items: ["Landing pages", "Sites vitrines & portfolios", "Applications web sur mesure", "Responsive & performance"] },
  { number: "02", icon: PenTool, title: "Social media", intro: "Une présence cohérente qui arrête le scroll et construit votre communauté.", items: ["Stratégie éditoriale", "Création de contenu", "Design de posts", "Identité visuelle sociale"] },
];

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-index light"><span>02</span><span>Nos expertises</span></div>
      <div className="services-heading"><h2>Deux expertises.<br /><span>Une vision.</span></h2><p>Tout ce qu’il faut pour construire une présence digitale forte, cohérente et mémorable.</p></div>
      <div className="services-grid">
        {services.map((service) => { const Icon = service.icon; return (
          <article className="service-card" key={service.title}>
            <div className="service-card-top"><span>{service.number}</span><Icon size={26} /></div>
            <h3>{service.title}</h3><p>{service.intro}</p>
            <ul>{service.items.map(item => <li key={item}><ArrowUpRight size={14} />{item}</li>)}</ul>
          </article>
        ); })}
      </div>
    </section>
  );
}
