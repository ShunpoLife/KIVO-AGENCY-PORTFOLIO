import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { getOffers } from "@/lib/offers";

export async function OffersSection() {
  const offers = await getOffers();
  const visible = [...offers].sort((a, b) => Number(Boolean(b.recommended)) - Number(Boolean(a.recommended))).slice(0, 3);
  const remaining = Math.max(offers.length - visible.length, 0);

  return (
    <section id="offres" className="section home-offers-section">
      <div className="section-index"><span>03</span><span>Offres</span></div>
      <div className="home-offers-heading"><h2>Des packs simples<br /><span>à choisir.</span></h2><div><p>Un point de départ clair pour cadrer votre besoin, puis un échange direct pour ajuster le périmètre final.</p><ArrowLink href="/offres" variant="ghost">Voir toutes les offres</ArrowLink></div></div>
      <div className="home-offers-grid">
        {visible.map((offer, index) => <Link href={`/offres/${offer.slug}`} className={offer.recommended ? "home-offer-card home-offer-card-featured" : "home-offer-card"} key={offer.slug}>{offer.tags.length > 0 && <div className="offer-tags">{offer.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>}<span>0{index + 1}</span><p className="eyebrow">{offer.eyebrow}</p><h3>{offer.name}</h3>{offer.startingPrice && <p className="offer-price">À partir de <strong>{offer.startingPrice}</strong></p>}<p>{offer.summary}</p><div className="offer-card-footer"><strong>{offer.timeline}</strong><ArrowUpRight size={18} /></div></Link>)}
      </div>
      {remaining > 0 && <Link href="/offres" className="home-offers-more"><span>+{remaining}</span><p>Autres offres disponibles selon votre besoin</p><ArrowUpRight size={18} /></Link>}
    </section>
  );
}
