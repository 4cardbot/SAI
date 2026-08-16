import { readFile, writeFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type Question = {
  id: string; section: string; topic: string; subtopic: string; difficulty: string;
  text: string; options: string[]; correct: number; explanation: string; sourceId: string; asOf: string;
};

const groups = [
  { topic: "Olympic & Asian Games", slug: "olympic_asian_games" },
  { topic: "Indian sports ecosystem and schemes", slug: "indian_sports_ecosystem_schemes" },
  { topic: "Anti-doping awareness", slug: "anti_doping_awareness" },
  { topic: "Major international sporting events", slug: "major_international_events" },
  { topic: "Sports governance and ethics", slug: "sports_governance_ethics" },
] as const;

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, " ").replace(/[^a-z0-9 ]/g, "").trim();
const errors: string[] = [];
const warnings: string[] = [];
const all: Question[] = [];
const groupReports: Record<string, unknown>[] = [];

function inspectQuestion(question: Question, topic: string, file: string): void {
  const prefix = `${file}:${question.id}`;
  if (question.section !== "A2") errors.push(`${prefix} is not section A2`);
  if (question.topic !== topic) errors.push(`${prefix} has topic ${question.topic}, expected ${topic}`);
  if (question.asOf !== "2026-08-16") errors.push(`${prefix} has asOf ${question.asOf}, expected 2026-08-16`);
  if (!question.text.trim() || !question.explanation.trim()) errors.push(`${prefix} has empty text or explanation`);
  if (!Array.isArray(question.options) || question.options.length !== 4) errors.push(`${prefix} must have exactly four options`);
  if (new Set(question.options).size !== question.options.length) errors.push(`${prefix} has duplicate options`);
  if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${prefix} has invalid correct index`);
  if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${prefix} has unresolved source ${question.sourceId}`);
}

for (const group of groups) {
  const file = `question_bank/section_a2_${group.slug}.json`;
  const questions = JSON.parse(await readFile(file, "utf8")) as Question[];
  if (questions.length !== 40) errors.push(`${file} has ${questions.length} questions; expected 40`);
  const ids = new Set<string>();
  const texts = new Set<string>();
  const answerIndices = [0, 0, 0, 0];
  const strictLongest: string[] = [];
  const strictShortest: string[] = [];
  const spreads: Array<{ id: string; spread: number }> = [];
  const subtopics: Record<string, number> = {};
  const difficulty: Record<string, number> = {};
  const sources: Record<string, number> = {};
  questions.forEach((question) => {
    inspectQuestion(question, group.topic, file);
    if (ids.has(question.id)) errors.push(`${file} duplicate id ${question.id}`);
    if (texts.has(normalize(question.text))) errors.push(`${file} duplicate normalized stem ${question.id}`);
    ids.add(question.id); texts.add(normalize(question.text)); all.push(question);
    answerIndices[question.correct] += 1;
    subtopics[question.subtopic] = (subtopics[question.subtopic] ?? 0) + 1;
    difficulty[question.difficulty] = (difficulty[question.difficulty] ?? 0) + 1;
    sources[question.sourceId] = (sources[question.sourceId] ?? 0) + 1;
    const lengths = question.options.map((option) => option.length);
    const max = Math.max(...lengths); const min = Math.min(...lengths);
    if (lengths[question.correct] === max && lengths.filter((length) => length === max).length === 1) strictLongest.push(question.id);
    if (lengths[question.correct] === min && lengths.filter((length) => length === min).length === 1) strictShortest.push(question.id);
    if (max - min > 15) spreads.push({ id: question.id, spread: max - min });
  });
  if (answerIndices.some((count) => count !== 10)) warnings.push(`${file} answer-index balance ${answerIndices.join("/")}, target 10/10/10/10`);
  if (Object.values(subtopics).some((count) => count < 10)) warnings.push(`${file} has a subtopic below the ten-question floor`);
  groupReports.push({ topic: group.topic, file, count: questions.length, subtopics, difficulty, answerIndices, sources, strictLongestCount: strictLongest.length, strictShortestCount: strictShortest.length, lengthOutliers: spreads });
}

const merged = JSON.parse(await readFile("question_bank/section_a2.json", "utf8")) as Question[];
if (merged.length !== 200) errors.push(`question_bank/section_a2.json has ${merged.length} questions; expected 200`);
const mergedIds = new Set(merged.map((question) => question.id));
const groupIds = new Set(all.map((question) => question.id));
if (mergedIds.size !== merged.length) errors.push("Merged A2 bank has duplicate IDs");
if (groupIds.size !== all.length) errors.push("Durable A2 group files have duplicate IDs");
if (mergedIds.size !== groupIds.size || [...groupIds].some((id) => !mergedIds.has(id))) errors.push("Merged A2 bank does not exactly match the five durable group files");
const mergedText = new Map<string, string>();
merged.forEach((question) => {
  const key = normalize(question.text);
  if (mergedText.has(key)) errors.push(`Merged A2 duplicate normalized stem: ${question.id} and ${mergedText.get(key)}`);
  mergedText.set(key, question.id);
  inspectQuestion(question, question.topic, "question_bank/section_a2.json");
});

const answerIndices = [0, 0, 0, 0];
const strictLongest: string[] = [];
const strictShortest: string[] = [];
const lengthOutliers: Array<{ id: string; spread: number }> = [];
const sourceCounts: Record<string, number> = {};
merged.forEach((question) => {
  answerIndices[question.correct] += 1;
  sourceCounts[question.sourceId] = (sourceCounts[question.sourceId] ?? 0) + 1;
  const lengths = question.options.map((option) => option.length);
  const max = Math.max(...lengths); const min = Math.min(...lengths);
  if (lengths[question.correct] === max && lengths.filter((length) => length === max).length === 1) strictLongest.push(question.id);
  if (lengths[question.correct] === min && lengths.filter((length) => length === min).length === 1) strictShortest.push(question.id);
  if (max - min > 15) lengthOutliers.push({ id: question.id, spread: max - min });
});
if (strictLongest.length / merged.length >= 0.35) warnings.push(`Correct option is strictly longest in ${strictLongest.length}/200 items`);
if (strictShortest.length / merged.length >= 0.35) warnings.push(`Correct option is strictly shortest in ${strictShortest.length}/200 items`);
if (lengthOutliers.length) warnings.push(`${lengthOutliers.length} questions have option-length spread above 15 characters`);

const patternRuns: string[] = [];
for (let i = 0; i < merged.length - 3; i += 1) {
  const pattern = merged.slice(i, i + 4).map((question) => question.correct).join("");
  if (pattern === "0123" || pattern === "1230" || pattern === "2301" || pattern === "3012") patternRuns.push(`${i + 1}-${i + 4}:${pattern}`);
}
if (patternRuns.length > 12) warnings.push(`Potentially mechanical four-position answer windows: ${patternRuns.length}`);
const answerSequence = merged.map((question) => question.correct);
const exactRepeatingPeriods: number[] = [];
for (let period = 1; period <= 50; period += 1) {
  if (answerSequence.every((value, index) => index < period || value === answerSequence[index % period])) exactRepeatingPeriods.push(period);
}
if (exactRepeatingPeriods.length) warnings.push(`Exact repeating answer-position period(s): ${exactRepeatingPeriods.join(", ")}`);

const report = {
  generatedAt: "2026-08-16",
  section: "A2",
  expectedQuestions: 200,
  groupReports,
  merged: { count: merged.length, answerIndices, sourceCounts, strictLongestCount: strictLongest.length, strictShortestCount: strictShortest.length, lengthOutliers, mechanicalAnswerWindows: patternRuns, exactRepeatingPeriods, answerSequence },
  sourceResolution: { used: Object.keys(sourceCounts).length, unresolved: Object.keys(sourceCounts).filter((sourceId) => !SOURCE_CATALOG_BY_ID.has(sourceId)) },
  errors,
  warnings,
  status: errors.length ? "fail" : warnings.length ? "pass-with-review-flags" : "pass",
};
await writeFile("research/a2_central_audit.json", `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, errors: errors.length, warnings: warnings.length, answerIndices, strictLongest: strictLongest.length, strictShortest: strictShortest.length, lengthOutliers: lengthOutliers.length }, null, 2));
if (errors.length) process.exitCode = 1;
