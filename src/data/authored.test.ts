import { describe, expect, it } from "vitest";
import { A2_COVERAGE_DATE } from "../constants";
import { AUTHORED_QUESTION_BANK } from "./authored";

describe("explicit authored question batches", () => {
  it("contain literal records with unique IDs and answer choices", () => {
    expect(AUTHORED_QUESTION_BANK.length).toBe(600);
    expect(new Set(AUTHORED_QUESTION_BANK.map((question) => question.id)).size).toBe(AUTHORED_QUESTION_BANK.length);
    expect(new Set(AUTHORED_QUESTION_BANK.filter((question) => question.section !== "C").map((question) => question.text)).size).toBe(480);
    AUTHORED_QUESTION_BANK.forEach((question) => {
      expect(question.options).toHaveLength(4);
      expect(new Set(question.options).size).toBe(4);
      expect(question.correct).toBeGreaterThanOrEqual(0);
      expect(question.correct).toBeLessThan(4);
      expect(question.explanation.length).toBeGreaterThan(20);
      expect(question.text.length).toBeGreaterThan(20);
      expect(Object.keys(question).some((key) => /^source/i.test(key))).toBe(false);
      if (question.section === "A2") expect(question.asOf).toBe(A2_COVERAGE_DATE);
    });
  });

  it("preserves the official section and case-study composition", () => {
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "A1")).toHaveLength(192);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "A2")).toHaveLength(48);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "B")).toHaveLength(240);
    expect(AUTHORED_QUESTION_BANK.filter((question) => question.section === "C")).toHaveLength(120);
    expect(new Set(AUTHORED_QUESTION_BANK.filter((question) => question.section === "C").map((question) => question.passageId)).size).toBe(55);
    const passageCounts = new Map<string, number>();
    AUTHORED_QUESTION_BANK.filter((question) => question.section === "C").forEach((question) => {
      passageCounts.set(question.passageId!, (passageCounts.get(question.passageId!) ?? 0) + 1);
      expect(question.passage?.length).toBeGreaterThan(20);
    });
    expect([...passageCounts.values()].every((count) => count === 2 || count === 4)).toBe(true);
  });
});
