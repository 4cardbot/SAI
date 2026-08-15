import { describe, expect, it } from "vitest";
import { A2_COVERAGE_DATE } from "../constants";
import { AUTHORED_QUESTION_BANK, SECTION_BANKS } from "./authored";
import { SOURCE_CATALOG_BY_ID } from "./sourceCatalog";

describe("section-based authored question bank", () => {
  it("exports four section banks with the expected syllabus counts", () => {
    expect(Object.keys(SECTION_BANKS).sort()).toEqual(["A1", "A2", "B", "C"]);
    expect(SECTION_BANKS.A1).toHaveLength(384);
    expect(SECTION_BANKS.A2).toHaveLength(96);
    expect(SECTION_BANKS.B).toHaveLength(480);
    expect(SECTION_BANKS.C).toHaveLength(240);
    Object.entries(SECTION_BANKS).forEach(([section, questions]) => {
      questions.forEach((question) => expect(question.section).toBe(section));
    });
  });

  it("contain literal records with unique IDs and answer choices", () => {
    expect(AUTHORED_QUESTION_BANK.length).toBe(1200);
    expect(new Set(AUTHORED_QUESTION_BANK.map((question) => question.id)).size).toBe(AUTHORED_QUESTION_BANK.length);
    expect(new Set(AUTHORED_QUESTION_BANK.filter((question) => question.section !== "C").map((question) => question.text)).size).toBe(960);
    AUTHORED_QUESTION_BANK.forEach((question) => {
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.correct).toBeGreaterThanOrEqual(0);
      expect(question.correct).toBeLessThan(4);
      expect(question.explanation.length).toBeGreaterThan(20);
      expect(question.text.length).toBeGreaterThan(20);
      expect(SOURCE_CATALOG_BY_ID.has(question.sourceId)).toBe(true);
      if (question.section === "A2") expect(question.asOf).toBe(A2_COVERAGE_DATE);
    });
  });

  it("preserves the official section and case-study composition", () => {
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "A1")).toHaveLength(384);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "A2")).toHaveLength(96);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "B")).toHaveLength(480);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "C")).toHaveLength(240);
    expect(new Set(AUTHORED_QUESTION_BANK.filter((question) => question.section === "C").map((question) => question.passageId)).size).toBe(120);
    const passageCounts = new Map<string, number>();
    AUTHORED_QUESTION_BANK.filter((question) => question.section === "C").forEach((question) => {
      passageCounts.set(question.passageId!, (passageCounts.get(question.passageId!) ?? 0) + 1);
      expect(question.passage?.length).toBeGreaterThan(20);
    });
    expect([...passageCounts.values()].every((count) => count === 2 || count === 4)).toBe(true);
  });
});
