import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { SOURCE_CATALOG, SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";
import { QUESTION_BANK } from "../src/data/questionBank";
import { filterQuestions, generateAttemptQuestions, subtopicsForSelection, topicsForSection } from "../src/quiz";
import type { Question, Section } from "../src/types";

const root = process.cwd();
const groups = [
  { topic: "Human Anatomy", slug: "human_anatomy" },
  { topic: "Human and Exercise Physiology", slug: "human_exercise_physiology" },
  { topic: "Electrotherapy and Electrodiagnosis", slug: "electrotherapy_electrodiagnosis" },
  { topic: "Exercise Therapy and Rehabilitation", slug: "exercise_therapy_rehabilitation" },
  { topic: "Biomechanics and Movement Analysis", slug: "biomechanics_movement_analysis" },
  { topic: "Psychology and Human Development", slug: "psychology_human_development" },
  { topic: "Assessment, Diagnosis and Clinical Reasoning", slug: "assessment_diagnosis_clinical_reasoning" },
  { topic: "Sports Physiotherapy, Emergencies and Travel", slug: "sports_physiotherapy_emergencies_travel" },
  { topic: "Sports Medicine, Nutrition and Research", slug: "sports_medicine_nutrition_research" },
] as const;

const biomechanicsBlueprint: Record<string, number> = {
  "knee/patellofemoral/screw-home mechanics": 13,
  "shoulder/scapulohumeral mechanics": 13,
  "normal gait phases": 13,
  "running/jumping/landing mechanics": 13,
  "vectors/force/torque/moment arms": 13,
  "foot/ankle/subtalar/windlass mechanics": 13,
  "pathological gait and observational analysis": 12,
  "ground reaction forces": 12,
  "levers and mechanical advantage": 12,
  "spine/pelvis/lumbopelvic rhythm": 12,
  "centre of gravity/base of support": 12,
  "throwing and sport-skill biomechanics": 12,
};

const expectedQuestionKeys = new Set(["id", "section", "topic", "subtopic", "difficulty", "text", "options", "correct", "explanation", "sourceId"]);
const canonicalTopics = groups.map((group) => group.topic);
const errors: string[] = [];
const warnings: string[] = [];
const allDurable: Question[] = [];
const ids = new Set<string>();
const stems = new Set<string>();
const sourceUse: Record<string, number> = {};
const groupReports: Array<Record<string, unknown>> = [];

function sortedRecord(record: Record<string, number>): Record<string, number> {
  return Object.fromEntries(Object.entries(record).sort(([a], [b]) => a.localeCompare(b)));
}

function sameRecord(actual: Record<string, number>, expected: Record<string, number>): boolean {
  return JSON.stringify(sortedRecord(actual)) === JSON.stringify(sortedRecord(expected));
}

function auditOptionLengths(questions: Question[]) {
  let strictLongest = 0;
  let strictShortest = 0;
  let spreadOver15 = 0;
  let correctOverMedianBy10 = 0;
  let maximumSpread = 0;
  const flags: Array<{ id: string; spread: number; correctLength: number; medianDistractor: number }> = [];
  for (const question of questions) {
    const lengths = question.options.map((option) => option.length);
    const correctLength = lengths[question.correct];
    const distractors = lengths.filter((_, index) => index !== question.correct).sort((a, b) => a - b);
    const medianDistractor = distractors[1];
    const spread = Math.max(...lengths) - Math.min(...lengths);
    maximumSpread = Math.max(maximumSpread, spread);
    if (correctLength > Math.max(...distractors)) strictLongest += 1;
    if (correctLength < Math.min(...distractors)) strictShortest += 1;
    if (spread > 15) {
      spreadOver15 += 1;
      flags.push({ id: question.id, spread, correctLength, medianDistractor });
    } else if (correctLength - medianDistractor >= 10) {
      correctOverMedianBy10 += 1;
      flags.push({ id: question.id, spread, correctLength, medianDistractor });
    }
  }
  return { strictLongest, strictShortest, spreadOver15, correctOverMedianBy10, maximumSpread, flags };
}

function answerIndices(questions: Question[]): number[] {
  return [0, 1, 2, 3].map((index) => questions.filter((question) => question.correct === index).length);
}

function repeatingPeriods(questions: Question[], maximum = 64): number[] {
  const periods: number[] = [];
  for (let period = 1; period <= Math.min(maximum, questions.length - 1); period += 1) {
    let repeats = true;
    for (let index = period; index < questions.length; index += 1) {
      if (questions[index].correct !== questions[index % period].correct) {
        repeats = false;
        break;
      }
    }
    if (repeats) periods.push(period);
  }
  return periods;
}

function assertSourceMetadata(sourceId: string, questionId: string): void {
  const source = SOURCE_CATALOG_BY_ID.get(sourceId);
  if (!source) {
    errors.push(`${questionId} uses unknown sourceId ${sourceId}`);
    return;
  }
  if (!(source.url || source.localPath)) errors.push(`${questionId} source ${sourceId} lacks url/localPath`);
  if (!source.scope?.trim()) errors.push(`${questionId} source ${sourceId} lacks scope`);
  if (!source.locator?.trim()) errors.push(`${questionId} source ${sourceId} lacks locator`);
  if (source.url && !/^https?:\/\//.test(source.url)) errors.push(`${questionId} source ${sourceId} has an invalid URL`);
  if (source.localPath && !existsSync(resolve(root, source.localPath))) errors.push(`${questionId} source ${sourceId} localPath does not exist: ${source.localPath}`);
}

function auditQuestion(question: Question, expectedTopic: string): void {
  const keys = Object.keys(question);
  if (keys.some((key) => !expectedQuestionKeys.has(key)) || keys.length !== expectedQuestionKeys.size) errors.push(`${question.id || "<missing id>"} does not match the Section B schema`);
  if (question.section !== "B") errors.push(`${question.id} has section ${question.section}`);
  if (question.topic !== expectedTopic) errors.push(`${question.id} has topic ${question.topic}; expected ${expectedTopic}`);
  if (!question.id || !question.subtopic || !question.text || !question.explanation || !question.sourceId) errors.push(`${question.id || "<missing id>"} has missing required content`);
  if (!(["foundational", "applied", "analytical"] as string[]).includes(question.difficulty)) errors.push(`${question.id} has unsupported difficulty ${question.difficulty}`);
  if (!Array.isArray(question.options) || question.options.length !== 4 || new Set(question.options).size !== 4) errors.push(`${question.id} must have four unique options`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${question.id} has an invalid correct index`);
  if (ids.has(question.id)) errors.push(`Duplicate Section B question ID ${question.id}`);
  ids.add(question.id);
  if (stems.has(question.text)) errors.push(`Duplicate Section B question stem ${question.id}`);
  stems.add(question.text);
  sourceUse[question.sourceId] = (sourceUse[question.sourceId] ?? 0) + 1;
  assertSourceMetadata(question.sourceId, question.id);
}

for (const group of groups) {
  const file = `question_bank/section_b_${group.slug}.json`;
  const questions = JSON.parse(await readFile(resolve(root, file), "utf8")) as Question[];
  if (questions.length !== 150) errors.push(`${file} has ${questions.length} questions; expected 150`);
  const subtopics: Record<string, number> = {};
  questions.forEach((question) => {
    auditQuestion(question, group.topic);
    subtopics[question.subtopic] = (subtopics[question.subtopic] ?? 0) + 1;
    allDurable.push(question);
  });
  const indices = answerIndices(questions);
  if (indices.some((count) => count < 30 || count > 45)) warnings.push(`${group.topic} answer-position distribution is outside the 30–45 review band: ${indices.join("/")}`);
  if (group.slug === "biomechanics_movement_analysis" && !sameRecord(subtopics, biomechanicsBlueprint)) errors.push("Biomechanics subtopic counts do not match the required blueprint");
  const lengths = auditOptionLengths(questions);
  groupReports.push({ topic: group.topic, file, count: questions.length, subtopics, answerIndices: indices, lengthAudit: lengths });
}

if (allDurable.length !== 1350) errors.push(`Durable Section B files contain ${allDurable.length} questions; expected 1350`);
const merged = JSON.parse(await readFile(resolve(root, "question_bank/section_b.json"), "utf8")) as Question[];
if (merged.length !== 1350) errors.push(`Merged section_b.json has ${merged.length} questions; expected 1350`);
if (JSON.stringify(merged) !== JSON.stringify(allDurable)) errors.push("Merged section_b.json does not exactly match durable-file concatenation");
const mergedLengths = auditOptionLengths(merged);
const mergedIndices = answerIndices(merged);
const periods = repeatingPeriods(merged);
if (periods.length) warnings.push(`Exact repeating answer-index periods detected: ${periods.join(", ")}`);

const centralAudit = JSON.parse(await readFile(resolve(root, "research/section_b_central_audit.json"))) as {
  status: string;
  errors: string[];
  warnings: string[];
  total: number;
  answerIndices: number[];
  lengthAudit: { strictLongest: number; strictShortest: number; outliers: number };
};
if (centralAudit.total !== merged.length) errors.push("Central audit total does not match the merged bank");
if (centralAudit.errors.length > 0 || centralAudit.status === "fail") errors.push(`Central audit reports ${centralAudit.errors.length} error(s)`);
if (JSON.stringify(centralAudit.answerIndices) !== JSON.stringify(mergedIndices)) errors.push("Central audit answer indices do not match the independent audit");
if (centralAudit.lengthAudit.strictLongest !== mergedLengths.strictLongest || centralAudit.lengthAudit.strictShortest !== mergedLengths.strictShortest || centralAudit.lengthAudit.outliers !== mergedLengths.spreadOver15) errors.push("Central audit option-length totals do not match the independent audit");

const manifest = JSON.parse(await readFile(resolve(root, "research/section_b_coverage_manifest.json"), "utf8")) as {
  section: string;
  total: number;
  groups: Array<{ topic: string; file: string; count: number; subtopics: Record<string, number>; answerIndices: Record<string, number>; sourceIds: string[] }>;
  sources: Record<string, number>;
  questionMappings: Array<{ id: string; repositoryGroup: string; officialSyllabusArea: string; subtopic: string; sourceId: string }>;
};
if (manifest.section !== "B" || manifest.total !== 1350) errors.push("Section B coverage manifest has incorrect section or total");
if (manifest.groups.length !== groups.length) errors.push(`Coverage manifest has ${manifest.groups.length} groups; expected ${groups.length}`);
for (const group of groups) {
  const actual = manifest.groups.find((item) => item.topic === group.topic);
  if (!actual || actual.file !== `question_bank/section_b_${group.slug}.json` || actual.count !== 150) errors.push(`Coverage manifest is missing or mismatches ${group.topic}`);
}
if (manifest.questionMappings.length !== 1350) errors.push(`Coverage manifest has ${manifest.questionMappings.length} mappings; expected 1350`);
const mergedById = new Map(merged.map((question) => [question.id, question]));
for (const mapping of manifest.questionMappings) {
  const question = mergedById.get(mapping.id);
  if (!question || mapping.repositoryGroup !== question.topic || mapping.officialSyllabusArea !== question.topic || mapping.subtopic !== question.subtopic || mapping.sourceId !== question.sourceId) errors.push(`Coverage manifest mapping mismatch for ${mapping.id}`);
}
if (JSON.stringify(sortedRecord(manifest.sources)) !== JSON.stringify(sortedRecord(sourceUse))) errors.push("Coverage manifest source counts do not match the durable question files");

const incompleteCatalogEntries = SOURCE_CATALOG.filter((source) => !(source.url || source.localPath) || !source.scope?.trim() || !source.locator?.trim());
if (incompleteCatalogEntries.length) warnings.push(`Source catalog has ${incompleteCatalogEntries.length} incomplete entries outside or including Section B usage: ${incompleteCatalogEntries.map((source) => source.id).join(", ")}`);

const bTopics = topicsForSection(QUESTION_BANK, "B");
if (JSON.stringify(bTopics) !== JSON.stringify([...canonicalTopics].sort((a, b) => a.localeCompare(b)))) errors.push("Application topic dropdown does not expose the nine canonical Section B topics");
const filteredChecks: Array<Record<string, unknown>> = [];
for (const topic of canonicalTopics) {
  const selection = { section: "B" as Section, topic };
  const matching = filterQuestions(QUESTION_BANK, selection);
  const attempt = generateAttemptQuestions(QUESTION_BANK, 17082026, "filtered", selection);
  if (matching.length !== 150 || attempt.length !== matching.length || !attempt.every((item) => matching.some((question) => question.id === item.questionId))) errors.push(`Filtered topic behavior failed for ${topic}`);
  const subtopic = subtopicsForSelection(QUESTION_BANK, selection)[0];
  const subtopicMatching = filterQuestions(QUESTION_BANK, { ...selection, subtopic });
  const subtopicAttempt = generateAttemptQuestions(QUESTION_BANK, 17082026, "filtered", { ...selection, subtopic });
  if (subtopicAttempt.length !== subtopicMatching.length || !subtopicAttempt.every((item) => subtopicMatching.some((question) => question.id === item.questionId))) errors.push(`Filtered subtopic behavior failed for ${topic} · ${subtopic}`);
  filteredChecks.push({ topic, topicCount: matching.length, subtopicCount: subtopicMatching.length, subtopic });
}

const fullAttempts = Array.from({ length: 100 }, (_, index) => generateAttemptQuestions(QUESTION_BANK, index + 1, "full"));
fullAttempts.forEach((attempt, index) => {
  if (attempt.length !== 100 || new Set(attempt.map((item) => item.questionId)).size !== 100) errors.push(`Full CBT seed ${index + 1} is not 100 unique questions`);
  const counts = ["A1", "A2", "B", "C"].map((section) => attempt.filter((item) => QUESTION_BANK.find((question) => question.id === item.questionId)?.section === section).length);
  if (JSON.stringify(counts) !== JSON.stringify([32, 8, 40, 20])) errors.push(`Full CBT seed ${index + 1} has section counts ${counts.join("/")}`);
});

const appText = await readFile(resolve(root, "src/App.tsx"), "utf8");
const quizText = await readFile(resolve(root, "src/quiz.ts"), "utf8");
const appBehavior = {
  sectionDropdown: appText.includes("[\"A1\", \"A2\", \"B\", \"C\"]"),
  topicDropdown: appText.includes("topicsForSection(QUESTION_BANK, section)"),
  subtopicDropdown: appText.includes("subtopicsForSelection(QUESTION_BANK"),
  filteredStart: appText.includes('createAttempt(QUESTION_BANK, new Date(), randomSeed(), "filtered", selection)'),
  fullStart: appText.includes('createAttempt(QUESTION_BANK, new Date(), randomSeed(), "full")'),
  filteredEngine: quizText.includes("generateFilteredAttemptQuestions") && quizText.includes("filterQuestions(bank, selection)"),
  officialCounts: quizText.includes("EXAM_SECTION_COUNTS[section]"),
};
if (Object.values(appBehavior).some((value) => !value)) errors.push(`Application dropdown/full-test wiring check failed: ${JSON.stringify(appBehavior)}`);

const report = {
  generatedAt: new Date().toISOString(),
  auditType: "final-independent-structural-provenance",
  readOnlyScope: [
    ...groups.map((group) => `question_bank/section_b_${group.slug}.json`),
    "question_bank/section_b.json",
    "research/section_b_coverage_manifest.json",
    "research/section_b_central_audit.json",
    "src/data/sourceCatalog.ts",
    "src/data/questionBank.ts",
    "src/quiz.ts",
    "src/App.tsx",
    "src/constants.ts",
  ],
  status: errors.length ? "fail" : warnings.length ? "pass-with-review-flags" : "pass",
  errors,
  warnings,
  counts: { durableFiles: groups.length, questionsPerGroup: 150, durableTotal: allDurable.length, mergedTotal: merged.length },
  canonicalTopics,
  groups: groupReports,
  biomechanicsBlueprint,
  merged: { answerIndices: mergedIndices, repeatingPeriodsCheckedThrough: 64, repeatingPeriods: periods, lengthAudit: mergedLengths },
  centralAudit: { status: centralAudit.status, errors: centralAudit.errors, warnings: centralAudit.warnings, total: centralAudit.total, answerIndices: centralAudit.answerIndices },
  provenance: { usedSourceCount: Object.keys(sourceUse).length, sourceUse: sortedRecord(sourceUse), incompleteCatalogEntries: incompleteCatalogEntries.map((source) => source.id) },
  coverageManifest: { section: manifest.section, total: manifest.total, groupCount: manifest.groups.length, mappingCount: manifest.questionMappings.length, sourceCountsMatch: JSON.stringify(sortedRecord(manifest.sources)) === JSON.stringify(sortedRecord(sourceUse)) },
  application: { dropdown: appBehavior, filteredChecks, fullCbtSeedsChecked: fullAttempts.length, fullCbtComposition: [32, 8, 40, 20] },
};
await (await import("node:fs/promises")).writeFile(resolve(root, "research/section_b_final_independent_structural_audit.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, errors: errors.length, warnings: warnings.length, durableTotal: allDurable.length, mergedTotal: merged.length, sourceCount: Object.keys(sourceUse).length, answerIndices: mergedIndices, strictLongest: mergedLengths.strictLongest, strictShortest: mergedLengths.strictShortest, spreadOver15: mergedLengths.spreadOver15, maxSpread: mergedLengths.maximumSpread, repeatingPeriods: periods }, null, 2));
if (errors.length) process.exitCode = 1;
