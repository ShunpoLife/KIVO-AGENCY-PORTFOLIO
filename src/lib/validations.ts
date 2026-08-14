import { z } from "zod";

const optionalUrl = z.union([z.literal(""), z.string().url()]).optional();
export const projectSchema = z.object({
  title: z.string().min(2).max(120), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  shortDescription: z.string().min(10).max(240), description: z.string().max(10000).optional(),
  client: z.string().max(120).optional(), category: z.string().min(2).max(80), technologies: z.string().max(500),
  coverImage: z.string().max(500).optional(), gallery: z.string().max(3000).optional(), liveUrl: optionalUrl, githubUrl: optionalUrl,
  challenges: z.string().max(3000).optional(), contribution: z.string().max(3000).optional(), memberId: z.string().max(120).optional(), completionDate: z.string().optional(),
  featured: z.boolean(), published: z.boolean(),
});

export const teamMemberSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  initials: z.string().min(2).max(4),
  role: z.string().min(2).max(160),
  bio: z.string().min(20).max(1200),
  skills: z.string().max(1000),
  contact: z.string().email().or(z.literal("")).optional(),
  location: z.string().max(120).optional(),
  availability: z.string().max(160).optional(),
  highlight: z.string().max(300).optional(),
  sortOrder: z.coerce.number().int().min(0).max(999),
  published: z.boolean(),
});

export const offerSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  eyebrow: z.string().min(2).max(160),
  summary: z.string().min(10).max(500),
  description: z.string().min(20).max(1500),
  idealFor: z.string().min(10).max(800),
  useCase: z.string().min(10).max(800),
  outcome: z.string().min(10).max(800),
  timeline: z.string().min(2).max(80),
  startingPrice: z.string().max(80).optional(),
  cta: z.string().min(2).max(120),
  deliverables: z.string().min(2).max(2000),
  process: z.string().min(2).max(2000),
  notIncluded: z.string().max(2000),
  tags: z.string().max(500),
  sortOrder: z.coerce.number().int().min(0).max(999),
  published: z.boolean(),
});
