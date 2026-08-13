export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function yearOf(date: Date | null) {
  return date ? new Intl.DateTimeFormat("fr-FR", { year: "numeric" }).format(date) : "—";
}
