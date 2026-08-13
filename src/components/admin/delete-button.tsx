"use client";
export function DeleteButton({ action }: { action: () => Promise<void> }) { return <form action={action} onSubmit={(event) => { if (!confirm("Supprimer définitivement ce projet ?")) event.preventDefault(); }}><button className="danger-button">Supprimer</button></form>; }
