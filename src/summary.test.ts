import { describe, expect, it } from "vitest";
import { QUESTION_BANK } from "./data/questionBank";
import { createAttempt, recordAnswer, recordSkip, scoreAttempt } from "./quiz";
import { buildSummaryHtml } from "./summary";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

describe("downloadable result summary", () => {
  it("includes only wrong and skipped questions", () => {
    const byId = new Map(QUESTION_BANK.map((question) => [question.id, question]));
    let attempt = createAttempt(1, QUESTION_BANK, new Date("2026-08-12T00:00:00Z"), 12345);
    const first = attempt.questions[0];
    const second = attempt.questions[1];
    const third = attempt.questions[2];
    const firstQuestion = byId.get(first.questionId)!;
    const secondQuestion = byId.get(second.questionId)!;
    attempt = recordAnswer(attempt, first.questionId, firstQuestion.correct);
    attempt = recordAnswer(attempt, second.questionId, (secondQuestion.correct + 1) % 4);
    attempt = recordSkip(attempt, third.questionId);
    const result = scoreAttempt(attempt, QUESTION_BANK);
    const html = buildSummaryHtml(result);
    expect(html).toContain("Review items");
    expect(html).toContain(escapeHtml(secondQuestion.text));
    expect(html).toContain(escapeHtml(byId.get(third.questionId)!.text));
    expect(html).not.toContain(escapeHtml(firstQuestion.text));
  });
});
