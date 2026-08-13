import { z } from "zod";

const optionalUrl = z.union([z.literal(""), z.string().url()]).optional();
export const projectSchema = z.object({
  title: z.string().min(2).max(120), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  shortDescription: z.string().min(10).max(240), description: z.string().max(10000).optional(),
  client: z.string().max(120).optional(), category: z.string().min(2).max(80), technologies: z.string().max(500),
  coverImage: z.string().max(500).optional(), gallery: z.string().max(3000).optional(), liveUrl: optionalUrl, githubUrl: optionalUrl,
  challenges: z.string().max(3000).optional(), contribution: z.string().max(3000).optional(), completionDate: z.string().optional(),
  featured: z.boolean(), published: z.boolean(),
});
