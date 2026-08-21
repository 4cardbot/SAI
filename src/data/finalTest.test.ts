import { describe, expect, it } from "vitest";
import { FINAL_TEST_BANK, QUESTION_BANK } from "./questionBank";
import { validateQuestionBank } from "./validate";

describe("fixed final CBT bank", () => {
  it("has the official composition and five complete cases", () => {
    const result = validateQuestionBank(FINAL_TEST_BANK, { A1: 32, A2: 8, B: 40, C: 20 }, false);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.counts).toEqual({ A1: 32, A2: 8, B: 40, C: 20 });
    expect(result.passageCount).toBe(5);
  });

  it("does not repeat a practice-bank question stem", () => {
    const practiceTexts = new Set(QUESTION_BANK.map((question) => question.text));
    expect(FINAL_TEST_BANK.some((question) => practiceTexts.has(question.text))).toBe(false);
  });
});
