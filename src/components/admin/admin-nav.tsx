"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Logo } from "@/components/logo";
export function AdminNav() { return <aside className="admin-nav"><Logo /><nav><Link href="/admin">Vue d’ensemble</Link><Link href="/admin/projects">Projets</Link><Link href="/admin/projects/new">Nouveau projet</Link><Link href="/admin/offers">Offres</Link><Link href="/admin/offers/new">Nouvelle offre</Link><Link href="/admin/team">Équipe</Link><Link href="/admin/team/new">Nouveau profil</Link><Link href="/" target="_blank">Voir le site ↗</Link></nav><button onClick={() => signOut({ callbackUrl: "/admin/login" })}>Se déconnecter</button></aside>; }
