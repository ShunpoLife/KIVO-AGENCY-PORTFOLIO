"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/lib/validations";
import { saveProjectImage } from "@/lib/storage";

async function projectData(formData: FormData) {
  const upload = formData.get("coverUpload");
  const uploadedUrl = upload instanceof File ? await saveProjectImage(upload) : null;
  const parsed = projectSchema.safeParse({ ...Object.fromEntries(formData), coverImage: uploadedUrl || formData.get("coverImage") || "", featured: formData.get("featured") === "on", published: formData.get("published") === "on" });
  if (!parsed.success) throw new Error(parsed.error.issues.map(i => i.message).join(", "));
  const value = parsed.data;
  return { title: value.title, slug: value.slug, shortDescription: value.shortDescription, description: value.description || null, client: value.client || null, category: value.category, technologies: value.technologies.split(",").map(v => v.trim()).filter(Boolean), coverImage: value.coverImage || null, gallery: (value.gallery || "").split("\n").map(v => v.trim()).filter(Boolean), liveUrl: value.liveUrl || null, githubUrl: value.githubUrl || null, challenges: value.challenges || null, contribution: value.contribution || null, completionDate: value.completionDate ? new Date(value.completionDate) : null, featured: value.featured, published: value.published };
}

export async function createProject(formData: FormData) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.project.create({ data: await projectData(formData) }); revalidatePath("/"); revalidatePath("/projects"); redirect("/admin/projects?success=created");
}
export async function updateProject(id: string, formData: FormData) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.project.update({ where: { id }, data: await projectData(formData) }); revalidatePath("/"); revalidatePath("/projects"); redirect("/admin/projects?success=updated");
}
export async function deleteProject(id: string) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.project.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/projects"); redirect("/admin/projects?success=deleted");
}
export async function togglePublished(id: string, published: boolean) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.project.update({ where: { id }, data: { published: !published } }); revalidatePath("/"); revalidatePath("/projects");
}
