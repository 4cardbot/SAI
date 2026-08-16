import { A1_FULL_COUNT, durationForMode, EXAM_SECTION_COUNTS, NEGATIVE_MARK, SECTION_COUNTS } from "./constants";
import { hashSeed, randomSeed, rotatedSlice, shuffle } from "./random";
import type { ActiveAttempt, AttemptMode, AttemptQuestion, Question, Response, Section, TestResult } from "./types";

const SECTION_ORDER: Section[] = ["A1", "A2", "B", "C"];

function chooseQuestions(pool: Question[], count: number, seed: number, section: Section): Question[] {
  const ordered = shuffle(pool, hashSeed(`${seed}:${section}:bank`));
  const start = hashSeed(`${seed}:${section}:start`) % ordered.length;
  return rotatedSlice(ordered, count, start);
}

function chooseCaseQuestions(pool: Question[], seed: number): Question[] {
  const byPassage = new Map<string, Question[]>();
  pool.forEach((question) => {
    if (!question.passageId) return;
    const existing = byPassage.get(question.passageId) ?? [];
    existing.push(question);
    byPassage.set(question.passageId, existing);
  });
  const passages = shuffle([...byPassage.keys()], hashSeed(`${seed}:C:passages`));
  const selected: Question[] = [];
  const target = EXAM_SECTION_COUNTS.C;
  const start = hashSeed(`${seed}:C:start`) % passages.length;
  const orderedPassages = rotatedSlice(passages, passages.length, start);

  for (const passageId of orderedPassages) {
    const questions = byPassage.get(passageId) ?? [];
    if (selected.length + questions.length > target) continue;
    selected.push(...questions);
    if (selected.length === target) return selected;
  }

  throw new Error(`Unable to select exactly ${target} case-study questions`);
}

export function generateAttemptQuestions(bank: Question[], seed = randomSeed(), mode: AttemptMode = "full"): AttemptQuestion[] {
  const selected: Question[] = [];
  const sections: Section[] = mode === "full" ? SECTION_ORDER : [mode === "A1_FULL" ? "A1" : mode];
  sections.forEach((section) => {
    const pool = bank.filter((question) => question.section === section);
    const selectedCount = mode === "A1_FULL"
      ? A1_FULL_COUNT
      : mode === "full"
        ? EXAM_SECTION_COUNTS[section]
        : SECTION_COUNTS[section];
    const sectionQuestions = section === "C"
      ? chooseCaseQuestions(pool, seed)
      : chooseQuestions(pool, selectedCount, seed, section);
    selected.push(...sectionQuestions);
  });
  return selected.map((question) => ({
    questionId: question.id,
    optionOrder: shuffle([0, 1, 2, 3], hashSeed(`options:${question.id}:${seed}`)),
  }));
}

export function createAttempt(bank: Question[], now = new Date(), seed = randomSeed(), mode: AttemptMode = "full"): ActiveAttempt {
  const questions = generateAttemptQuestions(bank, seed, mode);
  const responses: Record<string, Response> = {};
  questions.forEach(({ questionId }) => {
    responses[questionId] = { status: "unanswered" };
  });
  return {
    version: 3,
    seed,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    status: "paused",
    remainingMs: durationForMode(mode),
    currentIndex: 0,
    questions,
    responses,
    mode,
  };
}

export function isComplete(attempt: ActiveAttempt): boolean {
  return attempt.questions.every(({ questionId }) => attempt.responses[questionId]?.status !== "unanswered");
}

export function completedCount(attempt: ActiveAttempt): number {
  return attempt.questions.filter(({ questionId }) => attempt.responses[questionId]?.status !== "unanswered").length;
}

export function recordAnswer(attempt: ActiveAttempt, questionId: string, selected: number): ActiveAttempt {
  return {
    ...attempt,
    updatedAt: new Date().toISOString(),
    responses: { ...attempt.responses, [questionId]: { status: "answered", selected } },
  };
}

export function recordSkip(attempt: ActiveAttempt, questionId: string): ActiveAttempt {
  return {
    ...attempt,
    updatedAt: new Date().toISOString(),
    responses: { ...attempt.responses, [questionId]: { status: "skipped" } },
  };
}

export function updateTimer(attempt: ActiveAttempt, now = Date.now()): ActiveAttempt {
  if (attempt.status !== "running" || !attempt.lastTickAt) return attempt;
  const elapsed = Math.max(0, now - attempt.lastTickAt);
  return {
    ...attempt,
    remainingMs: Math.max(0, attempt.remainingMs - elapsed),
    lastTickAt: now,
    updatedAt: new Date(now).toISOString(),
  };
}

export function setPaused(attempt: ActiveAttempt, now = Date.now()): ActiveAttempt {
  const updated = updateTimer(attempt, now);
  return { ...updated, status: "paused", lastTickAt: undefined, updatedAt: new Date(now).toISOString() };
}

/**
 * Pauses an attempt from persisted state without charging time since its last save.
 * This protects progress when a browser process exits without delivering a lifecycle event.
 */
export function pausePersisted(attempt: ActiveAttempt, now = Date.now()): ActiveAttempt {
  return { ...attempt, status: "paused", lastTickAt: undefined, updatedAt: new Date(now).toISOString() };
}

export function setRunning(attempt: ActiveAttempt, now = Date.now()): ActiveAttempt {
  if (attempt.remainingMs <= 0) return setPaused(attempt, now);
  return { ...attempt, status: "running", lastTickAt: now, updatedAt: new Date(now).toISOString() };
}

export function moveNext(attempt: ActiveAttempt): ActiveAttempt {
  return { ...attempt, currentIndex: Math.min(attempt.currentIndex + 1, attempt.questions.length - 1), updatedAt: new Date().toISOString() };
}

export function scoreAttempt(attempt: ActiveAttempt, bank: Question[], submittedAt = new Date()): TestResult {
  const byId = new Map(bank.map((question) => [question.id, question]));
  const counts: Record<Section, { correct: number; wrong: number; skipped: number; score: number }> = {
    A1: { correct: 0, wrong: 0, skipped: 0, score: 0 },
    A2: { correct: 0, wrong: 0, skipped: 0, score: 0 },
    B: { correct: 0, wrong: 0, skipped: 0, score: 0 },
    C: { correct: 0, wrong: 0, skipped: 0, score: 0 },
  };
  const items = attempt.questions.map(({ questionId }) => {
    const question = byId.get(questionId);
    if (!question) throw new Error(`Question ${questionId} is missing from the bank`);
    const response = attempt.responses[questionId] ?? { status: "unanswered" as const };
    const sectionCounts = counts[question.section];
    const status: "correct" | "wrong" | "skipped" = response.status === "skipped" || response.status === "unanswered"
      ? "skipped"
      : response.selected === question.correct
        ? "correct"
        : "wrong";
    sectionCounts[status] += 1;
    sectionCounts.score += status === "correct" ? 1 : status === "wrong" ? -NEGATIVE_MARK : 0;
    return {
      questionId: question.id,
      section: question.section,
      text: question.text,
      options: question.options,
      optionOrder: attempt.questions.find((item) => item.questionId === question.id)?.optionOrder ?? [0, 1, 2, 3],
      correct: question.correct,
      explanation: question.explanation,
      sourceId: question.sourceId,
      passage: question.passage,
      passageId: question.passageId,
      status,
      selected: response.selected,
    };
  });
  const correctCount = items.filter((item) => item.status === "correct").length;
  const wrongCount = items.filter((item) => item.status === "wrong").length;
  const skippedCount = items.filter((item) => item.status === "skipped").length;
  return {
    version: 3,
    submittedAt: submittedAt.toISOString(),
    durationMs: Math.max(0, durationForMode(attempt.mode ?? "full") - attempt.remainingMs),
    total: attempt.questions.length,
    correctCount,
    wrongCount,
    skippedCount,
    attemptedCount: correctCount + wrongCount,
    negativeMarks: wrongCount * NEGATIVE_MARK,
    score: correctCount - wrongCount * NEGATIVE_MARK,
    sectionScores: counts,
    items,
    mode: attempt.mode ?? "full",
  };
}
