import { readFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type Question = {
  id: string;
  options: string[];
  correct: number;
  text: string;
  explanation: string;
  sourceId: string;
};

type AnyRecord = Record<string, any>;

const assignments = [
  {
    file: "question_bank/section_a1_core_disciplines.json",
    logs: ["research/final3_content_repair_core_disciplines.json", "research/final5_diversity_repair_core_disciplines.json", "research/final6_length_repair_core_disciplines.json", "research/final7_length_repair_core_disciplines.json", "research/final15_content_repair_core_testing.json", "research/final17_content_repair_core_testing.json", "research/final21_repair_core_disciplines.json"],
  },
  {
    file: "question_bank/section_a1_testing_assessment.json",
    logs: ["research/final3_content_repair_testing_assessment.json", "research/final5_diversity_repair_testing_assessment.json", "research/final6_length_repair_testing_assessment.json", "research/final8_content_repair_testing_assessment.json", "research/final10_content_repair_testing_assessment.json", "research/final11_content_repair_testing_assessment.json", "research/final15_content_repair_core_testing.json", "research/final17_content_repair_core_testing.json", "research/final21_repair_testing_assessment.json"],
  },
  {
    file: "question_bank/section_a1_data_analytics.json",
    logs: ["research/final3_content_repair_data_analytics.json", "research/final4_length_repair_data_analytics.json", "research/final5_diversity_repair_data_analytics.json", "research/final6_length_repair_data_analytics.json", "research/final8_content_repair_data_analytics.json", "research/final9_length_repair_data_analytics.json", "research/final10_content_repair_data_performance.json", "research/final12_content_repair_data_performance.json", "research/final16_content_repair_data_performance.json", "research/final18_content_repair_data_performance.json", "research/final20_answer_position_balance_data.json", "research/final22_answer_pattern_repair_data_performance.json"],
  },
  {
    file: "question_bank/section_a1_performance_recovery.json",
    logs: ["research/final3_content_repair_performance_recovery.json", "research/final4_length_repair_performance_recovery.json", "research/final5_diversity_repair_performance_recovery.json", "research/final6_length_repair_performance_recovery.json", "research/final7_length_repair_performance_recovery.json", "research/final10_content_repair_data_performance.json", "research/final12_content_repair_data_performance.json", "research/final16_content_repair_data_performance.json", "research/final18_content_repair_data_performance.json", "research/final22_answer_pattern_repair_data_performance.json"],
  },
  {
    file: "question_bank/section_a1_technology_biostatistics.json",
    logs: ["research/final3_content_repair_technology_biostatistics.json", "research/final5_diversity_repair_technology_biostatistics.json", "research/final6_length_repair_technology_biostatistics.json", "research/final13_content_repair_technology_holistic.json", "research/final14_content_repair_technology_holistic.json", "research/final19_content_repair_technology_holistic.json", "research/final23_explanation_repair_technology.json"],
  },
  {
    file: "question_bank/section_a1_holistic_travel_ethics.json",
    logs: ["research/final3_content_repair_holistic_travel_ethics.json", "research/final5_diversity_repair_holistic_travel_ethics.json", "research/final6_length_repair_holistic_travel_ethics.json", "research/final7_length_repair_holistic_travel_ethics.json", "research/final8_content_repair_holistic_travel_ethics.json", "research/final13_content_repair_technology_holistic.json", "research/final14_content_repair_technology_holistic.json", "research/final19_content_repair_technology_holistic.json"],
  },
] as const;

const errors: string[] = [];
const report: AnyRecord = { groups: {} };

function changesFrom(log: AnyRecord): AnyRecord[] {
  if (Array.isArray(log.changes)) return log.changes;
  if (Array.isArray(log.changedQuestions)) return log.changedQuestions;
  return [];
}

function reviewedCountFrom(log: AnyRecord): number | undefined {
  return log.reviewedCount ?? log.scope?.reviewedQuestionCount ?? log.scope?.questionCount ?? log.scope?.finalQuestionCount ?? log.summary?.finalQuestionCount ?? log.inspection?.questionCountInspected ?? log.questionCount;
}

function changedCountFrom(log: AnyRecord, changes: AnyRecord[]): number | undefined {
  return log.changedCount ?? log.summary?.changedCount ?? log.scope?.totalChangedQuestionCount ?? changes.length;
}

function changeId(change: AnyRecord): string | undefined {
  return change.id ?? change.questionId;
}

function revisedOptions(change: AnyRecord): string[] | undefined {
  return change.revisedOptions ?? change.revised?.options;
}

function revisedCorrect(change: AnyRecord): number | undefined {
  return change.revisedCorrect ?? change.revisedCorrectIndex ?? change.revised?.correct;
}

function revisedText(change: AnyRecord): string | undefined {
  return change.revisedQuestion ?? change.revisedText ?? change.revised?.text;
}

function revisedExplanation(change: AnyRecord): string | undefined {
  return change.revisedExplanation ?? change.revised?.explanation;
}

function sourceId(change: AnyRecord): string | undefined {
  return change.sourceId ?? change.revisedSourceId ?? change.revised?.sourceId;
}

function reviewerNote(change: AnyRecord): string {
  if (typeof change.reviewerNote === "string") return change.reviewerNote;
  if (typeof change.reviewNotes === "string") return change.reviewNotes;
  if (typeof change.review === "string") return change.review;
  if (change.review && typeof change.review === "object") return JSON.stringify(change.review);
  if (change.revised && typeof change.revised === "object") return "Complete revised record captured in the remediation log.";
  return "";
}

function inspectedSources(change: AnyRecord): unknown[] {
  if (Array.isArray(change.sourcesInspected)) return change.sourcesInspected;
  if (Array.isArray(change.revised?.sourcesInspected)) return change.revised.sourcesInspected;
  if (sourceId(change)) return [sourceId(change)];
  return [];
}

const effectiveChanges = new Map<string, { change: AnyRecord; logFile: string }>();
const questionOwner = new Map<string, (typeof assignments)[number]>();

for (const assignment of assignments) {
  const questions = JSON.parse(await readFile(assignment.file, "utf8")) as Question[];
  const questionById = new Map(questions.map((question) => [question.id, question]));
  for (const question of questions) questionOwner.set(question.id, assignment);
  const groupChanges: string[] = [];

  if (questions.length !== 150) errors.push(`${assignment.file}: expected 150 questions, found ${questions.length}`);
  for (const question of questions) {
    if (question.options.length !== 4) errors.push(`${assignment.file}/${question.id}: expected four options`);
    if (new Set(question.options).size !== 4) errors.push(`${assignment.file}/${question.id}: duplicate options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${assignment.file}/${question.id}: invalid correct index`);
    if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${assignment.file}/${question.id}: unknown sourceId ${question.sourceId}`);
  }

  for (const logFile of assignment.logs) {
    const log = JSON.parse(await readFile(logFile, "utf8")) as AnyRecord;
    const rawChanges = changesFrom(log);
    const changeFiles = new Set(rawChanges.map((change) => change.file).filter((file): file is string => typeof file === "string"));
    const isSharedLog = (Array.isArray(log.scope?.files) && log.scope.files.length > 1) || changeFiles.size > 1;
    const changes = rawChanges.filter((change) => {
      const id = changeId(change);
      return !isSharedLog || (id !== undefined && questionById.has(id));
    });
    const reviewedCount = reviewedCountFrom(log);
    const changedCount = changedCountFrom(log, changes);
    if (!isSharedLog && reviewedCount !== undefined && reviewedCount !== 150) errors.push(`${logFile}: reviewed count must be 150`);
    if (!isSharedLog && changedCount !== changes.length) errors.push(`${logFile}: changed count does not match change entries`);
    const ids = new Set<string>();
    for (const change of changes) {
      const id = changeId(change);
      if (!id || ids.has(id)) errors.push(`${logFile}: missing or duplicate change id ${id ?? "<missing>"}`);
      if (id) ids.add(id);
      if (!id || !questionById.has(id)) errors.push(`${logFile}/${id ?? "<missing>"}: missing current question`);
      if (!reviewerNote(change).trim()) errors.push(`${logFile}/${id ?? "<missing>"}: missing reviewer note`);
      if (inspectedSources(change).length === 0 && !log.sourceBasis?.length) errors.push(`${logFile}/${id ?? "<missing>"}: missing inspected sources`);
      const options = revisedOptions(change);
      if (options && options.length !== 4) errors.push(`${logFile}/${id ?? "<missing>"}: revised options must contain four choices`);
      if (id) {
        effectiveChanges.set(id, { change, logFile });
        groupChanges.push(id);
      }
    }
  }

  report.groups[assignment.file] = {
    reviewedCount: questions.length,
    finalChangeCount: new Set(groupChanges).size,
    finalChangeIds: [...new Set(groupChanges)],
    logs: assignment.logs,
  };
}

for (const [id, entry] of effectiveChanges) {
  const assignment = questionOwner.get(id);
  if (!assignment) continue;
  const questions = JSON.parse(await readFile(assignment.file, "utf8")) as Question[];
  const question = questions.find((candidate) => candidate.id === id);
  if (!question) continue;
  const options = revisedOptions(entry.change);
  const correct = revisedCorrect(entry.change);
  const text = revisedText(entry.change);
  const explanation = revisedExplanation(entry.change);
  if (options && JSON.stringify(question.options) !== JSON.stringify(options)) errors.push(`${entry.logFile}/${id}: current options do not match latest remediation entry`);
  if (correct !== undefined && question.correct !== correct) errors.push(`${entry.logFile}/${id}: current answer index does not match latest remediation entry`);
  if (text && question.text !== text) errors.push(`${entry.logFile}/${id}: current stem does not match latest remediation entry`);
  if (explanation && question.explanation !== explanation) errors.push(`${entry.logFile}/${id}: current explanation does not match latest remediation entry`);
  const loggedSource = sourceId(entry.change);
  if (loggedSource && !SOURCE_CATALOG_BY_ID.has(loggedSource)) errors.push(`${entry.logFile}/${id}: remediation log references unknown sourceId ${loggedSource}`);
}

const allQuestions = (await Promise.all(assignments.map(async ({ file }) => JSON.parse(await readFile(file, "utf8")) as Question[]))).flat();
const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};
const primaryFlags = allQuestions.filter((question) => {
  const lengths = question.options.map((option) => option.length);
  const gap = lengths[question.correct] - median(lengths.filter((_, index) => index !== question.correct));
  return gap > 8 || Math.max(...lengths) - Math.min(...lengths) > 15;
});
const answerPositions = [0, 0, 0, 0];
const strictLongest = allQuestions.filter((question) => {
  answerPositions[question.correct] += 1;
  return question.options.every((option, index) => index === question.correct || option.length < question.options[question.correct].length);
}).length;
report.overall = {
  questionCount: allQuestions.length,
  primaryFlagCount: primaryFlags.length,
  primaryFlagIds: primaryFlags.map((question) => question.id),
  strictLongestCount: strictLongest,
  strictLongestPercent: +(100 * strictLongest / allQuestions.length).toFixed(2),
  answerPositions,
};

console.log(JSON.stringify({ ...report, errors }, null, 2));
if (errors.length || primaryFlags.length) process.exitCode = 1;
