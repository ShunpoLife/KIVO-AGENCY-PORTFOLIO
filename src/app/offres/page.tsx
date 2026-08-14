import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { comparisonRows, getOffers, offerFaq } from "@/lib/offers";

export const metadata: Metadata = {
  title: "Offres",
  description: "Découvrez les packs KIVO pour création de site web, branding, social media, landing page et maintenance en Algérie.",
};

export default async function OffersPage() {
  const offers = await getOffers();
  return <div className="page-shell offers-page"><header className="page-hero offers-hero"><p className="eyebrow">Offres · KIVO</p><h1>Des packs clairs<br /><span>pour avancer vite.</span></h1><p>Choisissez un format adapté à votre besoin : site web, branding, social media, lancement complet ou maintenance.</p></header><section className="offers-grid">{offers.map((offer, index) => <Link href={`/offres/${offer.slug}`} className={offer.recommended ? "offer-card offer-card-recommended" : "offer-card"} key={offer.slug}>{offer.tags.length > 0 && <div className="offer-tags">{offer.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>}<span>0{index + 1}</span><p className="eyebrow">{offer.eyebrow}</p><h2>{offer.name}</h2>{offer.startingPrice && <p className="offer-price">À partir de <strong>{offer.startingPrice}</strong></p>}<p>{offer.summary}</p><div className="offer-card-footer"><strong>{offer.timeline}</strong><ArrowUpRight size={18} /></div></Link>)}</section><section className="offer-comparison"><div className="section-index"><span>01</span><span>Comparer rapidement</span></div><div className="comparison-table"><div className="comparison-row comparison-head"><span>Critère</span><span>Présence</span><span>Business</span><span>Landing</span><span>Identité</span><span>Social</span><span>Launch</span></div>{comparisonRows.map((row) => <div className="comparison-row" key={row.label}><strong>{row.label}</strong><span>{row.presence}</span><span>{row.business}</span><span>{row.landing}</span><span>{row.identity}</span><span>{row.social}</span><span>{row.launch}</span></div>)}</div></section><section className="offers-faq"><div className="section-index"><span>02</span><span>Questions fréquentes</span></div><div className="faq-list">{offerFaq.map((item) => <article key={item.question}><h2>{item.question}</h2><p>{item.answer}</p></article>)}</div></section></div>;
}
