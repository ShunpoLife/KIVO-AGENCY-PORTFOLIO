import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { getOffer, getOffers, maintenanceAddOn } from "@/lib/offers";
import { OfferRequestForm } from "@/components/offers/offer-request-form";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const offers = await getOffers();
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const offer = await getOffer((await params).slug);
  return offer ? { title: offer.name, description: offer.summary } : { title: "Offre introuvable" };
}

export default async function OfferPage({ params }: Props) {
  const offer = await getOffer((await params).slug);
  if (!offer) notFound();
  return <article className="offer-page"><Link href="/offres" className="back-link"><ArrowLeft size={16} /> Toutes les offres</Link><header className="offer-detail-hero">{offer.tags.length > 0 && <div className="detail-tags">{offer.tags.map((tag) => <span className="recommended-pill" key={tag}>{tag}</span>)}</div>}<p className="eyebrow">{offer.eyebrow}</p><h1>{offer.name}</h1>{offer.startingPrice && <p className="offer-detail-price">À partir de <strong>{offer.startingPrice}</strong></p>}<p>{offer.description}</p><div className="offer-detail-actions"><a href="#demande-offre" className="arrow-link offer-primary-cta"><span>{offer.cta}</span><ArrowUpRight size={18} /></a><span>{offer.timeline}</span></div></header><div className="offer-detail-body"><aside><div><span>Idéal pour</span><strong>{offer.idealFor}</strong></div><div><span>Cas d’usage</span><strong>{offer.useCase}</strong></div><div><span>Résultat attendu</span><strong>{offer.outcome}</strong></div></aside><section className="offer-detail-content"><h2>Ce qui est inclus</h2><ul className="offer-check-list">{offer.deliverables.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul><h2>Déroulé</h2><ol className="offer-process">{offer.process.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol><h2>À prévoir en plus</h2><ul className="offer-note-list">{offer.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul><section className="maintenance-addon"><div><p className="eyebrow">Option à ajouter</p><h2>{maintenanceAddOn.name}</h2><p>{maintenanceAddOn.summary}</p></div><ul>{maintenanceAddOn.deliverables.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><a href="#demande-offre" className="maintenance-cta">Ajouter la maintenance à ma demande <ArrowUpRight size={18} /></a></section></section></div><OfferRequestForm offerName={offer.name} /></article>;
}
