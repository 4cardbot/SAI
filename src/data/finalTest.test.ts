import { describe, expect, it } from "vitest";
import { FINAL_TEST_BANK, FINAL_TEST_BANKS, QUESTION_BANK } from "./questionBank";
import { validateQuestionBank } from "./validate";
import type { FinalTestId } from "../types";

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

  it("contains four separate official-composition final sets", () => {
    const practiceTexts = new Set(QUESTION_BANK.map((question) => question.text));
    const finalTexts = new Set<string>();
    (Object.keys(FINAL_TEST_BANKS).map(Number) as FinalTestId[]).forEach((finalTestId) => {
      const bank = FINAL_TEST_BANKS[finalTestId];
      const result = validateQuestionBank(bank, { A1: 32, A2: 8, B: 40, C: 20 }, false);
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
      expect(bank).toHaveLength(100);
      expect(new Set(bank.filter((question) => question.section === "C").map((question) => question.passageId))).toHaveLength(5);
      bank.forEach((question) => {
        expect(practiceTexts.has(question.text)).toBe(false);
        expect(finalTexts.has(question.text)).toBe(false);
        finalTexts.add(question.text);
      });
    });
  });
});
