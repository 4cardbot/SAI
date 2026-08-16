import { readFile, writeFile } from "node:fs/promises";
import { SOURCE_CATALOG_BY_ID } from "../src/data/sourceCatalog";

type BQuestion = {
  id: string;
  section: "B";
  topic: string;
  subtopic: string;
  difficulty: "foundational" | "applied" | "analytical";
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  sourceId: string;
};

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

const biomechanicsSubtopicCounts: Record<string, number> = {
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

const errors: string[] = [];
const warnings: string[] = [];
const groupReports: Array<Record<string, unknown>> = [];
const all: BQuestion[] = [];
const stems = new Set<string>();
const ids = new Set<string>();

function auditLengths(questions: BQuestion[]) {
  let strictLongest = 0;
  let strictShortest = 0;
  let outliers = 0;
  const flags: Array<{ id: string; spread: number; correct: number; medianDistractor: number }> = [];
  questions.forEach((question) => {
    const lengths = question.options.map((option) => option.length);
    const sorted = [...lengths].sort((a, b) => a - b);
    const median = (sorted[1] + sorted[2]) / 2;
    const correctLength = lengths[question.correct];
    const distractors = lengths.filter((_, index) => index !== question.correct);
    if (correctLength > Math.max(...distractors)) strictLongest += 1;
    if (correctLength < Math.min(...distractors)) strictShortest += 1;
    const spread = Math.max(...lengths) - Math.min(...lengths);
    if (spread > 15) {
      outliers += 1;
      flags.push({ id: question.id, spread, correct: correctLength, medianDistractor: median });
    } else if (correctLength - median >= 10) {
      flags.push({ id: question.id, spread, correct: correctLength, medianDistractor: median });
    }
  });
  return { strictLongest, strictShortest, outliers, flags };
}

for (const group of groups) {
  const file = `question_bank/section_b_${group.slug}.json`;
  const questions = JSON.parse(await readFile(file, "utf8")) as BQuestion[];
  if (questions.length !== 150) errors.push(`${file} has ${questions.length}; expected 150`);
  const answerIndices = [0, 0, 0, 0];
  const difficulty: Record<string, number> = { foundational: 0, applied: 0, analytical: 0 };
  const subtopics: Record<string, number> = {};
  const sources: Record<string, number> = {};
  questions.forEach((question) => {
    all.push(question);
    if (question.section !== "B") errors.push(`${question.id} has section ${question.section}`);
    if (question.topic !== group.topic) errors.push(`${question.id} has topic ${question.topic}; expected ${group.topic}`);
    if (!question.id || !question.text || !question.subtopic || !question.explanation) errors.push(`${question.id} has missing required text`);
    if (question.options.length !== 4 || new Set(question.options).size !== 4) errors.push(`${question.id} must have four unique options`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`${question.id} has invalid correct index`);
    else answerIndices[question.correct] += 1;
    if (!(question.difficulty in difficulty)) errors.push(`${question.id} has unsupported difficulty ${question.difficulty}`);
    else difficulty[question.difficulty] += 1;
    subtopics[question.subtopic] = (subtopics[question.subtopic] ?? 0) + 1;
    sources[question.sourceId] = (sources[question.sourceId] ?? 0) + 1;
    if (!SOURCE_CATALOG_BY_ID.has(question.sourceId)) errors.push(`${question.id} has unknown source ${question.sourceId}`);
    const source = SOURCE_CATALOG_BY_ID.get(question.sourceId);
    if (source && (!(source.url || source.localPath) || !source.scope || !source.locator)) errors.push(`${question.id} uses incomplete source metadata ${question.sourceId}`);
    if (ids.has(question.id)) errors.push(`Duplicate question ID ${question.id}`);
    ids.add(question.id);
    if (stems.has(question.text)) errors.push(`Duplicate question stem ${question.id}`);
    stems.add(question.text);
  });
  if (group.slug === "biomechanics_movement_analysis" && JSON.stringify(subtopics) !== JSON.stringify(biomechanicsSubtopicCounts)) errors.push("Biomechanics subtopic counts do not match the central blueprint");
  const lengthAudit = auditLengths(questions);
  if (lengthAudit.outliers > 0) warnings.push(`${group.topic} has ${lengthAudit.outliers} option-length outliers over 15 characters`);
  groupReports.push({ topic: group.topic, count: questions.length, subtopics, difficulty, answerIndices, sources, lengthAudit });
}

const merged = JSON.parse(await readFile("question_bank/section_b.json", "utf8")) as BQuestion[];
if (merged.length !== 1350) errors.push(`Merged section_b.json has ${merged.length}; expected 1350`);
if (JSON.stringify(merged) !== JSON.stringify(all)) errors.push("Merged section_b.json does not match the durable group-file concatenation");
const mergedLengths = auditLengths(merged);
const totalAnswerIndices = [0, 0, 0, 0];
merged.forEach((question) => { if (question.correct >= 0 && question.correct <= 3) totalAnswerIndices[question.correct] += 1; });
if (mergedLengths.outliers > 0) warnings.push(`Merged bank has ${mergedLengths.outliers} option-length outliers over 15 characters`);

const answerPeriodFlags: number[] = [];
for (let period = 1; period <= 64; period += 1) {
  let repeats = true;
  for (let index = period; index < merged.length; index += 1) {
    if (merged[index].correct !== merged[index % period].correct) { repeats = false; break; }
  }
  if (repeats) answerPeriodFlags.push(period);
}
if (answerPeriodFlags.length) warnings.push(`Exact repeating answer-index periods: ${answerPeriodFlags.join(", ")}`);

const report = {
  generatedAt: "2026-08-17",
  status: errors.length ? "fail" : warnings.length ? "pass-with-review-flags" : "pass",
  errors,
  warnings,
  total: merged.length,
  answerIndices: totalAnswerIndices,
  lengthAudit: mergedLengths,
  groups: groupReports,
};
await writeFile("research/section_b_central_audit.json", `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, errors: errors.length, warnings: warnings.length, total: merged.length, answerIndices: totalAnswerIndices, strictLongest: mergedLengths.strictLongest, strictShortest: mergedLengths.strictShortest, lengthOutliers: mergedLengths.outliers }, null, 2));
if (errors.length) process.exitCode = 1;
