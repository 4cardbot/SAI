import { describe, expect, it } from "vitest";
import { QUESTION_BANK } from "./questionBank";
import { validateQuestionBank } from "./validate";

describe("question bank validation", () => {
  it("passes the launch bank and enforces its exact composition", () => {
    const result = validateQuestionBank(QUESTION_BANK);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.counts).toEqual({ A1: 640, A2: 160, B: 800, C: 400 });
    expect(result.passageCount).toBe(100);
  });

  it("detects duplicate IDs, malformed options and missing explanations", () => {
    const invalid = [{ ...QUESTION_BANK[0], id: QUESTION_BANK[1].id, options: ["one", "one", "three"], explanation: "" }, QUESTION_BANK[1]];
    const result = validateQuestionBank(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors).toEqual(expect.arrayContaining([
      `Duplicate question id: ${QUESTION_BANK[1].id}`,
      `${QUESTION_BANK[1].id} must have exactly four options`,
      `${QUESTION_BANK[1].id} has duplicate options`,
      `${QUESTION_BANK[1].id} is missing an explanation`,
      "A1 has 2 questions; expected 640",
    ]));
  });
});
