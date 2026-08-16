import { readFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type Question = {
  id: string;
  topic: string;
  subtopic: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
};

type Change = {
  id: string;
  reason: string;
  originalOptions: string[];
  revisedOptions: string[];
  originalCorrect: number;
  revisedCorrect: number;
  sourceId: string;
  action: string;
  reviewerNote: string;
};

type ReviewLog = {
  group: string;
  file: string;
  reviewedCount: number;
  flaggedCount: number;
  changedCount: number;
  unchangedNaturalDifferenceCount: number;
  exceptionCount: number;
  changes: Change[];
  exceptions?: Array<{ id: string; justification: string }>;
};

const assignments = [
  ["question_bank/section_a1_core_disciplines.json", "research/option_length_review_core_disciplines.json"],
  ["question_bank/section_a1_testing_assessment.json", "research/option_length_review_testing_assessment.json"],
  ["question_bank/section_a1_data_analytics.json", "research/option_length_review_data_analytics.json"],
  ["question_bank/section_a1_performance_recovery.json", "research/option_length_review_performance_recovery.json"],
  ["question_bank/section_a1_technology_biostatistics.json", "research/option_length_review_technology_biostatistics.json"],
  ["question_bank/section_a1_holistic_travel_ethics.json", "research/option_length_review_holistic_travel_ethics.json"],
] as const;

const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};

const errors: string[] = [];
const report: Record<string, unknown> = { groups: {}, thresholds: {
  primaryMedianGapCharacters: 8,
  primarySpreadCharacters: 15,
  strictLongestIsSecondaryReviewSignal: true,
}};
let allQuestions: Question[] = [];

for (const [file, auditFile] of assignments) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  const audit = JSON.parse(await readFile(auditFile, "utf8")) as ReviewLog;
  const ids = new Set(questions.map((q) => q.id));
  const changes = audit.changes ?? [];
  const changedIds = new Set(changes.map((change) => change.id));
  const duplicates = changes.filter((change, index) => changes.findIndex((other) => other.id === change.id) !== index);
  const flags = questions.map((question) => {
    const lengths = question.options.map((option) => option.length);
    const correctLength = lengths[question.correct];
    const distractorMedian = median(lengths.filter((_, index) => index !== question.correct));
    const spread = Math.max(...lengths) - Math.min(...lengths);
    const strictLongest = lengths.every((length, index) => index === question.correct || correctLength > length);
    return {
      id: question.id,
      medianGap: correctLength - distractorMedian,
      spread,
      strictLongest,
      primaryFlag: correctLength > distractorMedian + 8 || spread > 15,
    };
  });
  const primaryFlagIds = new Set(flags.filter((flag) => flag.primaryFlag).map((flag) => flag.id));
  const secondaryFlagIds = new Set(flags.filter((flag) => flag.strictLongest).map((flag) => flag.id));
  const missingChangeIds = [...changedIds].filter((id) => !ids.has(id));
  if (questions.length !== 150) errors.push(`${file}: expected 150 questions, found ${questions.length}`);
  if (audit.file !== file) errors.push(`${auditFile}: file field does not match assigned file`);
  if (audit.reviewedCount !== questions.length) errors.push(`${auditFile}: reviewedCount does not equal 150`);
  if (!Number.isInteger(audit.flaggedCount) || audit.flaggedCount < 0 || audit.flaggedCount > questions.length) errors.push(`${auditFile}: invalid pre-review flaggedCount`);
  if (primaryFlagIds.size) errors.push(`${file}: ${primaryFlagIds.size} primary length flags remain after review`);
  if (audit.changedCount !== changes.length) errors.push(`${auditFile}: changedCount does not equal changes array length`);
  if (duplicates.length) errors.push(`${auditFile}: duplicate change entries exist`);
  if (missingChangeIds.length) errors.push(`${auditFile}: change IDs not found in group file: ${missingChangeIds.join(", ")}`);
  for (const question of questions) {
    if (question.options.length !== 4) errors.push(`${file}/${question.id}: expected exactly four options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${file}/${question.id}: invalid correct index`);
    if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${file}/${question.id}: unknown sourceId ${question.sourceId}`);
  }
  for (const change of changes) {
    if (change.originalOptions.length !== 4 || change.revisedOptions.length !== 4) errors.push(`${auditFile}/${change.id}: change must record four original and four revised options`);
    if (!change.reviewerNote?.trim()) errors.push(`${auditFile}/${change.id}: reviewerNote is empty`);
  }
  allQuestions = allQuestions.concat(questions);
  report.groups[file] = {
    reviewedCount: questions.length,
    primaryFlagCount: primaryFlagIds.size,
    secondaryStrictLongestCount: secondaryFlagIds.size,
    changedCount: changes.length,
    remainingPrimaryFlagCount: [...primaryFlagIds].filter((id) => !changedIds.has(id)).length,
    remainingPrimaryFlagExamples: [...primaryFlagIds].filter((id) => !changedIds.has(id)).slice(0, 20),
    changedIds: [...changedIds],
  };
}

const lengthsForAll = allQuestions.map((question) => {
  const lengths = question.options.map((option) => option.length);
  const correctLength = lengths[question.correct];
  const distractorMedian = median(lengths.filter((_, index) => index !== question.correct));
  return {
    correctLength,
    correctLongest: lengths.every((length, index) => index === question.correct || correctLength > length),
    correctTiedLongest: correctLength === Math.max(...lengths),
    correctShortest: correctLength === Math.min(...lengths),
    medianGap: correctLength - distractorMedian,
    spread: Math.max(...lengths) - Math.min(...lengths),
  };
});
const answerPositions = [0, 0, 0, 0];
for (const question of allQuestions) answerPositions[question.correct] += 1;
report.overall = {
  questionCount: allQuestions.length,
  strictLongestCount: lengthsForAll.filter((x) => x.correctLongest).length,
  strictLongestPercent: +(100 * lengthsForAll.filter((x) => x.correctLongest).length / allQuestions.length).toFixed(2),
  tiedOrLongestCount: lengthsForAll.filter((x) => x.correctTiedLongest).length,
  primaryFlagCount: lengthsForAll.filter((x) => x.medianGap > 8 || x.spread > 15).length,
  medianGapFlagCount: lengthsForAll.filter((x) => x.medianGap > 8).length,
  spreadFlagCount: lengthsForAll.filter((x) => x.spread > 15).length,
  correctShortestCount: lengthsForAll.filter((x) => x.correctShortest).length,
  answerPositions,
};

console.log(JSON.stringify({ ...report, errors }, null, 2));
if (errors.length) process.exitCode = 1;
