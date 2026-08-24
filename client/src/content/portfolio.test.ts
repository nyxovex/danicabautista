import { describe, expect, it } from "vitest";
import { portfolioConfig } from "./portfolio";

describe("static portfolio content", () => {
  it("contains the visible professional contact routes and credential set", () => {
    expect(portfolioConfig.email).toBe("bdanica538@gmail.com");
    expect(portfolioConfig.phone).toMatch(/^\+44/);
    expect(portfolioConfig.achievements).toHaveLength(4);
    expect(portfolioConfig.certificates).toHaveLength(6);
    expect(portfolioConfig.certificates.every((certificate) => certificate.image.startsWith("https://"))).toBe(true);
    expect(portfolioConfig.education).toHaveLength(2);
    expect(portfolioConfig.creativeWork).toHaveLength(2);
    expect(portfolioConfig.creativeWork.every((item) => item.image.startsWith("https://"))).toBe(true);
  });

  it("keeps static content available without a network-backed editor", () => {
    expect(portfolioConfig.experience.length).toBeGreaterThan(0);
    expect(portfolioConfig.projects.length).toBeGreaterThan(0);
    expect(portfolioConfig.skills).toContain("Data & SQL foundations");
  });

  it("keeps approved dates and safe document-link placeholders in the public portfolio", () => {
    expect(portfolioConfig.experience.find((item) => item.title === "Human Resources Director")?.meta).toContain("July 2026");
    expect(portfolioConfig.projects.slice(0, 6).map((project) => project.date)).toEqual(["April 2026", "April 2026", "April 2026", "May 2026", "May 2026", "July 2026"]);
    expect(portfolioConfig.projects.every((project) => project.supportingDocument === null || project.supportingDocument.startsWith("https://"))).toBe(true);
    expect(portfolioConfig.certificates.find((certificate) => certificate.title === "Student Staff Partnership Award")?.detail).toContain("award photograph");
  });
});
