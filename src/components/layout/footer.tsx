import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="eyebrow">Un projet en tête ?</p>
        <Link href="mailto:kicoagency@siteprofree.email" className="footer-mail">kicoagency@siteprofree.email <ArrowUpRight /></Link>
      </div>
      <div className="footer-grid">
        <div><Logo /><p>Studio digital indépendant.<br />Web, social & identité.</p></div>
        <div><span>Navigation</span><Link href="/#agence">Agence</Link><Link href="/offres">Offres</Link><Link href="/projects">Projets</Link><Link href="/#contact">Contact</Link></div>
        <div><span>Social</span><Link href="#">Instagram ↗</Link><Link href="#">LinkedIn ↗</Link></div>
      </div>
      <div className="footer-signature" aria-hidden="true">
        <Image src="/brand/kivo-footer-signature.webp" alt="" width={2200} height={1238} sizes="100vw" />
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} KIVO</span><span>Algérie</span><Link href="/admin/login">Admin</Link></div>
    </footer>
  );
}
