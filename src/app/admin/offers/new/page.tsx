import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { createOffer } from "@/actions/offers";
import { AdminNav } from "@/components/admin/admin-nav";
import { OfferForm } from "@/components/admin/offer-form";

export const dynamic = "force-dynamic";

export default async function NewOfferPage() {
  if (!(await auth())) redirect("/admin/login");
  return <div className="admin-layout"><AdminNav /><div className="admin-main narrow"><header className="admin-heading"><div><p className="eyebrow">Offres</p><h1>Nouvelle offre</h1></div></header><OfferForm action={createOffer} /></div></div>;
}
