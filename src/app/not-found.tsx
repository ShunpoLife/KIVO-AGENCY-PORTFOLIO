import Link from "next/link";
export default function NotFound() { return <div className="not-found"><span>404</span><h1>Cette page s’est<br />échappée du cadre.</h1><Link href="/">Retour à l’accueil →</Link></div>; }
