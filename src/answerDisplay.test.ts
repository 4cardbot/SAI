import { describe, expect, it } from "vitest";
import { optionLabelForOptionIndex } from "./answerDisplay";

describe("displayed answer labels", () => {
  it("labels a bank option by its shuffled display position", () => {
    // Displayed order is bank options C, A, D, B. Bank option B is shown as D.
    expect(optionLabelForOptionIndex([2, 0, 3, 1], 1)).toBe("D");
  });
});
