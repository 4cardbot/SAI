import { describe, expect, it } from "vitest";
import { optionLabelForSourceIndex } from "./answerDisplay";

describe("displayed answer labels", () => {
  it("labels a source option by its shuffled display position", () => {
    // Displayed order is source options C, A, D, B. Source option B is shown as D.
    expect(optionLabelForSourceIndex([2, 0, 3, 1], 1)).toBe("D");
  });
});
