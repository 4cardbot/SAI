import { describe, expect, it } from "vitest";
import { SOURCE_CATALOG_BY_ID, sourceIdForLabel } from "./sourceCatalog";
import { AUTHORED_QUESTION_BANK } from "./authored";

describe("explicit authored question batches", () => {
  it("contain literal records with unique IDs and answer choices", () => {
    expect(AUTHORED_QUESTION_BANK.length).toBe(2000);
    expect(new Set(AUTHORED_QUESTION_BANK.map((question) => question.id)).size).toBe(AUTHORED_QUESTION_BANK.length);
    expect(new Set(AUTHORED_QUESTION_BANK.filter((question) => question.section !== "C").map((question) => question.text)).size).toBe(1600);
    AUTHORED_QUESTION_BANK.forEach((question) => {
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.correct).toBeGreaterThanOrEqual(0);
      expect(question.correct).toBeLessThan(4);
      expect(question.explanation.length).toBeGreaterThan(20);
      expect(sourceIdForLabel(question.source, question.sourceKind)).toBeTruthy();
      if (question.sourceId) {
        expect(SOURCE_CATALOG_BY_ID.has(question.sourceId)).toBe(true);
        expect(SOURCE_CATALOG_BY_ID.get(question.sourceId)?.kind).toBe(question.sourceKind);
      }
    });
  });

  it("preserves the official section and case-study composition", () => {
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "A1")).toHaveLength(640);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "A2")).toHaveLength(160);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "B")).toHaveLength(800);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "C")).toHaveLength(400);
    expect(new Set(AUTHORED_QUESTION_BANK.filter((question) => question.section === "C").map((question) => question.passageId)).size).toBe(100);
    const passageCounts = new Map<string, number>();
    AUTHORED_QUESTION_BANK.filter((question) => question.section === "C").forEach((question) => {
      passageCounts.set(question.passageId!, (passageCounts.get(question.passageId!) ?? 0) + 1);
      expect(question.passage?.length).toBeGreaterThan(80);
    });
    expect([...passageCounts.values()].every((count) => count === 4)).toBe(true);
  });
});
