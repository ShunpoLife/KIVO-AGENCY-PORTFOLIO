import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="eyebrow">Un projet en tête ?</p>
        <Link href="mailto:contact@kivo.agency" className="footer-mail">contact@kivo.agency <ArrowUpRight /></Link>
      </div>
      <div className="footer-grid">
        <div><Logo /><p>Studio digital indépendant.<br />Web, social & identité.</p></div>
        <div><span>Navigation</span><Link href="/#agence">Agence</Link><Link href="/projects">Projets</Link><Link href="/#contact">Contact</Link></div>
        <div><span>Social</span><Link href="#">Instagram ↗</Link><Link href="#">LinkedIn ↗</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} KIVO</span><span>Paris · France</span><Link href="/admin/login">Admin</Link></div>
    </footer>
  );
}
