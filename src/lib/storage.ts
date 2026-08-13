import { mkdir, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;
const MAX_IMAGE_WIDTH = 1920;

export async function saveProjectImage(file: File) {
  if (!file.size) return null;
  if (file.size > MAX_UPLOAD_SIZE) throw new Error("Image trop volumineuse (5 Mo maximum).");
  if (!allowed.has(file.type)) throw new Error("Format non accepté (JPG, PNG ou WebP).");

  const input = Buffer.from(await file.arrayBuffer());
  const compressed = await sharp(input)
    .rotate()
    .resize({ width: MAX_IMAGE_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toBuffer();

  const directory = path.join(process.cwd(), "public", "uploads");
  await mkdir(directory, { recursive: true });
  const name = `${randomUUID()}.webp`;
  await writeFile(path.join(directory, name), compressed);
  return `/uploads/${name}`;
}
