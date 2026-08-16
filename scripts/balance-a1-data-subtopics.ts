import { readFile, writeFile } from "node:fs/promises";

type Question = {
  id: string;
  subtopic: string;
  options: string[];
  correct: number;
  sourceId: string;
};

type Change = {
  id: string;
  originalOptions: string[];
  revisedOptions: string[];
  originalCorrect: number;
  revisedCorrect: number;
  sourceId: string;
  reviewerNote: string;
  sourcesInspected: string[];
};

const file = "question_bank/section_a1_data_analytics.json";
const logFile = "research/final20_answer_position_balance_data.json";
const interpretation = "Interpretation & Application of Data";
const evidence = "Principles of Research & Evidence-Based Practice";

const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
const changes: Change[] = [];

function counts(items: Question[]): number[] {
  return items.reduce((result, question) => {
    result[question.correct] += 1;
    return result;
  }, [0, 0, 0, 0]);
}

function move(items: Question[], from: number, to: number, count: number): void {
  for (let moved = 0; moved < count; moved += 1) {
    const question = items.find((candidate) => candidate.correct === from && !changes.some((change) => change.id === candidate.id));
    if (!question) throw new Error(`Could not find ${count} questions at answer index ${from}`);
    const originalOptions = [...question.options];
    const originalCorrect = question.correct;
    const correctOption = originalOptions[originalCorrect];
    const distractors = originalOptions.filter((_, index) => index !== originalCorrect);
    question.options = [...distractors.slice(0, to), correctOption, ...distractors.slice(to)];
    question.correct = to;
    changes.push({
      id: question.id,
      originalOptions,
      revisedOptions: [...question.options],
      originalCorrect,
      revisedCorrect: to,
      sourceId: question.sourceId,
      reviewerNote: "Reordered unchanged options after an independent audit identified subtopic-level answer-position clustering; option wording, meaning, source, and keyed answer were preserved.",
      sourcesInspected: [question.sourceId, "research/release5_audit_data_performance.json"],
    });
  }
}

const interpretationQuestions = questions.filter((question) => question.subtopic === interpretation);
const evidenceQuestions = questions.filter((question) => question.subtopic === evidence);
if (interpretationQuestions.length !== 100 || evidenceQuestions.length !== 50) {
  throw new Error(`Unexpected data subtopic counts: ${interpretationQuestions.length}/${evidenceQuestions.length}`);
}
if (JSON.stringify(counts(interpretationQuestions)) !== JSON.stringify([31, 35, 27, 7])) {
  throw new Error(`Unexpected interpretation answer positions: ${counts(interpretationQuestions).join(",")}`);
}
if (JSON.stringify(counts(evidenceQuestions)) !== JSON.stringify([7, 6, 9, 28])) {
  throw new Error(`Unexpected evidence answer positions: ${counts(evidenceQuestions).join(",")}`);
}

move(interpretationQuestions, 0, 3, 6);
move(interpretationQuestions, 1, 3, 10);
move(interpretationQuestions, 2, 3, 2);
move(evidenceQuestions, 3, 0, 5);
move(evidenceQuestions, 3, 1, 7);
move(evidenceQuestions, 3, 2, 3);

if (JSON.stringify(counts(interpretationQuestions)) !== JSON.stringify([25, 25, 25, 25])) {
  throw new Error(`Unexpected revised interpretation positions: ${counts(interpretationQuestions).join(",")}`);
}
if (JSON.stringify(counts(evidenceQuestions)) !== JSON.stringify([12, 13, 12, 13])) {
  throw new Error(`Unexpected revised evidence positions: ${counts(evidenceQuestions).join(",")}`);
}

await writeFile(file, `${JSON.stringify(questions, null, 2)}\n`);
await writeFile(logFile, `${JSON.stringify({
  auditType: "Central answer-position balancing after independent audit",
  auditDate: "2026-08-16",
  reviewedCount: 150,
  changedCount: changes.length,
  scope: { file, reviewedQuestionCount: 150 },
  before: {
    [interpretation]: [31, 35, 27, 7],
    [evidence]: [7, 6, 9, 28],
  },
  after: {
    [interpretation]: [25, 25, 25, 25],
    [evidence]: [12, 13, 12, 13],
  },
  changes,
}, null, 2)}\n`);
