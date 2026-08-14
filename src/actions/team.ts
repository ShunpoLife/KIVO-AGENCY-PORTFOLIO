"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { teamMemberSchema } from "@/lib/validations";

function teamMemberData(formData: FormData) {
  const parsed = teamMemberSchema.safeParse({ ...Object.fromEntries(formData), published: formData.get("published") === "on" });
  if (!parsed.success) throw new Error(parsed.error.issues.map((issue) => issue.message).join(", "));
  const value = parsed.data;
  return {
    name: value.name,
    slug: value.slug,
    initials: value.initials.toUpperCase(),
    role: value.role,
    bio: value.bio,
    skills: value.skills.split(",").map((skill) => skill.trim()).filter(Boolean),
    contact: value.contact || null,
    location: value.location || null,
    availability: value.availability || null,
    highlight: value.highlight || null,
    sortOrder: value.sortOrder,
    published: value.published,
  };
}

export async function createTeamMember(formData: FormData) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.teamMember.create({ data: teamMemberData(formData) });
  revalidatePath("/"); revalidatePath("/team"); redirect("/admin/team?success=created");
}

export async function updateTeamMember(id: string, formData: FormData) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.teamMember.update({ where: { id }, data: teamMemberData(formData) });
  revalidatePath("/"); revalidatePath("/team"); redirect("/admin/team?success=updated");
}

export async function deleteTeamMember(id: string) {
  if (!(await auth())) redirect("/admin/login");
  await prisma.teamMember.delete({ where: { id } });
  revalidatePath("/"); revalidatePath("/team"); redirect("/admin/team?success=deleted");
}
