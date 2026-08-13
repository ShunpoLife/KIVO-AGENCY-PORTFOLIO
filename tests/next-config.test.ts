import assert from "node:assert/strict";
import test from "node:test";
import nextConfig from "../next.config";

test("accepts the validated 5 MB upload before server-side compression", () => {
  assert.equal(nextConfig.experimental?.serverActions?.bodySizeLimit, "6mb");
});
