import { describe, expect, it } from "vitest";
import { A2_COVERAGE_DATE } from "../constants";
import { AUTHORED_QUESTION_BANK, INDIVIDUAL_TESTS } from "./authored";

describe("explicit authored question batches", () => {
  it("exports 12 individual test modules with 100 questions each", () => {
    expect(INDIVIDUAL_TESTS).toHaveLength(12);
    INDIVIDUAL_TESTS.forEach((testQuestions, testIdx) => {
      expect(testQuestions).toHaveLength(100);
      expect(testQuestions.filter((q) => q.section === "A1")).toHaveLength(32);
      expect(testQuestions.filter((q) => q.section === "A2")).toHaveLength(8);
      expect(testQuestions.filter((q) => q.section === "B")).toHaveLength(40);
      expect(testQuestions.filter((q) => q.section === "C")).toHaveLength(20);

      // Verify answer key distribution is equal across 0, 1, 2, 3 (25 each)
      const correctDist = [0, 0, 0, 0];
      testQuestions.forEach((q) => {
        correctDist[q.correct] += 1;
      });
      expect(correctDist).toEqual([25, 25, 25, 25]);
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
      expect(Object.keys(question).some((key) => /^source/i.test(key))).toBe(false);
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

