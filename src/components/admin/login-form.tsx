"use client";
import { useActionState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [state, action, pending] = useActionState(async (_: string | null, formData: FormData) => {
    const result = await signIn("credentials", { email: formData.get("email"), password: formData.get("password"), redirect: false });
    if (result?.error) return "Identifiants incorrects."; router.push("/admin"); return null;
  }, null);
  return <form action={action} className="admin-form login-form"><label>E-mail<input name="email" type="email" required autoComplete="email" /></label><label>Mot de passe<input name="password" type="password" required minLength={8} autoComplete="current-password" /></label>{state && <p role="alert" className="admin-error">{state}</p>}<button disabled={pending}>{pending ? "Connexion…" : "Se connecter"}</button></form>;
}
