"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("loading");
    const response = await fetch("/api/contact", { method: "POST", body: new FormData(event.currentTarget) });
    setState(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="section-index light"><span>06</span><span>Contact</span></div>
      <div className="contact-grid"><div className="contact-intro"><h2>Votre prochain projet<br />commence <span>ici.</span></h2><p>Parlez-nous de votre idée, de vos objectifs ou simplement de ce qui vous bloque. On vous répond sous 48 h.</p><a href="mailto:kicoagency@siteprofree.email">kicoagency@siteprofree.email <ArrowUpRight /></a></div>
      <form onSubmit={submit} className="contact-form"><div className="field-row"><label>Votre nom<input name="name" required minLength={2} autoComplete="name" placeholder="Votre nom" /></label><label>Votre e-mail<input name="email" required type="email" autoComplete="email" placeholder="contact@entreprise.com" /></label></div><div className="field-row"><label>Votre téléphone <span>(optionnel)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+213 000 000 000" /></label><label>Votre entreprise <span>(optionnel)</span><input name="company" autoComplete="organization" placeholder="Nom de l’entreprise" /></label></div><label>Parlez-nous du projet<textarea name="message" required minLength={20} rows={4} placeholder="Votre contexte, vos objectifs, vos délais…" /></label><input name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" /><button type="submit" disabled={state === "loading"}>{state === "loading" ? "Envoi…" : state === "success" ? <><Check size={18} /> Message envoyé</> : <>Envoyer le message <ArrowUpRight size={18} /></>}</button>{state === "error" && <p className="form-error" role="alert">Le message n’a pas pu être envoyé. Écrivez-nous directement par e-mail.</p>}</form></div>
    </section>
  );
}
