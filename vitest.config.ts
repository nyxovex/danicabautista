import { defineConfig } from "vitest/config";
import path from "node:path";

const root = path.resolve(import.meta.dirname);

export default defineConfig({
  root,
  resolve: { alias: { "@": path.resolve(root, "client", "src") } },
  test: { environment: "node", include: ["client/src/content/**/*.test.ts"] },
});
