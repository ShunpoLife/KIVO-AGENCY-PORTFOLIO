"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const links = [
  ["Agence", "/#agence"], ["Services", "/#services"], ["Projets", "/projects"], ["Équipe", "/#equipe"], ["Contact", "/#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigation principale">
        <Link href="/" aria-label="KIVO, accueil"><Logo /></Link>
        <div className="desktop-nav">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </div>
        <Link href="/#contact" className="nav-cta">Parlons de votre projet <span>↗</span></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="mobile-nav">
          {links.map(([label, href], index) => <Link key={label} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
        </div>
      )}
    </header>
  );
}
