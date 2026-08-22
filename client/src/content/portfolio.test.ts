import { describe, expect, it } from "vitest";
import { portfolioConfig } from "./portfolio";

describe("static portfolio content", () => {
  it("contains the visible professional contact routes and verified certificate set", () => {
    expect(portfolioConfig.email).toBe("bdanica538@gmail.com");
    expect(portfolioConfig.phone).toMatch(/^\+44/);
    expect(portfolioConfig.achievements).toHaveLength(2);
    expect(portfolioConfig.certificates).toHaveLength(4);
    expect(portfolioConfig.certificates.every((certificate) => certificate.image.startsWith("https://"))).toBe(true);
  });

  it("keeps static content available without a network-backed editor", () => {
    expect(portfolioConfig.experience.length).toBeGreaterThan(0);
    expect(portfolioConfig.projects.length).toBeGreaterThan(0);
    expect(portfolioConfig.skills).toContain("Data & SQL foundations");
  });
});
