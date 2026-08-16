import { readFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type Question = {
  id: string;
  options: string[];
  correct: number;
  sourceId: string;
};

type Change = {
  id: string;
  defectType: string;
  originalOptions: string[];
  revisedOptions: string[];
  originalCorrect: number;
  revisedCorrect: number;
  sourceId: string;
  reviewerNote: string;
  sourcesInspected: string[];
};

type Log = {
  group: string;
  file: string;
  reviewedCount: number;
  changedCount: number;
  answerKeyFixCount: number;
  distractorFixCount: number;
  sourceRecommendationCount: number;
  changes: Change[];
  unresolvedConcerns?: unknown[];
};

const assignments = [
  ["question_bank/section_a1_core_disciplines.json", "research/content_remediation_core_disciplines.json", "research/final_content_repair_core.json"],
  ["question_bank/section_a1_testing_assessment.json", "research/content_remediation_testing_assessment.json", "research/final_content_repair_testing.json"],
  ["question_bank/section_a1_data_analytics.json", "research/content_remediation_data_analytics.json", ""],
  ["question_bank/section_a1_performance_recovery.json", "research/content_remediation_performance_recovery.json", ""],
  ["question_bank/section_a1_technology_biostatistics.json", "research/content_remediation_technology_biostatistics.json", ""],
  ["question_bank/section_a1_holistic_travel_ethics.json", "research/content_remediation_holistic_travel_ethics.json", ""],
] as const;

const errors: string[] = [];
const report: Record<string, unknown> = { groups: {} };

for (const [file, logFile, supplementalLogFile] of assignments) {
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  const log = JSON.parse(await readFile(logFile, "utf8")) as Log;
  const supplemental = supplementalLogFile ? JSON.parse(await readFile(supplementalLogFile, "utf8")) as Log : undefined;
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const changes = log.changes ?? [];
  const supplementalChanges = supplemental?.changes ?? [];
  const allChanges = [...changes, ...supplementalChanges];
  const changedIds = new Set(allChanges.map((change) => change.id));
  const supplementalById = new Map(supplementalChanges.map((change) => [change.id, change]));
  if (questions.length !== 150) errors.push(`${file}: expected 150 questions, found ${questions.length}`);
  if (log.file !== file) errors.push(`${logFile}: file field mismatch`);
  if (log.reviewedCount !== 150) errors.push(`${logFile}: reviewedCount must be 150`);
  if (log.changedCount !== changes.length) errors.push(`${logFile}: changedCount mismatch`);
  if (new Set(changes.map((change) => change.id)).size !== changes.length) errors.push(`${logFile}: duplicate change IDs`);
  for (const question of questions) {
    if (question.options.length !== 4) errors.push(`${file}/${question.id}: expected four options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${file}/${question.id}: invalid correct index`);
    if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${file}/${question.id}: unknown sourceId ${question.sourceId}`);
  }
  for (const change of allChanges) {
    const question = questionById.get(change.id);
    if (!question) {
      errors.push(`${logFile}/${change.id}: missing current question`);
      continue;
    }
    if (change.originalOptions.length !== 4 || change.revisedOptions.length !== 4) errors.push(`${logFile}/${change.id}: option snapshots must contain four options`);
    const effectiveChange = supplementalById.get(change.id) ?? change;
    if (question.correct !== effectiveChange.revisedCorrect || JSON.stringify(question.options) !== JSON.stringify(effectiveChange.revisedOptions)) errors.push(`${logFile}/${change.id}: current question does not match remediation log`);
    if (!change.reviewerNote?.trim() || !change.sourcesInspected?.length) errors.push(`${logFile}/${change.id}: reviewer note and inspected sources are required`);
  }
  report.groups[file] = {
    reviewedCount: questions.length,
    changedCount: allChanges.length,
    primaryLogChangedCount: changes.length,
    supplementalChangedCount: supplementalChanges.length,
    answerKeyFixCount: log.answerKeyFixCount,
    distractorFixCount: log.distractorFixCount,
    sourceRecommendationCount: log.sourceRecommendationCount,
    unresolvedConcernCount: log.unresolvedConcerns?.length ?? 0,
    changedIds: [...changedIds],
  };
}

console.log(JSON.stringify({ ...report, errors }, null, 2));
if (errors.length) process.exitCode = 1;
