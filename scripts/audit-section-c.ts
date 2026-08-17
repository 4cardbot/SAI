import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { SOURCE_CATALOG, SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";
import { filterQuestions, generateAttemptQuestions, topicsForSection } from "../src/quiz";
import { QUESTION_BANK } from "../src/data/questionBank";
import type { Question } from "../src/types";

const root = process.cwd();
const groups = [
  { topic: "Lower Extremity Scenarios", slug: "lower_extremity", prefix: "c-lower" },
  { topic: "Upper Extremity Scenarios", slug: "upper_extremity", prefix: "c-upper" },
  { topic: "Spine & Pelvis Scenarios", slug: "spine_pelvis", prefix: "c-spine" },
  { topic: "On-Field & Emergency Triage", slug: "on_field_emergency_triage", prefix: "c-emergency" },
  { topic: "Return to Play (RTP) Frameworks", slug: "return_to_play", prefix: "c-rtp" },
] as const;
const requiredConsensus = [
  "ioc-concussion-amsterdam-2022",
  "doha-groin-consensus-2015",
  "ioc-load-illness-2016",
] as const;
const errors: string[] = [];
const warnings: string[] = [];
const allDurable: Question[] = [];
const ids = new Set<string>();
const normalizedStems = new Set<string>();
const sourceUse: Record<string, number> = {};
const groupReports: Array<Record<string, unknown>> = [];

function pad(value: number): string { return String(value).padStart(3, "0"); }
function normalize(value: string): string { return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
function answerCounts(questions: Question[]): number[] { return [0, 1, 2, 3].map((index) => questions.filter((question) => question.correct === index).length); }
function repeatingPeriods(questions: Question[], maxPeriod = 64): number[] {
  const periods: number[] = [];
  for (let period = 1; period <= Math.min(maxPeriod, questions.length - 1); period += 1) {
    if (questions.every((question, index) => index < period || question.correct === questions[index % period].correct)) periods.push(period);
  }
  return periods;
}
function lengthAudit(questions: Question[]) {
  let strictLongest = 0;
  let strictShortest = 0;
  let spreadOver15 = 0;
  let correctOverMedianBy10 = 0;
  let maximumSpread = 0;
  const flags: Array<{ id: string; spread: number; correctLength: number; medianDistractor: number }> = [];
  questions.forEach((question) => {
    const lengths = question.options.map((option) => option.length);
    const sorted = [...lengths].sort((a, b) => a - b);
    const distractors = lengths.filter((_, index) => index !== question.correct).sort((a, b) => a - b);
    const medianDistractor = distractors[1];
    const correctLength = lengths[question.correct];
    const spread = Math.max(...lengths) - Math.min(...lengths);
    maximumSpread = Math.max(maximumSpread, spread);
    if (correctLength > Math.max(...distractors)) strictLongest += 1;
    if (correctLength < Math.min(...distractors)) strictShortest += 1;
    if (spread > 15 || correctLength - medianDistractor >= 10) {
      if (spread > 15) spreadOver15 += 1;
      if (correctLength - medianDistractor >= 10) correctOverMedianBy10 += 1;
      flags.push({ id: question.id, spread, correctLength, medianDistractor });
    }
    void sorted;
  });
  return { strictLongest, strictShortest, spreadOver15, correctOverMedianBy10, maximumSpread, flags };
}
function assertSource(question: Question): void {
  const source = SOURCE_CATALOG_BY_ID.get(question.sourceId);
  if (!source) { errors.push(`${question.id} uses unknown sourceId ${question.sourceId}`); return; }
  if (!(source.url || source.localPath)) errors.push(`${question.id} source lacks URL/localPath: ${question.sourceId}`);
  if (!source.scope?.trim()) errors.push(`${question.id} source lacks scope: ${question.sourceId}`);
  if (!source.locator?.trim()) errors.push(`${question.id} source lacks locator: ${question.sourceId}`);
  if (source.localPath && !existsSync(resolve(root, source.localPath))) errors.push(`${question.id} source localPath does not exist: ${source.localPath}`);
}

for (const group of groups) {
  const file = `question_bank/section_c_${group.slug}.json`;
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  if (questions.length !== 200) errors.push(`${file} has ${questions.length}; expected 200`);
  const cases = new Map<string, Question[]>();
  const subtopics: Record<string, number> = {};
  const sources: Record<string, number> = {};
  questions.forEach((question, index) => {
    const caseNumber = Math.floor(index / 4) + 1;
    const questionNumber = (index % 4) + 1;
    const passageId = `${group.prefix}-${pad(caseNumber)}`;
    if (question.id !== `${passageId}-q${questionNumber}`) errors.push(`${question.id} is not in contiguous case order`);
    if (question.section !== "C" || question.topic !== group.topic) errors.push(`${question.id} has incorrect section/topic`);
    if (question.passageId !== passageId || !question.passage || question.passage.length < 40) errors.push(`${question.id} has invalid case linkage`);
    if (question.options.length !== 4 || new Set(question.options).size !== 4) errors.push(`${question.id} has invalid option set`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${question.id} has invalid answer index`);
    if (!(question.difficulty === "foundational" || question.difficulty === "applied" || question.difficulty === "analytical")) errors.push(`${question.id} has invalid difficulty`);
    if (ids.has(question.id)) errors.push(`Duplicate question ID ${question.id}`);
    ids.add(question.id);
    const stem = `${question.passageId}:${normalize(question.text)}`;
    if (normalizedStems.has(stem)) errors.push(`Duplicate normalized Section C question stem: ${question.id}`);
    normalizedStems.add(stem);
    subtopics[question.subtopic] = (subtopics[question.subtopic] ?? 0) + 1;
    sources[question.sourceId] = (sources[question.sourceId] ?? 0) + 1;
    sourceUse[question.sourceId] = (sourceUse[question.sourceId] ?? 0) + 1;
    assertSource(question);
    const caseQuestions = cases.get(question.passageId) ?? [];
    caseQuestions.push(question);
    cases.set(question.passageId, caseQuestions);
    allDurable.push(question);
  });
  if (cases.size !== 50) errors.push(`${file} has ${cases.size} cases; expected 50`);
  cases.forEach((caseQuestions, passageId) => {
    if (caseQuestions.length !== 4) errors.push(`${file} case ${passageId} has ${caseQuestions.length} questions`);
    if (new Set(caseQuestions.map((question) => question.passage)).size !== 1) errors.push(`${file} case ${passageId} has inconsistent passage text`);
  });
  const indices = answerCounts(questions);
  if (indices.some((count) => count < 35 || count > 65)) warnings.push(`${group.topic} answer indices outside 35–65: ${indices.join("/")}`);
  const difficulty = { foundational: questions.filter((question) => question.difficulty === "foundational").length, applied: questions.filter((question) => question.difficulty === "applied").length, analytical: questions.filter((question) => question.difficulty === "analytical").length };
  const lengths = lengthAudit(questions);
  if (lengths.spreadOver15 > 0) warnings.push(`${group.topic} has ${lengths.spreadOver15} option sets over 15 characters spread`);
  const periods = repeatingPeriods(questions);
  if (periods.length) errors.push(`${group.topic} has deterministic answer periods: ${periods.join(", ")}`);
  groupReports.push({ topic: group.topic, file, count: questions.length, cases: cases.size, subtopics, sources, difficulty, answerIndices: indices, repeatingPeriods: periods, lengthAudit: lengths });
}

if (allDurable.length !== 1000) errors.push(`Durable Section C total is ${allDurable.length}; expected 1000`);
const merged = JSON.parse(await readFile("question_bank/section_c.json", "utf8")) as Question[];
if (merged.length !== 1000) errors.push(`Merged Section C has ${merged.length}; expected 1000`);
if (JSON.stringify(merged) !== JSON.stringify(allDurable)) errors.push("Merged Section C does not match durable-file concatenation");
const mergedLengths = lengthAudit(merged);
const mergedPeriods = repeatingPeriods(merged, 128);
if (mergedPeriods.length) errors.push(`Merged Section C has deterministic answer periods: ${mergedPeriods.join(", ")}`);
const mergedIndices = answerCounts(merged);
for (const sourceId of requiredConsensus) {
  const caseIds = new Set(merged.filter((question) => question.sourceId === sourceId).map((question) => question.passageId));
  if (caseIds.size < 20) errors.push(`${sourceId} has ${caseIds.size} source-supported cases; expected at least 20`);
}
if (JSON.stringify(topicsForSection(QUESTION_BANK, "C")) !== JSON.stringify(groups.map((group) => group.topic).sort((a, b) => a.localeCompare(b)))) errors.push("Section C topic dropdown does not expose exactly five themes");
for (const group of groups) {
  const matching = filterQuestions(QUESTION_BANK, { section: "C", topic: group.topic });
  if (matching.length !== 200) errors.push(`${group.topic} topic filtering returns ${matching.length}; expected 200`);
  const attempt = generateAttemptQuestions(QUESTION_BANK, 17082026, "filtered", { section: "C", topic: group.topic });
  if (attempt.length !== 200) errors.push(`${group.topic} filtered attempt has ${attempt.length}; expected 200`);
  const passageCounts = new Map<string, number>();
  attempt.forEach((item) => { const passageId = QUESTION_BANK.find((question) => question.id === item.questionId)?.passageId; passageCounts.set(passageId ?? "", (passageCounts.get(passageId ?? "") ?? 0) + 1); });
  if (passageCounts.size !== 50 || [...passageCounts.values()].some((count) => count !== 4)) errors.push(`${group.topic} filtered attempt splits a case`);
}
for (let seed = 1; seed <= 100; seed += 1) {
  const attempt = generateAttemptQuestions(QUESTION_BANK, seed, "full");
  const c = attempt.filter((item) => QUESTION_BANK.find((question) => question.id === item.questionId)?.section === "C");
  if (c.length !== 20) errors.push(`Full CBT seed ${seed} has ${c.length} Section C questions`);
  const passages = new Map<string, number>();
  c.forEach((item) => { const passageId = QUESTION_BANK.find((question) => question.id === item.questionId)?.passageId; passages.set(passageId ?? "", (passages.get(passageId ?? "") ?? 0) + 1); });
  if (passages.size !== 5 || [...passages.values()].some((count) => count !== 4)) errors.push(`Full CBT seed ${seed} does not select five complete Section C cases`);
}
const report = {
  generatedAt: "2026-08-17",
  auditType: "central Section C structural, provenance, coverage, case-continuity and application audit",
  status: errors.length ? "fail" : warnings.length ? "pass-with-review-flags" : "pass",
  errors,
  warnings,
  total: allDurable.length,
  groups: groupReports,
  answerIndices: mergedIndices,
  merged: { count: merged.length, repeatingPeriods: mergedPeriods, lengthAudit: mergedLengths },
  requiredConsensusCaseCounts: Object.fromEntries(requiredConsensus.map((sourceId) => [sourceId, new Set(merged.filter((question) => question.sourceId === sourceId).map((question) => question.passageId)).size])),
  sourceUse,
  sourceCatalogIncompleteEntries: SOURCE_CATALOG.filter((source) => !(source.url || source.localPath) || !source.scope?.trim() || !source.locator?.trim()).map((source) => source.id),
  fullCbtSeedsChecked: 100,
  fullCbtComposition: [32, 8, 40, 20],
  filteredThemeChecks: groups.map((group) => ({ topic: group.topic, count: filterQuestions(QUESTION_BANK, { section: "C", topic: group.topic }).length })),
};
await writeFile("research/section_c_central_audit.json", `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, errors: errors.length, warnings: warnings.length, total: report.total, answerIndices: mergedIndices, requiredConsensusCaseCounts: report.requiredConsensusCaseCounts, strictLongest: mergedLengths.strictLongest, strictShortest: mergedLengths.strictShortest, spreadOver15: mergedLengths.spreadOver15, repeatingPeriods: mergedPeriods }, null, 2));
if (errors.length) process.exitCode = 1;
