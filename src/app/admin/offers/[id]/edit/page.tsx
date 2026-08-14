import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { updateOffer } from "@/actions/offers";
import { prisma } from "@/lib/prisma";
import { AdminNav } from "@/components/admin/admin-nav";
import { OfferForm } from "@/components/admin/offer-form";

export const dynamic = "force-dynamic";

export default async function EditOfferPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await auth())) redirect("/admin/login");
  const offer = await prisma.offer.findUnique({ where: { id: (await params).id } });
  if (!offer) notFound();
  return <div className="admin-layout"><AdminNav /><div className="admin-main narrow"><header className="admin-heading"><div><p className="eyebrow">Offres</p><h1>Modifier l’offre</h1></div></header><OfferForm offer={offer} action={updateOffer.bind(null, offer.id)} /></div></div>;
}
