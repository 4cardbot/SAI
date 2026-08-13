import { describe, expect, it } from "vitest";
import { QUESTION_BANK } from "./data/questionBank";
import { completedCount, createAttempt, generateAttemptQuestions, isComplete, moveNext, recordAnswer, recordSkip, scoreAttempt, setPaused, setRunning } from "./quiz";
import { TEST_DURATION_MS } from "./constants";

const byId = new Map(QUESTION_BANK.map((question) => [question.id, question]));

describe("quiz engine", () => {
  it("creates reproducible seeded tests with the official section counts", () => {
    const first = generateAttemptQuestions(1, QUESTION_BANK, 12345);
    const repeat = generateAttemptQuestions(1, QUESTION_BANK, 12345);
    expect(first).toEqual(repeat);
    expect(first).toHaveLength(100);
    expect(new Set(first.map((item) => item.questionId)).size).toBe(100);
    expect(first.filter((item) => byId.get(item.questionId)?.section === "A1")).toHaveLength(32);
    expect(first.filter((item) => byId.get(item.questionId)?.section === "A2")).toHaveLength(8);
    expect(first.filter((item) => byId.get(item.questionId)?.section === "B")).toHaveLength(40);
    expect(first.filter((item) => byId.get(item.questionId)?.section === "C")).toHaveLength(20);
    const caseQuestions = first.filter((item) => byId.get(item.questionId)?.section === "C");
    const selectedPassages = new Set(caseQuestions.map((item) => byId.get(item.questionId)?.passageId));
    expect(selectedPassages.size).toBeGreaterThanOrEqual(5);
    expect(selectedPassages.size).toBeLessThanOrEqual(10);
    selectedPassages.forEach((passageId) => {
      expect(caseQuestions.filter((item) => byId.get(item.questionId)?.passageId === passageId).length).toBe(
        QUESTION_BANK.filter((question) => question.passageId === passageId).length,
      );
    });
  });

  it("gives new attempts different question selections when their seeds differ", () => {
    const first = createAttempt(1, QUESTION_BANK, new Date("2026-08-12T00:00:00Z"), 101);
    const second = createAttempt(1, QUESTION_BANK, new Date("2026-08-12T00:00:00Z"), 202);

    expect(first.seed).toBe(101);
    expect(second.seed).toBe(202);
    expect(second.questions).not.toEqual(first.questions);
  });

  it("scores correct, wrong and skipped responses with negative marking", () => {
    let attempt = setRunning(createAttempt(1, QUESTION_BANK, new Date("2026-08-12T00:00:00Z")), 1000);
    attempt.questions.forEach(({ questionId }, index) => {
      const question = byId.get(questionId)!;
      attempt = index === 1
        ? recordAnswer(attempt, questionId, (question.correct + 1) % 4)
        : index === 2
          ? recordSkip(attempt, questionId)
          : recordAnswer(attempt, questionId, question.correct);
    });
    expect(isComplete(attempt)).toBe(true);
    expect(completedCount(attempt)).toBe(100);
    const result = scoreAttempt(attempt, QUESTION_BANK);
    expect(result.correctCount).toBe(98);
    expect(result.wrongCount).toBe(1);
    expect(result.skippedCount).toBe(1);
    expect(result.negativeMarks).toBe(0.25);
    expect(result.score).toBe(97.75);
  });

  it("counts unanswered questions as skipped when time expires", () => {
    const result = scoreAttempt(createAttempt(1, QUESTION_BANK), QUESTION_BANK);
    expect(result.correctCount).toBe(0);
    expect(result.wrongCount).toBe(0);
    expect(result.skippedCount).toBe(100);
    expect(result.score).toBe(0);
  });

  it("pauses a running timer using elapsed time and can resume it", () => {
    const attempt = setRunning(createAttempt(1, QUESTION_BANK), 1000);
    const paused = setPaused(attempt, 4500);
    expect(paused.status).toBe("paused");
    expect(paused.remainingMs).toBe(TEST_DURATION_MS - 3500);
    expect(paused.lastTickAt).toBeUndefined();
    const resumed = setRunning(paused, 5000);
    expect(resumed.status).toBe("running");
    expect(resumed.lastTickAt).toBe(5000);
  });

  it("only moves forward through questions", () => {
    let attempt = createAttempt(1, QUESTION_BANK);
    expect(attempt.currentIndex).toBe(0);
    attempt = moveNext(attempt);
    expect(attempt.currentIndex).toBe(1);
    for (let index = 0; index < 110; index += 1) attempt = moveNext(attempt);
    expect(attempt.currentIndex).toBe(99);
  });
});
