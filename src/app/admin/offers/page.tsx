import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { deleteOffer } from "@/actions/offers";
import { prisma } from "@/lib/prisma";
import { AdminNav } from "@/components/admin/admin-nav";
import { DeleteButton } from "@/components/admin/delete-button";

export const dynamic = "force-dynamic";

export default async function AdminOffersPage() {
  if (!(await auth())) redirect("/admin/login");
  const offers = await prisma.offer.findMany({ orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] });
  return <div className="admin-layout"><AdminNav /><div className="admin-main"><header className="admin-heading"><div><p className="eyebrow">Offres</p><h1>Packs commerciaux</h1></div><Link href="/admin/offers/new" className="admin-primary">+ Nouvelle offre</Link></header><div className="admin-panel"><div className="admin-table-head"><span>Offre</span><span>Statut</span><span>Actions</span></div>{offers.map((offer) => <div className="admin-table-row" key={offer.id}><div><strong>{offer.name}</strong><span>{offer.tags.length ? offer.tags.join(", ") : "Sans tag"} · {offer.timeline}</span></div><span className={offer.published ? "status published" : "status"}>{offer.published ? "Publié" : "Brouillon"}</span><div className="admin-actions"><Link href={`/admin/offers/${offer.id}/edit`}>Modifier</Link><DeleteButton action={deleteOffer.bind(null, offer.id)} /></div></div>)}{!offers.length && <p className="admin-empty">Aucune offre pour le moment.</p>}</div></div></div>;
}
