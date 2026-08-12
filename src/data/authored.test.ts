import { describe, expect, it } from "vitest";
import { A2_COVERAGE_DATE } from "../constants";
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
      expect(question.text.length).toBeGreaterThan(20);
      expect(Object.keys(question).some((key) => /^source/i.test(key))).toBe(false);
      if (question.section === "A2") expect(question.asOf).toBe(A2_COVERAGE_DATE);
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

  it("balances the keyed answer positions within every section", () => {
    for (const section of ["A1", "A2", "B", "C"] as const) {
      const questions = AUTHORED_QUESTION_BANK.filter((question) => question.section === section);
      expect([0, 1, 2, 3].map((index) => questions.filter((question) => question.correct === index).length)).toEqual([
        questions.length / 4,
        questions.length / 4,
        questions.length / 4,
        questions.length / 4,
      ]);
    }
  });

  it("does not make option length a reliable answer cue", () => {
    for (const section of ["A1", "A2", "B", "C"] as const) {
      const questions = AUTHORED_QUESTION_BANK.filter((question) => question.section === section);
      const meanDelta = questions.reduce((total, question) => {
        const incorrectMean = question.options.filter((_, index) => index !== question.correct).reduce((sum, option) => sum + option.length, 0) / 3;
        return total + question.options[question.correct].length - incorrectMean;
      }, 0) / questions.length;
      const uniquelyLongest = questions.filter((question) => question.options[question.correct].length > Math.max(...question.options.filter((_, index) => index !== question.correct).map((option) => option.length))).length;
      expect(Math.abs(meanDelta)).toBeLessThanOrEqual(8);
      expect(uniquelyLongest / questions.length).toBeLessThanOrEqual(0.4);
    }
  });
});
