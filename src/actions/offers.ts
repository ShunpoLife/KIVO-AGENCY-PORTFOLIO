"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { offerSchema } from "@/lib/validations";

function lines(value: string) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

function csv(value: string) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function offerData(formData: FormData) {
  const parsed = offerSchema.safeParse({ ...Object.fromEntries(formData), published: formData.get("published") === "on" });
  if (!parsed.success) throw new Error(parsed.error.issues.map((issue) => issue.message).join(", "));
  const value = parsed.data;
  return {
    name: value.name,
    slug: value.slug,
    eyebrow: value.eyebrow,
    summary: value.summary,
    description: value.description,
    idealFor: value.idealFor,
    useCase: value.useCase,
    outcome: value.outcome,
    timeline: value.timeline,
    startingPrice: value.startingPrice || null,
    cta: value.cta,
    deliverables: lines(value.deliverables),
    process: lines(value.process),
    notIncluded: lines(value.notIncluded),
    tags: csv(value.tags),
    sortOrder: value.sortOrder,
    published: value.published,
  };
}

export async function createOffer(formData: FormData) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.offer.create({ data: offerData(formData) });
  revalidatePath("/offres"); revalidatePath("/sitemap.xml"); redirect("/admin/offers?success=created");
}

export async function updateOffer(id: string, formData: FormData) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.offer.update({ where: { id }, data: offerData(formData) });
  revalidatePath("/offres"); revalidatePath("/sitemap.xml"); redirect("/admin/offers?success=updated");
}

export async function deleteOffer(id: string) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.offer.delete({ where: { id } });
  revalidatePath("/offres"); revalidatePath("/sitemap.xml"); redirect("/admin/offers?success=deleted");
}
