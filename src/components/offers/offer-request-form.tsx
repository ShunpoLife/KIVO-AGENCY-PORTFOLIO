"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function OfferRequestForm({ offerName }: { offerName: string }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [maintenance, setMaintenance] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const response = await fetch("/api/contact", { method: "POST", body: new FormData(event.currentTarget) });
    setState(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <section id="demande-offre" className="offer-request">
      <div>
        <p className="eyebrow">Demande d’offre</p>
        <h2>Parlez-nous de votre projet.</h2>
        <p>L’offre sélectionnée est déjà renseignée. Ajoutez vos informations et le contexte du projet pour qu’on puisse vous répondre précisément.</p>
      </div>
      <form onSubmit={submit} className="offer-request-form">
        <label>Offre sélectionnée<input name="offer" readOnly value={offerName} /></label>
        <div className="field-row"><label>Votre nom<input name="name" required minLength={2} autoComplete="name" placeholder="Votre nom" /></label><label>Votre e-mail<input name="email" required type="email" autoComplete="email" placeholder="contact@entreprise.com" /></label></div>
        <div className="field-row"><label>Téléphone <span>(optionnel)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+213 000 000 000" /></label><label>Entreprise <span>(optionnel)</span><input name="company" autoComplete="organization" placeholder="Nom de l’entreprise" /></label></div>
        <div className="maintenance-toggle"><input type="hidden" name="maintenance" value={maintenance ? "Oui" : "Non"} /><button type="button" onClick={() => setMaintenance(!maintenance)} aria-pressed={maintenance}>{maintenance ? <><Check size={18} /> Maintenance ajoutée</> : "Ajouter l’option maintenance"}</button><p>Option pour garder le site à jour après la livraison. Le tarif final sera discuté selon le besoin.</p></div>
        <label>Délai souhaité <span>(optionnel)</span><input name="timeline" placeholder="Ex. 2 semaines" /></label>
        <label>Contexte du projet<textarea name="message" required minLength={20} rows={5} placeholder="Votre objectif, vos besoins, vos délais, vos contraintes…" /></label>
        <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button type="submit" disabled={state === "loading"}>{state === "loading" ? "Envoi…" : state === "success" ? <><Check size={18} /> Demande envoyée</> : <>Envoyer la demande <ArrowUpRight size={18} /></>}</button>
        {state === "error" && <p className="form-error" role="alert">La demande n’a pas pu être envoyée. Écrivez-nous directement par e-mail.</p>}
      </form>
    </section>
  );
}
