import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Logo } from "@/components/logo";
import { LoginForm } from "@/components/admin/login-form";
export const dynamic = "force-dynamic";
export default async function LoginPage() { if (await auth()) redirect("/admin"); return <div className="admin-login"><Logo /><div><p className="eyebrow">Administration</p><h1>Heureux de vous<br />revoir.</h1><p>Connectez-vous pour gérer les projets KIVO.</p><LoginForm /></div></div>; }
