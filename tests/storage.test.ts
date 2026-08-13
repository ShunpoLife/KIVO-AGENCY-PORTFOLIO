import assert from "node:assert/strict";
import { readFile, unlink } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import sharp from "sharp";
import { saveProjectImage } from "../src/lib/storage";

test("compresses every uploaded project image to a bounded WebP", async () => {
  const source = await sharp({
    create: { width: 2400, height: 1600, channels: 3, background: "#7546ff" },
  }).png().toBuffer();
  const file = new File([source], "cover.png", { type: "image/png" });

  const publicUrl = await saveProjectImage(file);
  assert.ok(publicUrl);
  const outputPath = path.join(process.cwd(), "public", publicUrl);
  try {
    assert.ok(publicUrl.endsWith(".webp"));
    const output = await readFile(outputPath);
    const metadata = await sharp(output).metadata();
    assert.equal(metadata.format, "webp");
    assert.ok((metadata.width ?? Infinity) <= 1920);
    assert.ok(output.length < source.length);
  } finally {
    await unlink(outputPath);
  }
});
