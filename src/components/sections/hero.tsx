import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-orbit" aria-hidden="true"><span /><span /></div>
      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Studio digital · Algérie</p>
        <h1>On transforme<br />vos idées en <span className="gradient-text">impact.</span></h1>
        <div className="hero-bottom">
          <p>Nous concevons des expériences digitales singulières qui donnent aux marques une vraie place en ligne.</p>
          <div className="hero-actions"><ArrowLink href="#projets">Voir nos projets</ArrowLink><ArrowLink href="#contact" variant="ghost">Nous contacter</ArrowLink></div>
        </div>
      </div>
      <Image src="/brand/kivo-mark.png" width={760} height={760} alt="Symbole KIVO" className="hero-mark" priority />
      <a className="scroll-hint" href="#agence"><ArrowDown size={16} /> Découvrir</a>
    </section>
  );
}
