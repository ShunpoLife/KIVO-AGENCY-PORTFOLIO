import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ name: z.string().min(2).max(80), email: z.string().email(), company: z.string().max(100).optional(), message: z.string().min(20).max(3000), website: z.string().max(0).optional() });
const attempts = new Map<string, number[]>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now(); const recent = (attempts.get(ip) || []).filter((time) => now - time < 60_000);
  if (recent.length >= 4) return NextResponse.json({ error: "Trop de demandes" }, { status: 429 });
  attempts.set(ip, [...recent, now]);
  const form = await request.formData(); const result = schema.safeParse(Object.fromEntries(form));
  if (!result.success) return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  // Connect Resend, Postmark or another provider here. No message content is logged.
  return NextResponse.json({ ok: true });
}
